// 
var d = 10;
var x = 15;
x = 2;

function sum(num1=0, num2=0){
    // console.log("d is", d);
    var x = num1 + num2 + d
    console.log("x in local scope function", x);
    return x
  
}




// var b = sum(2,4)
// alert("asdf");
// var promtResult = prompt("enter numerb")
// var newNumber = parseInt(23.234)
// var a = sum(12,4)

var c =   sum(3,1)

// console.log("sum is", c);
console.log("x in global scope is", x);