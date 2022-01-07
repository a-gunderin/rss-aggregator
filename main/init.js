import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';
import * as yup from 'yup';
import onChange from 'on-change';
import axios from 'axios';
import model from './model/model.js';
import elements from './common/elements.js';
import view from './view/view.js';
import rssParser from './common/rssParser.js';
import updateRss from './common/updateRss.js';

export default () => {
  const state = onChange(model, (path, value) => {
    view(model, path, value);
  });

  const schema = yup.string().url();

  document.addEventListener('DOMContentLoaded', () => {
    elements.form.addEventListener('submit', (e) => {
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
          const proxyUrl = `https://hexlet-allorigins.herokuapp.com/get?disableCache=true&url=${inputData}`;
          state.rssIsLoading = true;
          axios.get(proxyUrl)
            .then((response) => {
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
            });
          return false;
        })
        .catch(() => {
          state.isValidUrl = false;
          state.rssIsLoading = false;
        });
    });

    elements.postsList.addEventListener('click', (e) => {
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
  });
};
