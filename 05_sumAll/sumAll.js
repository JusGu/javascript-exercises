const number = num => typeof(num) != "number"
const sumAll = function(num1, num2) {
    if(number(num1) || number(num2)){
        return 'ERROR';
    }
    n2 = Math.max(num1, num2);
    n1 = Math.min(num1, num2);
    if(n1 < 0 ){
        return 'ERROR';
    }
    return (n2 * (n2 + 1) - n1 * (n1 - 1))/2;
};

// Do not edit below this line
module.exports = sumAll;
