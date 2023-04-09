// 
console.log("console above the loop");

var userNumber = 10;
// userNumber = userNumber + 1
// userNumber++
// userNumber = userNumber + 1
// var newNumber = userNumber++;
// userNumber = userNumber - 1
var newNumber = --userNumber;

// --userNumber
// console.log("userNumber", userNumber);
// console.log("newNumber", newNumber);

// for (var index = 10; index > 2; index--) {
//     console.log("naveed", index)
// }
// console.log("console below the loop");
// console.log("naveed")
// console.log("naveed")
// console.log("naveed")

// console.log("naveed")
// console.log("naveed")
// console.log("naveed")

// console.log("naveed")
// console.log("naveed")
// console.log("naveed")
// console.log("naveed")

// console.log("naveed")
// console.log("naveed")

// write a js program, that print 

// 2 * 1 = 2 
// 2 * 2 = 4
// 2 * 3 = 6

 var userValue =+ prompt("Enter number")
 var numberOfTimes =+ prompt("enter number of times")

for (let index = 1; index <= numberOfTimes; index++) {
    // console.log("2 * " + index + "=" + index*2);
    console.log(index);
       if (index == 5) {
        console.log(`${userValue} * ${index} = ${index * userValue}`) 
       }
    
}