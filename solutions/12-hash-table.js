import crc32 from 'crc-32';

// BEGIN
const make = () => {
    return [];
};

const set = (map, key, value) => {
    const rawHash = Math.abs(crc32.str(key));
    const index = rawHash % 1000;
    if (map[index] && map[index][0] !== key) {
        return false;
    }
    map[index] = [key, value];
    return true;
};

const get = (map, key, defaultValue = null) => {
    const rawHash = Math.abs(crc32.str(key));
    const index = rawHash % 1000;
    if (!map[index] || map[index][0] !== key) {
        return defaultValue;
    }
    return map[index][1];
};

export { make, set, get };
// END