import elements from '../common/elements.js';

const blockForm = () => {
  elements.input.setAttribute('disabled', '');
  elements.submitBtn.setAttribute('disabled', '');
};

const unblockForm = () => {
  elements.input.removeAttribute('disabled');
  elements.submitBtn.removeAttribute('disabled');
};

export { blockForm, unblockForm };
