var Car = /** @class */ (function () {
    function Car() {
        this.speed = 50;
        this.dob = new Date(1987, 09, 15);
    }
    Car.prototype.acc = function () {
        this.speed += 70;
    };
    Car.prototype.checkspeed = function () {
        console.log("the speed is " + this.speed);
    };
    return Car;
}());
var obj = new Car;
obj.checkspeed();
obj.acc();
obj.checkspeed();
