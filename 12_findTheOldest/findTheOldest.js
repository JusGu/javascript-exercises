const findTheOldest = function(people) {
    let oldest = null;
    let age = 0;
    let cur_year = 2022;
    for( let a = people.length - 1; a >= 0; --a ){
        let cur_age = people[a].yearOfDeath ? people[a].yearOfDeath - people[a].yearOfBirth : cur_year - people[a].yearOfBirth;
        oldest = cur_age > age ? people[a] : oldest;
        age = Math.max(age, cur_age);
    }
    return oldest;

};

// Do not edit below this line
module.exports = findTheOldest;
