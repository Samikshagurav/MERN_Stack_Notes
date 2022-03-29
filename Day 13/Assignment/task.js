class Clock{
    render(){
        var time = new Date();
        var hour = time.getHours();
        var min = time.getMinutes();
        var sec = time.getSeconds();
        console.log(`${hour} : ${min} : ${sec}`);
    }
    start(){
        var interval = setInterval(this.render,1000);
    }
}
var obj = new Clock;
obj.start();