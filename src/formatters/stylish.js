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
    switch (object.type) {
      case 'added':
        return `${makeSpace(spaces + 1)}+ ${object.key}: ${makeString(object.value, spaces)}`;
      case 'removed':
        return `${makeSpace(spaces + 1)}- ${object.key}: ${makeString(object.value, spaces)}`;
      case 'parent':
        return ` ${makeSpace(spaces + 1)} ${object.key}: {\n${makeStylish(object.children, spaces + 2)}\n${makeSpace(spaces + 2)}}`;
      case 'unchanged':
        return `${makeSpace(spaces + 1)}  ${object.key}: ${makeString(object.value, spaces)}`;
      case 'changed':
        return `${makeSpace(spaces + 1)}- ${object.key}: ${makeString(object.oldValue, spaces)}\n${makeSpace(spaces + 1)}+ ${object.key}: ${makeString(object.newValue, spaces)}`;
      default:
        throw new Error(`Unknown type: '${object.type}'!`);
    }
  }).join('\n');

  return result;
};

const stylish = (tree) => `{\n${makeStylish(tree, 0)}\n}`;
export default stylish;
