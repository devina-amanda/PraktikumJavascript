let a= 6;
console.log("Nilai a: "+a);
let b= 0;
console.log("Nilai b: "+b);
let c;

if(b===0){
    console.log('kesalahan: nilai b tidak boleh 0');
    process.exit(1);
}

c=a/b;
console.log(`${a}/${b}=${c}`);