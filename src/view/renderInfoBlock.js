import elements from '../common/elements.js';

const renderErrorBlock = (infoText) => {
  elements.input.classList.add('is-invalid');
  elements.infoBlock.classList.add('text-danger');
  elements.infoBlock.textContent = infoText;
  elements.exampleBlock.after(elements.infoBlock);
};

const removeErrorBlock = () => {
  elements.input.classList.remove('is-invalid');
  elements.infoBlock.remove();
};

const renderSuccessBlock = (infoText) => {
  elements.infoBlock.classList.add('text-success');
  elements.infoBlock.textContent = infoText;
  elements.exampleBlock.after(elements.infoBlock);
  elements.input.value = '';
  elements.input.focus();
};

const removeSuccessBlock = () => {
  elements.infoBlock.remove();
};

export {
  renderErrorBlock, removeErrorBlock, renderSuccessBlock, removeSuccessBlock,
};
