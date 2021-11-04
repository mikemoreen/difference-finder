import fs from 'fs';
import path from 'path';
import parse from './parse.js';
import difference from './findDifference.js';

const readFile = (pathName) => {
  const fullPath = path.resolve(process.cwd(), pathName);
  const data = fs.readFileSync(fullPath).toString();
  return data;
};

const genDiff = (path1, path2, formatName = 'stylish') => {
  const data1 = readFile(path1);
  const data2 = readFile(path2);
  const format1 = path.extname(path1).substring(1);
  const format2 = path.extname(path2).substring(1);
  const object1 = parse(data1, format1);
  const object2 = parse(data2, format2);
  const differenceObject = difference(object1, object2);
  console.log(differenceObject);
  // const formatedDiff = formatDiff(diffAst, formatName);
  // return formatedDiff;
};
export default genDiff;
