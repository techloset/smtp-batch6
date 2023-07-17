// 5<3
// 1>4
// 4==2

var result = 5<3;
var result1 = 34>4;
var result2 = 4==2;

var result3 = 5<=5;

var result4 = 4>=5;

var result4 = 5!=5;

console.log("Result =>",result);
console.log("Result1 =>",result1);
console.log("Result2 =>",result2);
console.log("result3 =>",result3);
console.log("result4 =>",result4);

// logical operators

// AND == &&
// T T => T
// F T => F
// T F => F
// F F => F

// OR == ||
// T T => T
// F T => T
// T F => T
// F F => F


// 2
var userEnteredValue =+ prompt("Enter a number");
// var userEnteredValueConverted = parseInt(userEnteredValue)
// var userEnteredValueConverted1 =  parseFloat(userEnteredValue)
// var userEnteredValueConverted2 =  Number(userEnteredValue)
// console.log("userEntesdfredValue", typeof userEnteredValue, userEnteredValue);
var a = 2 < 5 && 10 > 3;

// console.log("andResult", a)
// 2
var userEnteredValue1 =+ prompt("Enter a number1");
var b = userEnteredValue1 + userEnteredValue < 5 || (2 > 3 && a);

console.log("oRResult", b)
