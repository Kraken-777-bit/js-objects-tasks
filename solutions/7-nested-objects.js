// BEGIN
const get = (obj, chain) => {
    let current = obj;

    for (const key of chain) {
        if (!Object.hasOwn(current, key)) {
            return null;
        }
        current = current[key];
    }
    
    return current;
};

export default get;
// END