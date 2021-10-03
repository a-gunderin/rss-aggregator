import russian from './ru.js';
import english from './en.js';

const options = {
  lng: 'ru',
  debug: false,
  resources: {
    en: { translation: english },
    ru: { translation: russian },
  },
};

export default options;
