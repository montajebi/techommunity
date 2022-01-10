import { StreamChat } from 'stream-chat';
import { Chat } from 'stream-chat-react';
import './App.css';
import { ChannelContainer, ChannelListContainer, Auth } from './components';

const apiKey = '7uew53e72g83';
const client = StreamChat.getInstance(apiKey);

const authToken = false;

const App = () => {
  if (!authToken) return <Auth />;

  return (
    <div className="app__wrapper">
      <Chat client={client} theme="team light">
        <ChannelListContainer />
        <ChannelContainer />
      </Chat>
    </div>
  );
};

export default App;
