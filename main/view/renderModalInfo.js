export default (post) => {
  const { title } = post;
  const { description } = post;
  const { link } = post;

  const titleEl = document.getElementById('modal').querySelector('.modal-title');
  const descrEl = document.getElementById('modal').querySelector('.modal-body');
  const linkEl = document.getElementById('modal').querySelector('.full-article');

  titleEl.textContent = title;
  descrEl.textContent = description;
  linkEl.setAttribute('href', link);

  return false;
};
