
let arr1=[1,2,3,4,5,5 ,62,3];
const total1=arr1.reduce((prev1, current1)=>{
    console.log(prev1+"---"+current1)
    return prev1+current1;
},0)
console.log(total1)