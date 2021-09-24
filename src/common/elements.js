const elements = {
  form: document.getElementById('rss-form'),
  input: document.getElementById('url-input'),
  infoBlock: document.createElement('p'),
  exampleBlock: document.querySelector('#rss-form + p'),
  postsFeedsBlock: document.getElementById('posts-feeds'),
  postsList: document.getElementById('posts-list'),
  feedsList: document.getElementById('feeds-list'),
};

elements.infoBlock.classList.add('feedback', 'm-0', 'position-absolute', 'small');

export default elements;
