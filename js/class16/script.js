var myPassword = "ava.yaoif.asdf234"
var newPassword = "newpassword"

// console.log(myPassword.split('.'));
console.log(myPassword.toUpperCase());
console.log(myPassword.toLowerCase());

// var newPassword = myPassword.slice(0,3)

// var result =  myPassword.charAt(7); 
// var result =  myPassword.charCodeAt(3); 


// var result = myPassword.concat(newPassword)
 
// var result = myPassword.match('aasdf^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$')
var result = myPassword.replace("p","f")
console.log("result", result);




// var newPassword = ""
// for (let index = 0; index < myPassword.length; index++) {
//     const char = myPassword[index];
//     if (char == 'p') {
        
//         newPassword = newPassword + "f"
        
//     }
//     else {
//         newPassword = newPassword + char
//     }
   
//     console.log("char", char);
// }

// console.log("newPassword", newPassword);
// function checkPassword() {
//     var userPassword = document.getElementById("pass").value

//     if (userPassword.length < 8) {
//         alert("invalid password- lenght is less 8 char")
//         return
//     }

//     let isCapitalLetter = false
//     let isSmalLetter = false
//     for (let index = 0; index < userPassword.length; index++) {
//         const userChar = userPassword[index];
//         if (userPassword.chartCodeAt(index) >= 65 && userPassword.chartCodeAt(index) <=) {
//             isCapitalLetter = true
//         }

//         if (userChar >= "a" && userChar <= "z") {
//             isSmalLetter = true
//         }


//     }

//     if (!isCapitalLetter) {
//         alert("invalid password- does not contain any capitcal letter")
//         return
//     }

//     if (!isSmalLetter) {
//         alert("invalid password- does not contain any small letter")
//         return
//     }

//     alert("Password is valid")

//     console.log("type of userPassword is", typeof userPassword);
// }
