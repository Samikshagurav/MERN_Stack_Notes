function outer(){
    var sum=0;
    function inner(){
        sum+=count;
        return sum;
    }
    return inner;
}
var out= outer(2);
console.log(out());
var out=outer(3);
console.log(out(4));
console.log()