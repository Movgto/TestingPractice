const stringLength = (str) => {
    if(str.length > 0 && str.length <= 10) {
        return str.length;
    } else {
        console.error('String must be at least 1 character long and not more than 10');
    }
};

module.exports = stringLength;