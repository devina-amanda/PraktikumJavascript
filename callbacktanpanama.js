function hitung(a,b,callback){
    return callback(a,b);
}

let a=3;
console.log("Nilai a: "+a)
let b=4;
console.log("Nilai b: "+b);

console.log(`${a}+${b}=`+hitung(a,b,function(){return a+b;}));
console.log(`${a}-${b}=`+hitung(a,b,function(){return a-b;}));
console.log(`${a}*${b}=`+hitung(a,b,function(){return a*b;}));
console.log(`${a}/${b}=`+hitung(a,b,function(){return a/b;}));