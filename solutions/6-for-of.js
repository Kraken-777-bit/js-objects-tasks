// BEGIN
const pick = (objct, properties) => {
  const result = {};
  
  for (const property of properties) {
    if (objct.hasOwnProperty(property)) {
      result[property] = objct[property];
    }
  }

  return result;
};
  
export default pick;
// END