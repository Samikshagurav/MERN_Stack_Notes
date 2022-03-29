
class A{
    abc(){
        return "sam";
    }
}
class B extends A{
    bca(){
        let fname = "SAkshi";
        let pname=super.abc();//sam
        console.log(`${fname} and ${pname} are good friends.`);
    }
}
const obj= new B;
obj.bca();





