import elements from '../common/elements.js';

export default (postsArr) => {
  elements.postsList.innerHTML = '';
  const postsEls = postsArr
    .map((post) => {
      const li = document.createElement('li');
      const a = document.createElement('a');
      const button = document.createElement('button');
      li.classList.add('list-group-item', 'd-flex', 'justify-content-between', 'align-items-start', 'border-0', 'border-end-0');
      a.classList.add('fw-bold');
      button.classList.add('btn', 'btn-outline-primary', 'btn-sm');
      a.setAttribute('href', post.link);
      a.setAttribute('target', '_blank');
      button.setAttribute('data-bs-toggle', 'modal');
      button.setAttribute('data-bs-target', '#modal');
      a.textContent = post.title;
      button.textContent = 'Просмотр';
      li.append(a, button);
      return li;
    }).reverse();
  elements.postsList.append(...postsEls);
  elements.postsFeedsBlock.classList.remove('d-none');
};
