const blockForm = () => {
  document.getElementById('url-input').setAttribute('disabled', '');
  document.querySelector('button[type="submit"]').setAttribute('disabled', '');
};

const unblockForm = () => {
  document.getElementById('url-input').removeAttribute('disabled');
  document.querySelector('button[type="submit"]').removeAttribute('disabled');
};

export { blockForm, unblockForm };
