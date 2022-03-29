function * generate(){
    console.log("Invoke first");
    yield 1;
    console.log("Ïnvoke second");
    yield 2;
    console.log("Ïnvoke Third");
    yield 3;
    return 4;
}
for(const val of generate()){
    console.log(val);
}
// let gen=generate();
// console.log(gen.next());
// console.log(gen.next());
// console.log(gen.next());
// console.log(gen.next());
// console.log(gen.next());