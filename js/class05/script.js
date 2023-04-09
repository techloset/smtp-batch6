// 


var statmentResult = 2 > 5;

// if (2 < 22) {
//     console.log('====================================');
//     console.log("statement is correct");
//     console.log('====================================');
// }
// else {
//     console.log('====================================');
//     console.log("statement is wrong");
//     console.log('===================================='); 
// }


// if (!statmentResult) {
//     console.log('====================================');
//     console.log("statement is wrong");
//     console.log('====================================');
// }


// write a js program, that give your grade according to input numbers

var userScore =+ prompt("Enter your number");

// if (userScore < 50) {
//     console.log("You are failed!");
// }


// if (userScore < 60 && userScore > 50) {
//     console.log("You grade is D");
// }

// if (userScore < 70 && userScore > 60) {
//     console.log("You grade is C");
// }

// if (userScore < 80 && userScore > 70) {
//     console.log("You grade is B");
// }

// if (userScore < 100 && userScore > 80) {
//     console.log("You grade is A");
// }


if (userScore < 50) {
    console.log("You are failed!");
}


else if (userScore < 60) {
    console.log("Your grade is D");
}

else if (userScore < 70) {
    console.log("Your grade is C");
}

else if (userScore < 80) {
    console.log("Your grade is B");
}

else if (userScore < 90) {
    console.log("Your grade is A");
}

else {
    console.log("your grade is A+");
}


// write a js program, that check user input number is even or odd?