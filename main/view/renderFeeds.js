export default (feedsArr) => {
  document.getElementById('feeds-list').innerHTML = '';
  const feedsEls = feedsArr.map((feed) => {
    const li = document.createElement('li');
    const h3 = document.createElement('h3');
    const p = document.createElement('p');
    li.classList.add('list-group-item', 'border-0', 'border-end-0');
    h3.classList.add('h6', 'm-0');
    p.classList.add('m-0', 'small', 'text-black-50');
    h3.textContent = feed.title;
    p.textContent = feed.description;
    li.append(h3, p);
    return li;
  }).reverse();
  document.getElementById('feeds-list').append(...feedsEls);
  document.getElementById('posts-feeds').classList.remove('d-none');
};
