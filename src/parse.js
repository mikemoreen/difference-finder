import yaml from 'js-yaml';

const parse = (data, format) => {
  if (format === 'json') {
    return JSON.parse(data);
  }
  if (format === ('yml' || 'yaml')) {
    return yaml.load(data);
  }
};
export default parse;
