// 
// 
// function abc() {
//     console.log("line2");
// }
// abc()

// if (8 % 2 == 0) {
//     console.log("line4");
    
// }

// console.log("line8");
// abc()
// console.log("line9");
// abc()


// function addTwoNumbers(x, b) {
//     var a = prompt("enter number")
//     var result = x + b
//     console.log("two numbers sum is = ", result);
// }

// var getNumber = prompt("enter your number")
// addTwoNumbers(getNumber,5)



// addTwoNumbers(4,6)


// addTwoNumbers(3,9)

// write a js program, create sum function 
// that input two values from user print console


// function sum(number1, number2) {
//     var result = number1 + number2;
//     console.log("result", result);
// }

// var num1 =+ prompt("enter number1");
// var num2 =+ prompt("enter number2");
// sum(num1, num2);




function evenOdd() {
    var userNumer = prompt("Enter number")
    userNumer = parseInt(userNumer)
    if (userNumer % 2 == 0) {
        console.log("number is even");
    }
    else {
        console.log("number is odd")
    }
}


evenOdd()