let arr=[1,2,3,4,5];
const total=arr.reduce((prev, current)=>{
    console.log(prev+"---"+current)
    return prev+current;
},0)
console.log(total)
