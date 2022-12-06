
let datas=JSON.parse(localStorage.getItem("userData"))
console.log(datas)

document.getElementById("baljor").innerHTML=datas.name

let data=JSON.parse(localStorage.getItem("data"))
console.log(data)


let title=document.getElementById("title")
title.innerText=data.title

let con=document.getElementById("tc")
let video=document.getElementById("video")
video.innerText=data.video
let photo=document.getElementById("photo")
photo.innerText=data.photo
con.append(video,photo)


let imgcon=document.getElementById("imgdiv")
let img=document.getElementById("img")
img.src=data.bigImg
imgcon.append(img)
let images = new Array;
images[0] = data.bigImg1;
images[1] = data.bigImg;

setInterval( function() {
    changeImage()
}, 1000);
let x = 0;
function changeImage() {
    document.getElementById('img').src = images[x];

    if ( x < 1 ) {
        x += 1;
    } else if ( x = 2 ) {
        x = 0;
    }
}


let data_container=document.getElementById("data_div")
let sort=document.createElement("p")
sort.innerText=data.Sort
sort.setAttribute("id","sort")

let fault=document.createElement("h4")
fault.innerText="Muscle group:"
fault.setAttribute("id","fault")

let muscleGroup=document.createElement("p")
muscleGroup.innerText=data.muscleGroup
muscleGroup.setAttribute("id","muscleGroup")
muscleGroup.addEventListener("click",function(){
    window.location.href="chest.html"
})

let step=document.createElement("h2")
step.innerText=data.stepname
step.setAttribute("id","step")

let steps=document.createElement("p")
steps.innerText=data.steps
steps.setAttribute("id","steps")

let tip=document.createElement("h2")
tip.innerText=data.tipname
tip.setAttribute("id","tip")



let tips=document.createElement("p")
tips.innerText=data.tips
tips.setAttribute("id","tips")

let button=document.createElement("button")
button.innerText="❮ All exercise"
button.setAttribute("id","btn")
button.addEventListener("click",function(){
    window.location.href="main.html"
})



data_container.append(sort,fault,muscleGroup,step,steps,tip,tips,button)

