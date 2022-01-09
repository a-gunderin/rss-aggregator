export default (postsArr, viewedArticles) => {
  document.getElementById('posts-list').innerHTML = '';
  const postsEls = postsArr
    .map((post) => {
      const li = document.createElement('li');
      const a = document.createElement('a');
      const button = document.createElement('button');
      li.classList.add('list-group-item', 'd-flex', 'justify-content-between', 'align-items-start', 'border-0', 'border-end-0');
      if (viewedArticles.includes(post.link)) {
        a.classList.add('fw-normal');
      } else {
        a.classList.add('fw-bold');
      }
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
  document.getElementById('posts-list').append(...postsEls);
  document.getElementById('posts-feeds').classList.remove('d-none');
};
