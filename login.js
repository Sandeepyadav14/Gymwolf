
// document.getElementById("footer-top").innerHTML=footer()

let form = document.querySelector("form")
let userData = JSON.parse(localStorage.getItem("userData")) 
console.log(userData)
form.addEventListener("submit", function (e) {
    e.preventDefault()
    let data = {
        email: form.email.value,
        password: form.password.value
    }
    if (data.email==userData.email && data.password==userData.password) {
        alert("Sign in successfull")
        window.location.href = "sandy.html"
    } else {
        alert("wrong Username or Password")
    }
})
