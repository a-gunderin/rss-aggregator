import onChange from 'on-change';
import i18next from 'i18next';
import state from '../model/model.js';
import options from '../language/languages.js';
import { renderErrorBlock, removeErrorBlock } from './renderInfoBlock.js';
import renderFeeds from './renderFeeds.js';
import renderPosts from './renderPosts.js';
import renderModalInfo from './renderModalInfo.js';

const i18nextInstance = i18next.createInstance();
i18nextInstance.init(options);

export default onChange(state, (path, value) => {
  if (path === 'isValidUrl') {
    if (value === false) {
      renderErrorBlock(i18nextInstance.t('invalidUrl'));
    }
    if (value === true) {
      removeErrorBlock();
    }
  }
  if (path === 'isInFeed') {
    if (value === true) {
      renderErrorBlock(i18nextInstance.t('isInFeed'));
    }
    if (value === false) {
      removeErrorBlock();
    }
  }
  if (path === 'isValidRss') {
    if (value === false) {
      renderErrorBlock(i18nextInstance.t('invalidRss'));
    }
    if (value === true) {
      removeErrorBlock();
    }
  }
  if (path === 'feeds') {
    renderFeeds(value);
  }
  if (path === 'posts') {
    renderPosts(value);
  }

  if (path === 'activePostInModal') {
    const post = state.posts.filter((item) => item.link === value);
    renderModalInfo(...post);
  }
});
