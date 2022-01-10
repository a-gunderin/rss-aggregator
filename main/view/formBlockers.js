const blockForm = () => {
  document.getElementById('url-input').setAttribute('disabled', '');
  document.getElementById('url-input').setAttribute('readonly', '');
  document.querySelector('button[type="submit"]').setAttribute('disabled', '');
};

const unblockForm = () => {
  document.getElementById('url-input').removeAttribute('disabled');
  document.getElementById('url-input').removeAttribute('readonly');
  document.querySelector('button[type="submit"]').removeAttribute('disabled');
};

export { blockForm, unblockForm };
