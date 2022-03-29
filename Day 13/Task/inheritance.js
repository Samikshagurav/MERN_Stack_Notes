
class A{
    abc(){
        return "gurav";
    }
}
class B extends A{
    bca(){
        let fname = "diya";
        let pname=super.abc();//gurav
        console.log(`${fname} and ${pname} are good friends.`);
    }
}
const obj= new B;
obj.bca();





