import onChange from 'on-change';
import i18next from 'i18next';
import state from '../model/model.js';
import options from '../language/languages.js';
import {
  renderErrorBlock, removeErrorBlock, renderSuccessBlock, removeSuccessBlock,
} from './renderInfoBlock.js';
import renderFeeds from './renderFeeds.js';
import renderPosts from './renderPosts.js';
import renderModalInfo from './renderModalInfo.js';
import markViewedArticles from './markViewedArticles.js';
import { blockForm, unblockForm } from './formBlockers.js';

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
    const { viewedArticles } = state;
    renderPosts(value, viewedArticles);
  }
  if (path === 'activePostInModal') {
    const post = state.posts.filter((item) => item.link === value);
    renderModalInfo(...post);
  }
  if (path === 'viewedArticles') {
    markViewedArticles(value);
  }
  if (path === 'rssLoaded') {
    if (value === true) {
      renderSuccessBlock(i18nextInstance.t('rssLoadedSuccessfully'));
    }
    if (value === false) {
      removeSuccessBlock();
    }
  }
  if (path === 'rssIsLoading') {
    if (value === true) {
      blockForm();
    }
    if (value === false) {
      unblockForm();
    }
  }
});
