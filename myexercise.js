
let datas=JSON.parse(localStorage.getItem("userData"))
console.log(datas)

document.getElementById("baljor").innerHTML=datas.name

let display = () => {

    document.querySelector("#smallInputDiv").style.display="none";
    document.querySelector("#main").style.display="flex";
}

document.querySelector("#more").addEventListener("click",display);


let detailArr = JSON.parse(localStorage.getItem("exerciseData")) || []


 class Exercise {

      constructor(e,g,d) {
         this.exerciseName = e;
         this.muscleGroup =g;
         this.discription =d;
      }
 }

 let btn2 = () => {
      document.querySelector("#alert").style.display = "flex";


      let exerciseName = document.querySelector("#exerciseName1").value;
      let muscleGroup = document.querySelector("#muscleGroup1").value;

      let ex = new Exercise(exerciseName,muscleGroup);
      
      detailArr.push(ex);

      console.log(detailArr);
      localStorage.setItem("exerciseData",JSON.stringify(detailArr));

      document.querySelector("#exerciseName1").value = ""
      document.querySelector("#muscleGroup1").value=""
      
    displayTable(detailArr);


 }


 displayTable(detailArr)
 function displayTable(detailArr){
    if(detailArr.length!==0){
    document.querySelector("#noresult").style.display = "none"}
    else{document.querySelector("#noresult").style.display = "block"}
    document.querySelector("#table").innerHTML = ""
 detailArr.forEach((el,index) => {
  
   let div1 = document.createElement("div");
   div1.setAttribute("class","div1")
   let div2 = document.createElement("div"); 
   div2.setAttribute("class","div2")
   let div3 = document.createElement("div");
   div3.setAttribute("class","div3")
   let div4 = document.createElement("div");
   div4.setAttribute("class","div4")
   let div5 = document.createElement("div");
   div5.setAttribute("class","div5")
   let div6 = document.createElement("div");
   div6.setAttribute("class","div6")
   let h31= document.createElement("h3");
   h31.setAttribute("class", "h31")
   h31.innerText = el.exerciseName;
   div4.append(h31)

   let h32= document.createElement("h3");
   h32.setAttribute("class", "h32")
   h32.innerText = el.muscleGroup;
   div2.append(h32)

   if(el.discription!==undefined){
   let h33= document.createElement("h3");
   h33.setAttribute("class", "h33")
    h33.innerText = el.discription;
    div4.append(h31,h33)
   }

    
    let img = document.createElement("img");
     img.alt = "error";
    div3.append(img);
    
     let img1 = document.createElement("img");
     img1.setAttribute("class","img1");

     img1.addEventListener("click",() => {
        deleteIndex(index);
     })

     img1.src = "https://cdn4.iconfinder.com/data/icons/social-messaging-ui-color-squares-01/3/13-512.png";
     
     div5.append(img1);

     div1.append(div3,div4,div5);
    
     div6.append(div2,div1)
    
     document.querySelector("#table").append(div6)
 });
}

document.querySelector("#btn2").addEventListener("click",btn2);


let btn1  = () => {
    document.querySelector("#alert").style.display = "flex";

    let exerciseName = document.querySelector("#exerciseName").value;
    let muscleGroup = document.querySelector("#muscleGroup").value;
    let description = document.querySelector("#description").value;

    let ex = new Exercise(exerciseName,muscleGroup,description);
      
    detailArr.push(ex);

    console.log(detailArr);
    localStorage.setItem("exerciseData",JSON.stringify(detailArr));

    document.querySelector("#exerciseName").value = ""
    document.querySelector("#muscleGroup").value = ""
    document.querySelector("#description").value = ""
   
    displayTable(detailArr);
}


document.querySelector("#btn1").addEventListener("click",btn1);


 let deleteIndex = (index) => {
    console.log("in")
  
    detailArr.splice(index,1);
    localStorage.setItem("exerciseData",JSON.stringify(detailArr));
    displayTable(detailArr);
}


let x = () => {

    document.querySelector("#alert").style.display = "none";
}

document.querySelector("#x").addEventListener("click",x);




