

// import footer from "../Homepage/footer.js"

// document.getElementById("footer-top").innerHTML=footer()


// import navbar from "sandy_navbar.js"
// document.getElementById("nav").innerHTML=navbar()



let datas=JSON.parse(localStorage.getItem("userData"))
console.log(datas)

document.getElementById("baljor").innerHTML=datas.name