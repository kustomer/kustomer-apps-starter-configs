import fs from 'fs';
import path from 'path';

export default function buildLanguagesFromDirectories(dir, filterFunc, applyFunc) {
  const files = fs.readdirSync(dir);

  files.map((file) => path.join(dir, file)).filter((file) => {
    const stat = fs.statSync(file);
    if (stat.isFile()) { return filterFunc(file); }

    buildLanguagesFromDirectories(file, filterFunc, applyFunc);
    return false;
  }).forEach(applyFunc);
}
