import * as yup from 'yup';
import axios from 'axios';
import elements from '../common/elements.js';
import watchedState from '../view/view.js';
import rssParser from '../common/rssParser.js';
import updateRss from './updateRss.js';

export default () => {
  const schema = yup.string().url();
  elements.form.addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const inputData = formData.get('url');
    schema
      .validate(inputData)
      .then(() => {
        watchedState.isValidUrl = true;
      })
      .then(() => {
        if (watchedState.feedUrls.includes(inputData)) {
          watchedState.isInFeed = true;
          return false;
        }
        watchedState.isInFeed = false;
        const proxyUrl = `https://hexlet-allorigins.herokuapp.com/get?disableCache=true&url=${inputData}`;
        axios.get(proxyUrl)
          .then((response) => {
            watchedState.rssLoaded = false;
            if (response.status === 200) {
              const data = rssParser(response.data.contents);
              if (data === 'parserError') {
                watchedState.isValidRss = false;
                return false;
              }
              watchedState.rssLoaded = true;
              watchedState.feedUrls.push(inputData);
              watchedState.feeds.push({ title: data.title, description: data.description });
              watchedState.posts.push(...data.items);
              return false;
            }
            return false;
          })
          .then(() => {
            updateRss();
          });
        return false;
      })
      .catch(() => {
        watchedState.isValidUrl = false;
      });
  });

  elements.postsList.addEventListener('click', (e) => {
    const { target } = e;
    if (target.tagName === 'A') {
      watchedState.viewedArticles.push(target.href);
    }
    if (target.tagName === 'BUTTON') {
      watchedState.viewedArticles.push(target.previousElementSibling.href);
      watchedState.activePostInModal = target.previousElementSibling.href;
    }
    return false;
  });
};
