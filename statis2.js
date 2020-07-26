class Aritmatika{
    static tambah(a,b){
        return a+b;
    }
}
//membaca data a dan b
let a=3;
console.log("Nilai a: "+a);
let b=4;
console.log("Nilai b: "+b);
//memanggil metode static
console.log(`${a}+${b}=${Aritmatika.tambah(a,b)}`);