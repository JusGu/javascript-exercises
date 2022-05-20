const repeatString = function(str, x) {
    if(x < 0){
        return 'ERROR';
    }
    let str2 = '';
    for(let i = 0; i < x; i++){
        str2 += str;
    }
    return str2;
};

// Do not edit below this line
module.exports = repeatString;
