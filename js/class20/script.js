// const pi = Math.PI;
// var randomNumber =Math.random() * 10
// // var roundNumber = Math.round(randomNumber)
// // var roundNumber = Math.ceil(20.34)
// var roundNumber = Math.floor(20.78)

// // 20.1
// console.log('====================================');
// console.log(roundNumber);
// console.log('====================================');


try {

    console.log('====================================');
    console.log("try block");
    console.log('====================================');
    // let user = {
    // }
    // var cnic = user.profile.cnic
    
    throw "our own error"
    
    var result = 2  * 10
    console.log('====================================');
    console.log(result);
    console.log('====================================');
    
} catch (error) {
    console.log('====================================');
    console.log("error",error);
    console.log('====================================');
}
// finally{
//     console.log('====================================');
//     console.log("finally");
//     console.log('====================================');
// }

console.log('====================================');
console.log("after error");
console.log('====================================');

function submitHandler() {
     
    var email = document.getElementById("email").value
       
      
      if (email.slice(email.indexOf('@'), email.indexOf('@') +4) == "gmail") {
        
      }

    var userName = document.getElementById("name").value
    console.log('====================================');
    console.log(userName.split(' ').length > 1);
    console.log('====================================');
}