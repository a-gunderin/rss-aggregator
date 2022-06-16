import {
  renderErrorInfo, removeErrorInfo, renderSuccessInfo, removeSuccessInfo,
} from './renderInfoBlock.js';
import renderFeeds from './renderFeeds.js';
import renderPosts from './renderPosts.js';
import renderModalInfo from './renderModalInfo.js';
import markViewedArticles from './markViewedArticles.js';
import { disableForm, enableForm } from './formBlockers.js';

export default (model, path, value, i18nextInstance) => {
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
  if (path === 'networkError') {
    if (value === true) {
      renderErrorInfo(i18nextInstance.t('networkError'));
    }
    if (value === false) {
      removeErrorInfo();
    }
  }
  if (path === 'feeds') {
    renderFeeds(value);
  }
  if (path === 'posts') {
    const { viewedArticles } = model;
    renderPosts(value, viewedArticles);
  }
  if (path === 'activePostInModal') {
    const post = model.posts.filter((item) => item.link === value);
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
      disableForm();
    }
    if (value === false) {
      enableForm();
    }
  }
};
