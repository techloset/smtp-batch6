// var a
// var b
// var c



// a = void ( b = 5, c = 7 );
// console.log('====================================');
// console.log("a", a);
// console.log('====================================');
// document.write('a = ' + a + ' b = ' + b +' c = ' + c );




function printPage() {
    console.log('====================================');
    console.log("window.print", window);
    console.log('====================================');
    window.print()
}

var studentNames = ["ali", "zain"]
var car = ["color", "red", "2015", "1311", "1400", "1231141", "honda"]

car[1]

// var carObject = {
//     color: "red",
//     modal: 2015,
//     company: "honda"

// }

// var carObject1 = {
//     color: "red",
//     modal: 2015,
//     company: "toyota"

// }

var cars = [{
    color: "red",
    modal: 2015,
    company: "honda"

}, {
    color: "red",
    modal: 2020,
    company: "toyota"

},

{
    color: "white",
    modal: 2021,
    company: "toyota"

},
{
    color: "gray",
    modal: 2018,
    company: "honda"

}
]

for (let index = 0; index < cars.length; index++) {
    const element = cars[index];
    if (element.company == "toyota") {
        console.log('===================element=================');
        console.log(element.modal);
        console.log('====================================');
    }
 
    
}
var fanObj = {
    type: "ac",
    volt: "220",
    price: "7500"
}

// console.log('================fanObj====================');
// console.log(cars);
// console.log('====================================');

// cars[0].color

// carObject.color