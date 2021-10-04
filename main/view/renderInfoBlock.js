import elements from '../common/elements.js';

const renderErrorInfo = (infoText) => {
  elements.input.classList.add('is-invalid');
  elements.infoBlock.classList.add('text-danger');
  elements.infoBlock.textContent = infoText;
};

const removeErrorInfo = () => {
  elements.input.classList.remove('is-invalid');
  elements.infoBlock.classList.remove('text-danger');
  elements.infoBlock.textContent = '';
};

const renderSuccessInfo = (infoText) => {
  elements.infoBlock.classList.add('text-success');
  elements.infoBlock.innerHTML = infoText;
  elements.input.value = '';
  elements.input.focus();
};

const removeSuccessInfo = () => {
  elements.infoBlock.classList.remove('text-success');
  elements.infoBlock.textContent = '';
};

export {
  renderErrorInfo, removeErrorInfo, renderSuccessInfo, removeSuccessInfo,
};
