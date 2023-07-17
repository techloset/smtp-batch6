// var specialChar = [33,34,35, 36
//     % - 37
//     & - 38
//     ' - 39
//     ( - 40
//     ) - 41
//     * - 42
//     + - 43
//     , - 44
//     - - 45
//     . - 46
//     / - 47
//     : - 58
//     ; - 59
//     < - 60
//     = - 61
//     > - 62
//     ? - 63
//     @ - 64
//     [ - 91
//     \ - 92
//     ] - 93
//     ^ - 94
//     _ - 95
//     ` - 96
//     { - 123
//     | - 124
//     } - 125
//     ~ - 126]

// input array
var passwords = ["test", "test@1214", "newPass2422@", "testPassword23", "examPle#242"]
// output array
// var newpasswords = passwords.map((element) => {
//     var isCapital = false
//     var isSmall = false
//     var isSpecial = false
//     for (let index = 0; index < element.length; index++) {
//         const char = element[index];
//         if (char <= 'z' && char >= 'a') {
//             isSmall = true
//         }

//         if (char <= 'Z' && char >= 'A') {
//             isCapital = true
//         }
//         if (char.charCodeAt() >= 33 && char.charCodeAt() <= 47 || char.charCodeAt() >= 58 && char.charCodeAt() <= 64 || char.charCodeAt() >= 91 && char.charCodeAt() < 96) {
//             isSpecial = true
//         }
//     }

//     if (isSpecial && isCapital && isSmall && element.length > 8) {
//         return true
//     }
//     return false
// })


var newpasswords = passwords.map((element) => {
    if (element.match(`((?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[\W]).{6,20})`)) {
        return true
    }
    return false
})
console.log('====================================');
console.log("newpasswords", newpasswords);
console.log('====================================');



var  names = ["naveed", "alisadf", "zainasdf"]

var isNames = names.every((element)=>{
    console.log('====================================');
    console.log("element", element);
    console.log('====================================');
    if (element.length > 5) {
        return true
    }
})

console.log('====================================');
console.log("isNames", isNames);
console.log('====================================');




