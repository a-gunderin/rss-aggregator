const renderErrorInfo = (infoText) => {
  document.getElementById('url-input').classList.add('is-invalid');
  document.querySelector('.info-block').classList.add('text-danger');
  document.querySelector('.info-block').textContent = infoText;
};

const removeErrorInfo = () => {
  document.getElementById('url-input').classList.remove('is-invalid');
  document.querySelector('.info-block').classList.remove('text-danger');
  document.querySelector('.info-block').textContent = '';
};

const renderSuccessInfo = (infoText) => {
  document.querySelector('.info-block').classList.add('text-success');
  document.querySelector('.info-block').textContent = infoText;
  document.getElementById('url-input').value = '';
  document.getElementById('url-input').focus();
};

const removeSuccessInfo = () => {
  document.querySelector('.info-block').classList.remove('text-success');
  document.querySelector('.info-block').textContent = '';
};

export {
  renderErrorInfo, removeErrorInfo, renderSuccessInfo, removeSuccessInfo,
};
