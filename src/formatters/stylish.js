import _ from 'lodash';

const makeSpace = (count) => '  '.repeat(count);

const makeString = (value, spaces) => {
  if (!_.isObject(value)) {
    return `${value}`;
  }
  const keysValues = Object.entries(value);
  const object = keysValues
    .map(([key, val]) => `${makeSpace(spaces + 4)}${key}: ${makeString(val, spaces + 2)}`).join('\n');
  return `{\n${object}\n${makeSpace(spaces + 2)}}`;
};

const makeStylish = (array, spaces = 0) => {
  const result = array.map((object) => {
    if (object.type === 'added') {
      return `${makeSpace(spaces+1)}+ ${object.key}: ${makeString(object.value, spaces)}`;
    }
    if (object.type === 'removed') {
      return `${makeSpace(spaces+1)}- ${object.key}: ${makeString(object.value, spaces)}`;
    }
    if (object.type === 'parent') {
      return ` ${makeSpace(spaces+1)} ${object.key}: {\n${makeStylish(object.children, spaces + 2)}\n${makeSpace(spaces + 2)}}`;
    }
    if (object.type === 'unchanged') {
      return `${makeSpace(spaces+1)}  ${object.key}: ${makeString(object.value, spaces)}`;
    }
    if (object.type === 'changed') {
      return `${makeSpace(spaces+1)}- ${object.key}: ${makeString(object.oldValue, spaces)}\n${makeSpace(spaces+1)}+ ${object.key}: ${makeString(object.newValue, spaces)}`;
    }
  }).join('\n');

  return result;
};

const stylish = (tree)=>`{\n${makeStylish(tree, 0)}\n}`
export default stylish;
