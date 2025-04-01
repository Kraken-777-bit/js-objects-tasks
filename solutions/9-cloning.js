// BEGIN
const cloneShallow = (obj) => {
    const result = {};
    const entries = Object.entries(obj);
    for (const [key, value] of entries) {
        result[key] = value;
    }
    return result;
};

export default cloneShallow;
// END
