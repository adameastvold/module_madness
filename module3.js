var cashConversion = require('./module2.js');
var randomNum = require('./module1.js');

exports.result = function() {
    var num = randomNum(100, 1000000);
    var conversion = cashConversion(num);
    var answer = "Account Balance: \n" + conversion + "\n"
    return answer;
};





// moduleTwo(moduleOne(100, 1000000) + '\n'));
