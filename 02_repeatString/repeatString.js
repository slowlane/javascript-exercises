const repeatString = function(string, num) {
    if(num < 0){
        return "ERROR";
    }
    
    let funcString = "";
    
    for(i = 0; i < num; i++){
        funcString += string;
    }

    return funcString;
};

// Do not edit below this line
module.exports = repeatString;
