const removeFromArray = function(array, ...x) {
    return array.filter(item => !x.includes(item));
};

// Do not edit below this line
module.exports = removeFromArray;
