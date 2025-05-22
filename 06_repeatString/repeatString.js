const repeatString = function(string, num) {

    let counter = 0;
    let new_string = "";

    if (num < 0) {
        return "ERROR"
    }

    while (counter < num){
        new_string += string;
        counter++;
    }

    return new_string;


};

// Do not edit below this line
module.exports = repeatString;
