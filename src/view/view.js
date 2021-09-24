import onChange from 'on-change';
import i18next from 'i18next';
import state from '../model/model.js';
import elements from '../common/elements.js';
import options from '../language/languages.js';

const i18nextInstance = i18next.createInstance();
i18nextInstance.init(options);

export default onChange(state, (path, value) => {
  if (path === 'isValidUrl') {
    if (value === false) {
      elements.input.classList.add('is-invalid');
      elements.infoBlock.classList.add('text-danger');
      elements.infoBlock.textContent = i18nextInstance.t('invalidUrl');
      elements.exampleBlock.after(elements.infoBlock);
    }
    if (value === true) {
      elements.input.classList.remove('is-invalid');
      elements.infoBlock.remove();
    }
  }
  if (path === 'isInFeed') {
    if (value === true) {
      elements.input.classList.add('is-invalid');
      elements.infoBlock.classList.add('text-danger');
      elements.infoBlock.textContent = i18nextInstance.t('isInFeed');
      elements.exampleBlock.after(elements.infoBlock);
    }
    if (value === false) {
      elements.input.classList.remove('is-invalid');
      elements.infoBlock.remove();
    }
  }
  if (path === 'isValidRss') {
    if (value === false) {
      elements.input.classList.add('is-invalid');
      elements.infoBlock.classList.add('text-danger');
      elements.infoBlock.textContent = i18nextInstance.t('invalidRss');
      elements.exampleBlock.after(elements.infoBlock);
    }
    if (value === true) {
      elements.input.classList.remove('is-invalid');
      elements.infoBlock.remove();
    }
  }
  if (path === 'feeds') {
    elements.feedsList.innerHTML = '';
    const feedsEls = value.map((feed) => {
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
  }
  if (path === 'posts') {
    elements.postsList.innerHTML = '';
    console.log(value);
    const postsEls = value.map((post) => {
      const li = document.createElement('li');
      const a = document.createElement('a');
      li.classList.add('list-group-item', 'd-flex', 'justify-content-between', 'align-items-start', 'border-0', 'border-end-0');
      a.classList.add('fw-bold');
      a.setAttribute('href', post.link);
      a.setAttribute('target', '_blank');
      a.textContent = post.title;
      li.append(a);
      return li;
    });
    elements.postsList.append(...postsEls);
    elements.postsFeedsBlock.classList.remove('d-none');
  }
});
