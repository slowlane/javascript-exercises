const add = function(num1, num2) {
	return num1 + num2;
};

const subtract = function(num1, num2) {
	if(num1 >= num2){
    return num1 - num2;
  }
  return num2 - num1;
};

const sum = function(array) {
	let total = 0;
  for(let number of array){
    total += number;

  }
  return total;
};

const multiply = function(theNums) {
  
  let total = 1;
  for(let i = 0; i < theNums.length; i++){
    total *= theNums[i];
  }
  return total;
};

console.log(multiply(1,2,3,4,5));

const power = function(num1, num2) {
	return num1 ** num2;
};

const factorial = function(number) {
	let startNumber = number - (number - 1);
  let total = 1;
  for(let i = startNumber; i <= number; i++){
    total *= i;
  }
  return total;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
