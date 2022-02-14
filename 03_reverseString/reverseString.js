const reverseString = function(string) {
    
    if(typeof string != "string"){
        return "ERROR";
    }
    
    let reversedString = "";
    
    for(let i = string.length - 1; i >= 0; i--){
        reversedString += string[i];
    }

    return reversedString;
};

// Do not edit below this line
module.exports = reverseString;
