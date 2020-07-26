//membuat tipe objek
function Segitiga(a,t){
    this.alas=a;
    this.tinggi=t;
}

Segitiga.prototype.luas=function(){
    return this.alas*this.tinggi/2;
}

//membuat objek dari tipe segitiga
let obj=new Segitiga(4,5);

console.log("Sebelum nilai properti diubah:");
console.log(`obj.alas\t:${obj.alas}`);
console.log(`obj.tinggi\t:${obj.tinggi}`);
console.log(`obj.luas()\t:${obj.luas()}`);

//mengubah nilai properti alas dan tinggi
obj.alas=10;
obj.tinggi=12;

console.log("Setelah nilai properti diubah:");
console.log(`obj.alas\t:${obj.alas}`);
console.log(`obj.tinggi\t:${obj.tinggi}`);
console.log(`obj.luas\t:${obj.luas()}`);