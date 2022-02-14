const leapYears = function(potentialLeapYear) {
    if(potentialLeapYear % 4 === 0 &&
        potentialLeapYear % 100 != 0 ||
        potentialLeapYear % 400 === 0){
       
        return true;      
    }
    return false;
};

// Do not edit below this line
module.exports = leapYears;
