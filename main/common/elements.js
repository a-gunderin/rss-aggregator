const elements = {
  form: document.getElementById('rss-form'),
  input: document.getElementById('url-input'),
  submitBtn: document.querySelector('button[type="submit"]'),
  infoBlock: document.querySelector('.info-block'),
  postsFeedsBlock: document.getElementById('posts-feeds'),
  postsList: document.getElementById('posts-list'),
  feedsList: document.getElementById('feeds-list'),
  modalBlock: document.getElementById('modal'),
};

elements.infoBlock.classList.add('feedback', 'm-0', 'position-absolute', 'small');

export default elements;
