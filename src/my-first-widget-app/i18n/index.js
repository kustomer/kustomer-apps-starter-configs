import path from 'path';
import buildLanguagesFromDirectories from '../../../util';

const locales = {};

buildLanguagesFromDirectories(
  __dirname,
  (file) => !file.endsWith('index.js'),
  (file) => {
    const locale = path.dirname(file).split('/').pop();
    const currentFileContents = require(file);
    const currentLocale = locales[locale] || {};
    locales[locale] = Object.assign({}, currentLocale, currentFileContents);
  }
);

export default locales;
