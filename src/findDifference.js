import _ from 'lodash';

const difference = (obj1, obj2) => {
  const keys = _.sortBy(_.union(_.keys(obj1), _.keys(obj2)));
  const result = keys.map((key) => {
    if (_.isPlainObject(obj1[key]) && _.isPlainObject(obj2[key])) {
      return { key, children: difference(obj1[key], obj2[key]), type: 'parent' };
    }
    if (!_.has(obj1, key)) {
      return { key, value: obj2[key], type: 'added' };
    }

    if (!_.has(obj2, key)) {
      return { key, value: obj1[key], type: 'removed' };
    }

    if (!_.isEqual(obj1[key], obj2[key])) {
      return {
        key, oldValue: obj1[key], newValue: obj2[key], type: 'changed',
      };
    }

    return { key, value: obj1[key], type: 'unchanged' };
  });
  return result;
};

export default difference;