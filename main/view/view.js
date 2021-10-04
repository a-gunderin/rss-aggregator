import onChange from 'on-change';
import i18next from 'i18next';
import state from '../model/model.js';
import options from '../language/languages.js';
import {
  renderErrorInfo, removeErrorInfo, renderSuccessInfo, removeSuccessInfo,
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
      renderErrorInfo(i18nextInstance.t('invalidUrl'));
    }
    if (value === true) {
      removeErrorInfo();
    }
  }
  if (path === 'isInFeed') {
    if (value === true) {
      renderErrorInfo(i18nextInstance.t('isInFeed'));
    }
    if (value === false) {
      removeErrorInfo();
    }
  }
  if (path === 'isValidRss') {
    if (value === false) {
      renderErrorInfo(i18nextInstance.t('invalidRss'));
    }
    if (value === true) {
      removeErrorInfo();
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
      renderSuccessInfo(i18nextInstance.t('rssLoadedSuccessfully'));
    }
    if (value === false) {
      removeSuccessInfo();
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
