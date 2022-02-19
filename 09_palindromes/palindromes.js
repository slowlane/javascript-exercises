const palindromes = function (string) {
    let compString = string.toLowerCase().replace(/[^a-z]/g, "");
    return (compString
    .split("")
    .reverse()
    .join("") == compString
    );
    
      
};

// Do not edit below this line
module.exports = palindromes;
