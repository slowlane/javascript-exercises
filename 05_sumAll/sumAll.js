const sumAll = function(start, finish) {
    if(typeof start != "number" || typeof finish != "number" ||
    start < 0 || finish < 0){
        return "ERROR";
    }
    
    sum = 0;

    if(start > finish){
        for(let i = finish; i <= start; i++){
            sum += i;
        }
    }else{
        for(let i = start; i <= finish; i++){
            sum += i;
        }
    }

    return sum;
};

// Do not edit below this line
module.exports = sumAll;
