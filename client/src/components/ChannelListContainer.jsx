import { ChannelList, useChatContext } from 'stream-chat-react';
import { ChannelSearch, TeamChannelList, TeamChannelPreview } from './';
import TechImg from '../assets/tech.png';
import LogoutImg from '../assets/logout.png';

const SideBar = () => {
  return (
    <div className="channel-list__sidebar">
      <div className="channel-list__sidebar__icon1">
        <div className="icon1__inner">
          <img src={TechImg} alt="tech" width="30" />
        </div>
      </div>

      <div className="channel-list__sidebar__icon2">
        <div className="icon2__inner">
          <img src={LogoutImg} alt="logout" width="30" />
        </div>
      </div>
    </div>
  );
};

const CompanyHeader = () => {
  return (
    <div className="channel-list__header">
      <p className="channel-list__header__text">{`<techommunity />`}</p>
    </div>
  );
};

const ChannelListContainer = () => {
  return (
    <>
      <SideBar />
      <div className="channel-list__list__wrapper">
        <CompanyHeader />
        <ChannelSearch />
        <ChannelList
          filters={{}}
          channelRenderFilterFn={() => {}}
          List={(listProps) => <TeamChannelList {...listProps} type="team" />}
          Preview={(previewProps) => <TeamChannelPreview {...previewProps} type="team" />}
        />
      </div>
    </>
  );
};

export default ChannelListContainer;
