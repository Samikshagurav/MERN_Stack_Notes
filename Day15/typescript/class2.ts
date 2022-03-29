interface JsonConvert{
    toJSON(): string;
}
class sam implements JsonConvert {
    constructor(private fname, private lname){

    }
    toJSON():string{
        return JSON.stringify(this)
    }
}
let obj1=new sam("Sam"," Gurav");
console.log(obj1.toJSON())








