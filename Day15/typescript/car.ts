class Car{
    speed:number;
    readonly dob:Date;
    constructor(){
        this.speed=50;
        this.dob=new Date(1987,09,15);

    }
    acc(){
        this.speed+=70;

    }
    checkspeed(){
        console.log(`the speed is ${this.speed}`);

    }
}
const obj=new Car;

obj.checkspeed();
obj.acc();
obj.checkspeed();