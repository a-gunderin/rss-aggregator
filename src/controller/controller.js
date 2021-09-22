import * as yup from 'yup';
import elements from '../common/elements.js';
import watchedState from '../view/view.js';

export default () => {
  const schema = yup.string().url();
  elements.form.addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const inputData = formData.get('url');
    schema
      .validate(inputData)
      .then(() => {
        watchedState.isValidUrl = true;
      })
      .catch(() => {
        watchedState.isValidUrl = false;
      });
  });
};
