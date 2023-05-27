// var text = " test123 "
//  text = text.trim()
// console.log(text.length,'====================================');
// console.log();
// console.log('====================================');

// var myNewArr = ["asdf", 1, 12.2, false, {color:'red'}]
// var myNewArr2 = [1,123,1241]
// var mynewarr3= myNewArr2.concat(myNewArr)

// console.log('====================================');
// console.log(mynewarr3);
// console.log('====================================');











// var numbers = [10, 20, 30, 40, 50]

// for (let index = 0; index < numbers.length; index++) {
//     const element = numbers[index];
// }

// function printElement(element, index, fullArray) {
//     console.log('==============printElement==element====================');
//     console.log(element);
//     console.log('====================================', index, fullArray);
// }

// var myPrintElement = (element,index, fullArray) => {
// console.log('====================================');
// console.log("element in arrow function", element);
// console.log('====================================');
// } 
// myPrintElement(23)
// printElement(20)





// var numbers2 = []

// var forEachVar = numbers.forEach((element, index, fullArray) => {
//     // numbers2.push(element * 2)
//     console.log('====================================');
//     console.log("element in arrow function", element);
//     console.log('====================================');
//     return element * 2
// }
// )
// console.log('====================================');
// console.log(forEachVar);
// console.log('====================================');

// var newNumbers = numbers.map((element,index)=>{
//      // console.log('====================================');
//      // console.log(element);
//      // console.log('====================================');
//      // if (element % 2 == 0) {
//      //      return index + element
//      // }
//      // else {
//      //      return element
//      // }

//      return 2 * 2
     
// })


var numbers = [10, 21, 30, 43, 50]
var newNumbers = numbers.filter((element,index)=>{
     console.log('====================================');
     console.log(element);
     console.log('====================================');
     if (element % 2 == 0) {
          return index + element
     }
     
})

console.log('====================================');
console.log("newNumbers", newNumbers);
console.log('====================================');











