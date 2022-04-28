import axios from 'axios';
import rssParser from './rssParser.js';

export default (model) => {
  const state = model;

  if (!state.feedUrls.length) {
    return false;
  }
  const timer = () => {
    setTimeout(() => {
      const promises = state.feedUrls.map((feed) => {
        const proxyUrl = `https://allorigins.hexlet.app/get?disableCache=true&url=${encodeURIComponent(feed)}`;
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
          state.posts = items.flat();
          timer();
        });
    }, 5000);
  };
  timer();
  return false;
};
