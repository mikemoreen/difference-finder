import _ from 'lodash';

const makeString = (value) => {
  if (_.isObject(value)) {
    return '[complex value]';
  }
  if (typeof value === 'string') {
    return `'${value}'`;
  }
  return `${value}`;
};

const makePlain = (tree) => {
  const iter = (node, path) => node
    .flatMap((item) => {
      switch (item.type) {
        case 'unchanged':
          return [];
        case 'parent':
          return iter(item.children, `${path + item.key}.`);
        case 'added':
          return `Property '${path}${item.key}' was added with value: ${makeString(item.value)}`;
        case 'changed':
          return `Property '${path}${item.key}' was updated. From ${makeString(item.oldValue)} to ${makeString(item.newValue)}`;
        case 'removed':
          return `Property '${path}${item.key}' was removed`;
        default:
          throw new Error(`Unknown type: '${item.type}'!`);
      }
    }).join('\n');
  return iter(tree, '');
};
export default makePlain;
