import elements from '../common/elements.js';

export default (viewedArticles) => {
  viewedArticles.forEach((href) => {
    const link = elements.postsList.querySelector(`[href='${href}']`);
    link.classList.remove('fw-bold');
    link.classList.add('fw-normal');
  });
  return false;
};
