import elements from '../common/elements.js';

export default (post) => {
  const { title } = post;
  const { description } = post;
  const { link } = post;

  const titleEl = elements.modalBlock.querySelector('.modal-title');
  const descrEl = elements.modalBlock.querySelector('.modal-body');
  const linkEl = elements.modalBlock.querySelector('.full-article');

  titleEl.textContent = title;
  descrEl.textContent = description;
  linkEl.setAttribute('href', link);

  return false;
};
