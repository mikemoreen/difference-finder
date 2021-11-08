import stylish from './stylish.js';
import plain from './plain.js';

const formatters = {
  stylish,
  plain,
  json: JSON.stringify,
};

const formatting = (tree, format = 'stylish') => {
  const formatFunction = formatters[format];
  return formatFunction(tree);
};

export default formatting;
