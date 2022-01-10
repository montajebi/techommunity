const _dotenv = require('dotenv').config();
const express = require('express');
const cors = require('cors');

const authRouter = require('./routes/authRoutes');

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get('/', (req, res) => {
  res.send('Hello techommunity!');
});

app.use('/auth', authRouter);

const PORT = process.env.PORT || 5005;
app.listen(PORT, () => console.log(`Server running on port: ${PORT}...`));
