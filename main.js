let datas=JSON.parse(localStorage.getItem("userData"))
console.log(datas)

document.getElementById("baljor").innerHTML=datas.name
let  workout = [

    {image:"https://www.gymwolf.com/images/category_chest.jpg",body_name:"Chest"},
    {image:"https://www.gymwolf.com/images/category_biceps.jpg",body_name:"Biceps"},
    {image:"https://www.gymwolf.com/images/category_triceps.jpg",body_name:"Triceps"},
    {image:"https://www.gymwolf.com/images/category_back.jpg",body_name:"Back"},
    {image:"https://www.gymwolf.com/images/category_shoulder.jpg",body_name:"Shoulder"},
    {image:"https://www.gymwolf.com/images/category_legs.jpg",body_name:"Leg"},
    {image:"https://www.gymwolf.com/images/category_abdominal.jpg",body_name:"Abdominal"},
    {image:"https://www.gymwolf.com/images/category_combined.jpg",body_name:"Combined"},
    {image:"https://www.gymwolf.com/images/category_cardio.jpg",body_name:"Cardio"},

]



 
let picture = (workout) => {
    
    workout.forEach((el) => {
        let {image,body_name}=el;

        let div=document.createElement("div");
        div.addEventListener("click",() =>{
             localStorage.setItem("body_name",JSON.stringify(el));
             window.location.href = "chest.html";
        })
      
        let image1= document.createElement("img");
        image1.src=image;
        
        let smallDiv=document.createElement("div");
        smallDiv.setAttribute("class","smallDiv");

        let h1 = document.createElement("h2");
         h1.innerText=body_name;

         smallDiv.append(h1);

         div.append(image1,smallDiv);
    

         document.querySelector("#picture").append(div)
    })
      
}  

picture(workout);
let abdominal = document.querySelector("#abdominal");


let append = () => {
let url = "http://localhost:3000/Abdominal"

fetch(url)
.then((res)=>{
    return res.json()
})
.then((res)=> {
    console.log(res);
    displayTable(res,abdominal);
})

}

append();



let displayTable = (data,abdominal) => {

    data.forEach((el) => {
        let {smallImg,title,Sort}=el;
 
      let div = document.createElement("div");
      div.setAttribute("class","mainDiv")

      let div1 = document.createElement("div");
      div1.setAttribute("class","div1")

      let div2 = document.createElement("div");
      div2.setAttribute("class","div2")
      if(smallImg!==""){
      let img= document.createElement("img");
      img.src = smallImg;
      img.setAttribute("class","img")
      div1.append(img);
    }

      let h3 = document.createElement("h3");
      h3.addEventListener("click",()=>{
           myFunction(el);
      })
      h3.innerText = title;
      h3.setAttribute("class","h3")

      let h31 = document.createElement("h31");
      h31.innerText = Sort;
      h31.setAttribute("class","h31")

      
      div2.append(h3,h31)
      div.append(div1,div2);

      abdominal.append(div);
    })
    
}

let back = document.querySelector("#back");

let append1 = () => {
    let url = "http://localhost:3000/Back"
    
    fetch(url)
    .then((res)=>{
        return res.json()
    })
    .then((res)=> {
        
        displayTable(res,back);
    })
    
    }
    
 append1();


 let biceps = document.querySelector("#biceps");

let append2 = () => {
    let url = "http://localhost:3000/Biceps"
    
    fetch(url)
    .then((res)=>{
        return res.json()
    })
    .then((res)=> {
        
        displayTable(res,biceps);
    })
    
    }
    
 append2();



 let chest = document.querySelector("#chest");

let append3 = () => {
    let url = "http://localhost:3000/Chest"
    
    fetch(url)
    .then((res)=>{
        return res.json()
    })
    .then((res)=> {
        
        displayTable(res,chest);
    })
    
    }
    
 append3();



 let combined = document.querySelector("#combined");

let append4 = () => {
    let url = "http://localhost:3000/Combined"
    
    fetch(url)
    .then((res)=>{
        return res.json()
    })
    .then((res)=> {
        
        displayTable(res,combined);
    })
    
    }
    
 append4();


 let legs = document.querySelector("#legs");

let append5 = () => {
    let url = "http://localhost:3000/Legs"
    
    fetch(url)
    .then((res)=>{
        return res.json()
    })
    .then((res)=> {
        
        displayTable(res,legs);
    })
    
    }
    
 append5();


 let shoulder = document.querySelector("#shoulder");

let append7 = () => {
    let url = "http://localhost:3000/Shoulder"
    
    fetch(url)
    .then((res)=>{
        return res.json()
    })
    .then((res)=> {
       
        displayTable(res,shoulder);
    })
    
    }
    
 append7();


 let triceps = document.querySelector("#triceps");

let append8 = () => {
    let url = "http://localhost:3000/Triceps"
    
    fetch(url)
    .then((res)=>{
        return res.json()
    })
    .then((res)=> {
       
        displayTable(res,triceps);
    })
    
    }
    
 append8();

 let myFunction = (el) => {
    if(el.video==""){
        localStorage.setItem("data",JSON.stringify(el));
        window.location.href = "chestobj.html"
    }
    else{
    localStorage.setItem("data",JSON.stringify(el))
    window.location.href = "video.html"
    }
 }



 let one = () => {
    window.location.href = "main.html"
}


let two = () => {
    window.location.href = "myexercise.html"
}


let three = () => {
    window.location.href = "workout.html"
}

document.querySelector("#one").addEventListener("click",one);
document.querySelector("#two").addEventListener("click",two);
document.querySelector("#three").addEventListener("click",three);