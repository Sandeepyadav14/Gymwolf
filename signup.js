// import navbar from "../Homepage/navbar.js"
// document.getElementById("nav").innerHTML=navbar()

// import footer from "../Homepage/footer.js"

// document.getElementById("footer-top").innerHTML=footer()

let form=document.querySelector("form")
let userData=JSON.parse(localStorage.getItem("userData")) 
form.addEventListener("submit", function(event){
    event.preventDefault();
    let data={
        email:form.email.value,
        name:form.name.value,
        date:form.date.value,
        password:form.password.value,
        pass2:form.pass2.value,
    }
    if(data.email==""||data.name==""||data.password==""||data.pass2==""||data.date==""){
        alert("Please enter correct details")
    }
    else{
        
            console.log(data)
           
            localStorage.setItem("userData", JSON.stringify(data))
            alert("Sign Up successful..")
    
            window.location.href = "signin.html"
            
        
    }
   
})


// function checkname(name){
//     let filtered=userData.filter(function(element){
//         return name ===element.name;
//     })
//     if(filtered.length>0){
//         return false
//     }else{
//         return true
//     }
// }

function body(){
    document.getElementById("main").innerHTML=""
    let form = document.createElement("form")

    let label=document.createElement("label")
    label.innerText="Height"
    let input=document.createElement("input")
    input.setAttribute("type","text")

}
