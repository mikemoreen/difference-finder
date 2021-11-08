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

const json1 = getFixturePath('file1.json');
const json2 = getFixturePath('file2.json');
const yml1 = getFixturePath('file1.yml');
const yml2 = getFixturePath('file2.yml');

test('genDiffstylish', () => {
  expect(genDiff(json1, json2)).toEqual(resultStylish);
  expect(genDiff(yml1, yml2)).toEqual(resultStylish);
});
test('genDiffplain', () => {
  expect(genDiff(json1, json2, 'plain')).toEqual(resultPlain);
  expect(genDiff(yml1, yml2, 'plain')).toEqual(resultPlain);
});
test('genDiffjson', () => {
  expect(genDiff(json1, json2, 'json')).toEqual(resultJson);
  expect(genDiff(yml1, yml2, 'json')).toEqual(resultJson);
});
