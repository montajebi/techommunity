const TeamChannelList = ({ children, error = false, loading, type }) => {
  console.log(children, (error = false), loading, type);

  if (error) {
    return type === 'team' ? (
      <div className="team-channel-list">
        <p className="team-channel__message">Connection error, please try again!</p>
      </div>
    ) : null;
  }

  if (loading) {
    return loading ? (
      <div className="team-channel-list">
        <p className="team-channel__message loading">
          {type === 'team' ? 'Channels' : 'Messages'} loading...
        </p>
      </div>
    ) : null;
  }

  return (
    <div className="team-channel-list">
      <div className="team-channel-list__header">
        <p className="team-channel-list__header__title">
          {type === 'team' ? 'Channels' : 'Direct Messages'}
        </p>
        {/* Button - add channel */}
      </div>
      {children}
    </div>
  );
};

export default TeamChannelList;
