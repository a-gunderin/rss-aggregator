export default (viewedArticles) => {
  viewedArticles.forEach((href) => {
    const link = document.getElementById('posts-list').querySelector(`[href='${href}']`);
    link.classList.remove('fw-bold');
    link.classList.add('fw-normal');
  });
  return false;
};
