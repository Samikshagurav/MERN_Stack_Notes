
async function abc(){
    try{
        await fetch('https://jsonplaceholder.typicode.com/users')
        .then((res)=>{ 
            res.json().then((data)=>{
            data.filter((users)=>{
                let div=document.createElement("div");
                div.innerHTML=`Name:${users.name}<br> Email:${users.email}<br>phon:
                ${users.phone}<br> website: ${users.website} <hr>`;
                document.getElementById("target").appendChild(div);
            })
        })
    })

}
catch{
    console.log("error")
}
}