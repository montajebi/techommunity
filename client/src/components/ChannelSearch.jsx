import { useCallback, useState } from 'react';
import { useChatContext } from 'stream-chat-react';
import SearchIcon from '../assets/search.png';

const ChannelSearch = () => {
  const [query, setQuery] = useState('');
  const [loading, setLoading] = useState(false);

  const getChannels = useCallback(async (query) => {
    try {
      // TODO: fetch channels
    } catch (error) {
      setQuery('');
    }
  }, []);

  const onSearch = useCallback(
    (event) => {
      event.preventDefault();

      setLoading(true);
      setQuery(event.target.value);
      getChannels(event.target.value);
    },
    [getChannels],
  );

  return (
    <div className="channel-search__container">
      <div className="channel-search__input__wrapper">
        <div className="channel-search__input__icon">
          <img src={SearchIcon} width="16" alt="search" />
        </div>
        <input
          className="channel-search__input__text"
          placeholder="Search"
          type="text"
          value={query}
          onChange={onSearch}
        />
      </div>
    </div>
  );
};

export default ChannelSearch;
