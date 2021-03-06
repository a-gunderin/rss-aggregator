import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';
import * as yup from 'yup';
import onChange from 'on-change';
import axios from 'axios';
import i18next from 'i18next';
import model from './model/model.js';
import view from './view/view.js';
import rssParser from './common/rssParser.js';
import updateRss from './common/updateRss.js';
import options from './language/index.js';

export default async () => {
  const i18nextInstance = i18next.createInstance();
  await i18nextInstance.init(options);

  const modelInstance = JSON.parse(JSON.stringify(model));

  const state = onChange(modelInstance, (path, value) => {
    view(modelInstance, path, value, i18nextInstance);
  });

  const schema = yup.string().url();

  document.getElementById('rss-form').addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const inputData = formData.get('url');
    schema
      .validate(inputData)
      .then(() => {
        state.isValidUrl = true;
      })
      .then(() => {
        if (state.feedUrls.includes(inputData)) {
          state.isInFeed = true;
          return false;
        }
        state.isInFeed = false;
        const proxyUrl = `https://allorigins.hexlet.app/get?disableCache=true&url=${encodeURIComponent(inputData)}`;
        state.rssIsLoading = true;
        axios.get(proxyUrl)
          .then((response) => {
            state.networkError = false;
            state.rssLoaded = false;
            if (response.status >= 200 && response.status <= 299) {
              const data = rssParser(response.data.contents);
              if (data === 'parserError') {
                state.isValidRss = false;
                return false;
              }
              state.rssIsLoading = false;
              state.rssLoaded = true;
              state.feedUrls.push(inputData);
              state.feeds.push({ title: data.title, description: data.description });
              state.posts.push(...data.items);
              return false;
            }
            state.isValidRss = false;
            return false;
          })
          .then(() => {
            state.rssIsLoading = false;
            updateRss(state);
          })
          .catch((err) => {
            if (err.message === 'Network Error') {
              state.networkError = true;
            }
          });
        return false;
      })
      .catch(() => {
        state.isValidUrl = false;
        state.rssIsLoading = false;
      });
  });

  document.getElementById('posts-list').addEventListener('click', (e) => {
    const { target } = e;
    if (target.tagName === 'A') {
      state.viewedArticles.push(target.href);
    }
    if (target.tagName === 'BUTTON') {
      state.viewedArticles.push(target.previousElementSibling.href);
      state.activePostInModal = target.previousElementSibling.href;
    }
    return false;
  });
};
