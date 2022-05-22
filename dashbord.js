var data=JSON.parse(localStorage.getItem("students"))
console.log(data)
displayData(data)
function displayData(data){
    
    data.forEach(function(elem,index){
     let studentShow=document.getElementById("studentShow")
    //  document.getElementById("studentShow").innerHTML=""

        let div=document.createElement("div")

        let img=document.createElement("img")
        img.src=elem.image

        let name=document.createElement("h3")
        name.innerText=elem.name

        let course=document.createElement("p")
        course.innerText=elem.course

        let unit=document.createElement("p")
        unit.innerText=elem.unit

        let batch=document.createElement("p")
        batch.innerText=elem.batch

        let btn=document.createElement("button")
        btn.innerText="Remove"
        btn.style.cursor="pointer"
        btn.style.color="red"
        btn.addEventListener("click",function(){
             removeItem(elem,index)
        })

        div.append(img,name,unit,course,batch,btn)
        console.log(name,unit,course,batch)
        studentShow.append(div)





        
    })
}


function removeItem(elem,index){
    
 let trace=JSON.parse(localStorage.getItem("trace")) || []
 trace.push(elem)
 localStorage.setItem("trace",JSON.stringify(trace))
 
  data.splice(index)
    // console.log(data)
    localStorage.setItem("students",JSON.stringify(data))
    
    // displayData(data)
    window.location.reload()
}



function calculate(){
    let data= JSON.parse(localStorage.getItem("students"))
    let obj={}
    for(let i=0; i<data.length;i++){
        if(!obj[data[i].batch]){
            obj[data[i].batch]=0
        }
    }

    for(let i=0; i<data.length;i++){
        
            obj[data[i].batch]++;
       
    }

    console.log(obj)
    
  
    localStorage.setItem("objData",JSON.stringify(obj))

}
calculate()

var navbar=document.getElementById("navbar")
var navData=JSON.parse(localStorage.getItem("objData"))

for(var key in navData){
    let div=document.createElement("div")
    div.append(key +"-"+ navData[key])
    navbar.append(div)
}
