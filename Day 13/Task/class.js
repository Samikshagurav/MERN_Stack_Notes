class Car
{
    constructor(){
        this.speed=60;
    }
    acc(){
        this.speed+=60;
    }
    checkspeed(){
        console.log(`the speed is ${this.speed}`)
    }
}
const obj=new Car;
obj.checkspeed();
obj.acc();
obj.checkspeed();





