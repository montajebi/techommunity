const crypto = require('crypto');
const { connect } = require('getstream');
const bcrypt = require('bcrypt');
const { StreamChat } = require('stream-chat');

const { STREAM_API_KEY, STREAM_API_SECRET, STREAM_APP_ID } = process.env;

exports.login = async (req, res) => {
  try {
    const { username, password } = req.body;

    const serverClient = connect(STREAM_API_KEY, STREAM_API_SECRET, STREAM_APP_ID);
    const client = StreamChat.getInstance(STREAM_API_KEY, STREAM_API_SECRET);

    const { users } = await client.queryUsers({ name: username });

    if (!users.length) {
      return res.status(400).json({ message: 'User not found!' });
    }

    const user = users[0];
    const success = await bcrypt.compare(password, users.hashedPassword);

    if (!success) {
      return res.status(500).json({ message: 'Incorrect password' });
    }

    const token = serverClient.createUserToken(user.id);

    res.status(200).json({
      token,
      fullName: user.fullName,
      username,
      userId: user.id,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error });
  }
};

exports.signup = async (req, res) => {
  try {
    const { fullName, username, password, phoneNumber } = req.body;
    const userId = crypto.randomBytes(16).toString('hex');
    const hashedPassword = await bcrypt.hash(password, 10);

    const serverClient = connect(STREAM_API_KEY, STREAM_API_SECRET, STREAM_APP_ID);
    const token = serverClient.createUserToken(userId);

    res.status(200).json({
      token,
      fullName,
      username,
      hashedPassword,
      phoneNumber,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error });
  }
};
