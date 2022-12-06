let datas=JSON.parse(localStorage.getItem("userData"))
console.log(datas)

document.getElementById("baljor").innerHTML=datas.name

 let d;
let workout = () => {

    let url = "http://localhost:3000/workout"

    fetch(url)
    .then((res)=> {
        return res.json()
    })
    .then((res)=> {
        console.log(res);
        append(res);
        d=res;
    })
}


workout();

let vermaArr = JSON.parse(localStorage.getItem("vermaji")) || [];

let append = (data) => {
  document.querySelector("#baby2").innerHTML="";

  data.forEach((el) => {
    let {smallImg,bigImg,Sort,title,video,id} = el;
     
    let div = document.createElement("div");
    div.setAttribute("class","div");

    if(id%2!==0){
      div.style.backgroundColor = "whitesmoke";
    }

    let div1 = document.createElement("div");
    div1.setAttribute("class","div1")

    let div2 = document.createElement("div");
    div2.setAttribute("class","div2")

    let img = document.createElement("img");
    img.setAttribute("class","img")
    img.src=smallImg

    let h3 = document.createElement("h3");
    h3.setAttribute("class","h3")
    h3.innerText = title

    let h31 = document.createElement("h3");
    h31.setAttribute("class","h31")
    h31.innerText = video;


    let p = document.createElement("p");
    p.setAttribute("class","p")
    p.innerText = Sort;

    div1.append(img);
    div2.append(h3,p,h31)

    if(bigImg!==""){
    let h32 = document.createElement("h3");
    h32.setAttribute("class","h32")
    h32.innerText = bigImg;
    div2.append(h3,p,h31,h32)
    }
    
    let div3 = document.createElement("div");
    div3.setAttribute("class","div3")
    
    let btn = document.createElement("button");
    btn.setAttribute("class","btn");
    btn.addEventListener("click",() => {
      vermaArr.push(el); 
      localStorage.setItem("vermaji",JSON.stringify(vermaArr));  
      document.querySelector("#alert").style.display = "flex";
      if(vermaArr.length!==0){
        document.querySelector("#p").style.display = "none"
      append1(vermaArr) 
      }
      else{ document.querySelector("#p").style.display = "flex"}
    })
   

    let h1 = document.createElement("h1");
    h1.innerText = "+";
    
    let h34 = document.createElement("h3");
    h34.innerText = "Add to my workout plans";

    btn.append(h1,h34);

    div3.append(btn)

    div.append(div1,div2,div3);

    document.querySelector("#baby2").append(div);
  }) 

}



let work = () => {
   let   query = document.querySelector("#search").value
   let   query2 = document.querySelector("#select").value
  let data=d.filter(({video})=> {
   
    let x=video.split(",");
    let flag=false;
  for(let i=0; i<x.length; i++){
    if(x[i]==query || x[i]==query2){
      flag=true;
      if(flag==true){return video};
    }
  }
  })
  document.querySelector("#search").value = "";
  document.querySelector("#select").value = "";
  append(data);
 
}


document.querySelector("#class1").addEventListener("click",work);




let append1 = (data) => {
  if(data.length==0){
    document.querySelector("#p").style.display = "flex"
  }
  document.querySelector("#verma").innerHTML="";
 
 
  data.forEach((el,index) => {
    let {smallImg,bigImg,Sort,title,video,id} = el;
     
    let div = document.createElement("div");
    div.setAttribute("class","div");

    if(id%2!==0){
      div.style.backgroundColor = "whitesmoke";
    }

    let div1 = document.createElement("div");
    div1.setAttribute("class","div1")

    let div2 = document.createElement("div");
    div2.setAttribute("class","div2")

    let img = document.createElement("img");
    img.setAttribute("class","img")
    img.src=smallImg

    let h3 = document.createElement("h3");
    h3.setAttribute("class","h3")
    h3.innerText = title

    let h31 = document.createElement("h3");
    h31.setAttribute("class","h31")
    h31.innerText = video;


    let p = document.createElement("p");
    p.setAttribute("class","p")
    p.innerText = Sort;

    div1.append(img);
    div2.append(h3,p,h31)

    if(bigImg!==""){
    let h32 = document.createElement("h3");
    h32.setAttribute("class","h32")
    h32.innerText = bigImg;
    div2.append(h3,p,h31,h32)
    }
    
    let div3 = document.createElement("div");
    div3.setAttribute("class","div3")
    
    let btn = document.createElement("button");
    btn.setAttribute("class","btn1");
    
  
    let h1 = document.createElement("h1");
    h1.innerText = "+";
    h1.addEventListener("click",() => {
      remove(index);
    })

    let h34 = document.createElement("h3");
    h34.innerText = "New Workout";

    btn.append(h1,h34);

    div3.append(btn)

    div.append(div2,div3);

    document.querySelector("#verma").append(div);
  }) 

}

if(vermaArr.length!==0){
  document.querySelector("#p").style.display = "none"
append1(vermaArr) 
}
else{ document.querySelector("#p").style.display = "flex"}
let x = () => {

  document.querySelector("#alert").style.display = "none";
}

document.querySelector("#x").addEventListener("click",x);

let remove = (index) => {
   vermaArr.splice(index,1)
   localStorage.setItem("vermaji",JSON.stringify(vermaArr));
   append1(vermaArr)  
}



// let one = () => {
//   window.location.href = "frontend/main.html"
// }


// let two = () => {
//   window.location.href = "frontend/myexercise.html"
// }


// let three = () => {
//   window.location.href = "workout.html"
// }

// document.querySelector("#one").addEventListener("click",one);
// document.querySelector("#two").addEventListener("click",two);
// document.querySelector("#three").addEventListener("click",three);


