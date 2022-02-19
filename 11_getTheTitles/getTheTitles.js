const getTheTitles = function(obj) {
    const titleArray = obj.map(book => book["title"]);
    return titleArray;
};

// Do not edit below this line
module.exports = getTheTitles;
