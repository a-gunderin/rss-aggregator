import axios from 'axios';
import rssParser from './rssParser.js';

export default (state) => {
  if (!state.feedUrls.length) {
    return false;
  }
  const timer = () => {
    setTimeout(() => {
      const promises = state.feedUrls.map((feed) => {
        const proxyUrl = `https://hexlet-allorigins.herokuapp.com/get?disableCache=true&url=${feed}`;
        return axios
          .get(proxyUrl)
          .then((response) => {
            const data = rssParser(response.data.contents);
            return data.items;
          });
      });
      Promise
        .all(promises)
        .then((items) => {
          const stateX = state;
          stateX.posts = items.flat();
          timer();
        });
    }, 5000);
  };
  timer();
  return false;
};
