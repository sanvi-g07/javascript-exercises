const findTheOldest = function(arr) {
    let oldest = arr[0];
    for(let i = 1; i < arr.length; i++) {
        let oldAge = oldest.yearOfDeath - oldest.yearOfBirth;
        let newAge = arr[i].yearOfDeath - arr[i].yearOfBirth;
        if(arr[i].yearOfDeath === undefined) {
            newAge = 2026 - arr[i].yearOfBirth;
        }

        if(oldest.yearOfDeath === undefined) {
            oldAge = 2026 - oldest.yearOfBirth;
        }

        if(newAge > oldAge) {
            oldest = arr[i];
        }
    }
    return oldest;
};

// Do not edit below this line
module.exports = findTheOldest;
