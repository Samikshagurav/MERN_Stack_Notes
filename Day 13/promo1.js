function car(){
    this.speed=50
}
car.prototype.acc=function(){
    this.speed+=60
}
car.prototype.checkspeed=function(){
    console.log("This speed is:"+ this.speed)
}

var obj=new car();
obj.checkspeed();
obj.acc();
obj.checkspeed();