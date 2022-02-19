const findTheOldest = function(array) {
    return array.reduce((previous, current) => {
        
        if(previous["yearOfDeath"] == undefined){
            return new Date().getFullYear() - previous["yearOfBirth"] > 
        current["yearOfDeath"] - current["yearOfBirth"] ? previous : current;
        } 
        
        else if(current["yearOfDeath"] == undefined){
            return previous["yearOfDeath"] - previous["yearOfBirth"] > 
            new Date().getFullYear() - current["yearOfBirth"] ? previous : current;
        }
        
        return previous["yearOfDeath"] - previous["yearOfBirth"] > 
        current["yearOfDeath"] - current["yearOfBirth"] ? previous : current;
    }
    );
    
};

// Do not edit below this line
module.exports = findTheOldest;
