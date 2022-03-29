const myPromise=new Promise((resolve,reject)=>{
    let age=20;
    if(age>18){
        setTimeout(()=>{
            resolve("Eligible")
        },2000)
    
    }else{
        reject("not eligible")
    }
})
myPromise
.then(res=>{
    console.log(res)
})
.catch(rej=>{
    console.log(rej)
})
