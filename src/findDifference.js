import _ from 'lodash';

const calcDiff = (data1, data2) => {
  const keys = _.sortBy(_.union(_.keys(data1), _.keys(data2)));
  const result = keys.map((key) => {
    if (_.isPlainObject(data1[key]) && _.isPlainObject(data2[key])) {
      return { key, children: calcDiff(data1[key], data2[key]), type: 'parent' };
    }
    if (!_.has(data1, key)) {
      return { key, value: data2[key], type: 'added' };
    }

    if (!_.has(data2, key)) {
      return { key, value: data1[key], type: 'removed' };
    }

    if (!_.isEqual(data1[key], data2[key])) {
      return {
        key, oldValue: data1[key], newValue: data2[key], type: 'changed',
      };
    }

    return { key, value: data1[key], type: 'unchanged' };
  });
  return result;
};

export default calcDiff;
