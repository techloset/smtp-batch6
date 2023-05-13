var users = []
function onSubmit() {
    var userName = document.getElementById("name").value
    var userEmail = document.getElementById("email").value
    var userPhone = document.getElementById("phone").value

    var newUser = {
        name: userName,
        email: userEmail,
        phone: userPhone
    }
    users.push(newUser)
    displayResult()
}
function displayResult() {
    var result = ""
    for (let index = 0; index < users.length; index++) {
        const user = users[index];
        console.log("user",user);
        result = result + `<div> <h1>Name: ${user.name}</h1> <p>Email: ${user.email}</p> <span>Phone: ${user.phone}</span> </div>`
    }
    console.log("resultresult", result);
    document.getElementById("result").innerHTML = result
}