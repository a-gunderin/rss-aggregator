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
});
