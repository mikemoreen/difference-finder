import fs from 'fs';
import path from 'path';
import parse from './parse.js';
import calcDiff from './findDifference.js';
import format from './formatters/index.js';

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
  const parsedData1 = parse(data1, format1);
  const parsedData2 = parse(data2, format2);
  const diffTree = calcDiff(parsedData1, parsedData2);
  const formatedDiff = format(diffTree, formatName);
  return formatedDiff;
};
export default genDiff;
