
console.log(document.getElementById("heading"));

var heading = document.getElementById("heading")


// function setHeading() {
//     console.log("setHeading call");
//     var roundNumber = Math.random()
//     console.log("roundNumber", roundNumber);
//     heading.innerHTML = "New Text" + " " + parseInt(roundNumber  * 110000)
// }


// function getInputValue() {
//     var input = document.getElementById("number")
//     console.log(input.value);
//     var pera = document.getElementById("pera")
//     pera.innerHTML = "Result is: " + input.value
// }


function evenOdd() { 
    var input = document.getElementById("number").value
    var pera = document.getElementById("pera")

    var img = document.getElementById("img")
    console.log("img", img.src);
    if (img.src == "file:///E:/batch6/js/class07/apple.jpg") {
        img.src = "./a.png"
    }
    else {
        img.src = "./apple.jpg"
    }
   
    if (input % 2 == 0) {
        pera.innerHTML = "Number is even"
    }
    else{
        pera.innerHTML = "Number is odd"
    }
   
}