const URL=('https://jsonplaceholder.typicode.com/users')
function details(){
  
    fetch(URL)
    .then(res=>res.json())
    .then(data=>{
        data.forEach(element => {
           
            let li=document.createElement("li");
            li.innerHTML=element.email;
            document.getElementById("target").appendChild(li);
        });
    })
}