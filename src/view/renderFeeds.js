import elements from '../common/elements.js';

export default (feedsArr) => {
  elements.feedsList.innerHTML = '';
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
  });
  elements.feedsList.append(...feedsEls);
};
