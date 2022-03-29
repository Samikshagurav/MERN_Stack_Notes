const myPromise=new Promise((resolve,reject)=>{
    let percentage=68;
    if(percentage>60){
        setTimeout(()=>{
            resolve("you are eligible for this drive")
        },2000)
    
    }else{
        reject("you are not eligible for this drive")
    }
})
myPromise
.then(res=>{
    console.log(res)
})
.catch(rej=>{
    console.log(rej)
})
