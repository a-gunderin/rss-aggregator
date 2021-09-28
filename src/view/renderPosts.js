import elements from '../common/elements.js';

export default (postsArr) => {
  elements.postsList.innerHTML = '';
  const postsEls = postsArr
    .map((post) => {
      const li = document.createElement('li');
      const a = document.createElement('a');
      li.classList.add('list-group-item', 'd-flex', 'justify-content-between', 'align-items-start', 'border-0', 'border-end-0');
      a.classList.add('fw-bold');
      a.setAttribute('href', post.link);
      a.setAttribute('target', '_blank');
      a.textContent = post.title;
      li.append(a);
      return li;
    }).reverse();
  elements.postsList.append(...postsEls);
  elements.postsFeedsBlock.classList.remove('d-none');
};
