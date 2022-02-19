const fibonacci = function(number) {
    if(number < 0){
        return "OOPS"
    }
    if(number === 0){
        return 0;
    }
    
    let fibonacci = 1;
    let fibonacciStart = 0;
    for(let i = 1; i < number; i++){
        const temp = fibonacci;
        fibonacci = fibonacci + fibonacciStart;
        fibonacciStart = temp;
    }
    return fibonacci;
    
};

// Do not edit below this line
module.exports = fibonacci;
