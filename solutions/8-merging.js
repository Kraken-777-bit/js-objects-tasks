import _ from 'lodash';

// BEGIN
const fill = (source, allowedKeys, data) => {
    if (allowedKeys.length === 0) {
        Object.assign(source, data);
    } else {
        const pickedData = _.pick(data, allowedKeys);
        Object.assign(source, pickedData);
    }
    return source;
};

export default fill;

// END