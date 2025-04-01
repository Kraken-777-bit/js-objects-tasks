import _, { toLower } from 'lodash';

// BEGIN
const countWords = (text) => {
    const result = {};
    const textArr = _.words(text.toLowerCase(), /[^, ]+/g);

    for (let element of textArr) {
        if (result[element]) {
            result[element] += 1;
        } else {
            result[element] = 1;
        }
    }

    return result;
};

export default countWords;
// END