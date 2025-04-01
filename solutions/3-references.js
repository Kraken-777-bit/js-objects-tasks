const is = (company1, company2) => {
    for (const value in company1) {
        if (company1[value] !== company2[value]) {
            return false;
        }
    }
    return true;
};

export default is;
// END