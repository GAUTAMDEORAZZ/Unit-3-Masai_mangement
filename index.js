
function StudentData(n,c,u,i,b,){
    this.name=`Name:-${n}`
    this.course=`Courses:-${c}`
    this.unit=`Unit:-${u}`;
    this.image=i;
    this.batch=`Batch:-Ft-Web${b}`;
}


function storeData(){
    event.preventDefault();
    let form=document.getElementById("form");
    let name=form.name.value;
    let course=form.course.value
    let unit=form.unit.value
    let image=form.image.value
    let batch=form.batch.value
    console.log(name,course,image,batch)
    
    var arrData=JSON.parse(localStorage.getItem("students")) || []
    let student=new StudentData(name,course,unit,image,batch)
    arrData.push(student)
    // console.log(arrData)
    localStorage.setItem("students",JSON.stringify(arrData))
    // document.querySelectorAll("input").value=""
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
