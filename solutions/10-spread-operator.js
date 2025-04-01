// BEGIN
const make = (name, additionalProperties) => {
    const defaultProperties = {
        state: 'moderating',
        createdAt: Date.now(),
    };
    const finalProperties = additionalProperties || {};
    return {
        name,
        ...defaultProperties,
        ...finalProperties,
    };
};

export default make;
// END