import { test, expect } from '@jest/globals';
import { fileURLToPath } from 'url';
import fs from 'fs';
import path from 'path';
import genDiff from '../index.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const getFixturePath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);

const resultStylish = fs.readFileSync(getFixturePath('result_stylish.txt'), 'utf-8');
const resultPlain = fs.readFileSync(getFixturePath('result_plain.txt'), 'utf-8');
const resultJson = fs.readFileSync(getFixturePath('result_json.txt'), 'utf-8');
const files = [
  { file1: 'file1.json', file2: 'file2.json' },
  { file1: 'file1.yaml', file2: 'file2.yml' },
  { file1: 'file1.json', file2: 'file2.yml' },
];

test.each(files)('genDiff($file1, $file2)', ({ file1, file2 }) => {
  expect(genDiff(getFixturePath(file1), getFixturePath(file2))).toEqual(resultStylish);
  expect(genDiff(getFixturePath(file1), getFixturePath(file2), 'plain')).toEqual(resultPlain);
  expect(genDiff(getFixturePath(file1), getFixturePath(file2), 'json')).toEqual(resultJson);
  expect(genDiff(getFixturePath(file1), getFixturePath(file2), 'stylish')).toEqual(resultStylish);
});
