// import yaml from 'js-yaml';
import _ from 'lodash';

const parse = (data, format) => {
  if (_.isEmpty(data)) {
    return {};
  }
  if (format === 'json') {
    return JSON.parse(data);
  }
  throw new Error(`Unknown format for parsing: ${format}`);
};
export default parse;
