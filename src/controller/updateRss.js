import axios from 'axios';
import watchedState from '../view/view.js';
import rssParser from '../common/rssParser.js';

export default () => {
  if (!watchedState.feedUrls.length) {
    return false;
  }
  const timer = () => {
    setTimeout(() => {
      const promises = watchedState.feedUrls.map((feed) => {
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
          watchedState.posts = items.flat();
          timer();
        });
    }, 5000);
  };
  timer();
  return false;
};
