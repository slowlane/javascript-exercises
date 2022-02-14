const removeFromArray = function(array, ...argsToRemove ) {

    for(let i = 0; i < array.length; i++){
        for(let j = 0; j < argsToRemove.length; j++){
            if(array[i] === argsToRemove[j]){
                array.splice(i, 1);
                i--;
            }
        }
    }
    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
