class bayar{
    // konstruktor
    constructor(p,l,h,n){
        // mendifinisikan properti
        this.panjang = p;
        this.lebar = l;
        this.harga = h;
        this.ppn = n;
    }
    // daftar metode
    luas(){
        return this.panjang*this.lebar;
    }
    hargaawal(){
        return this.luas()*this.harga;
    }
    jumlahppn(){
        return this.hargaawal()*this.ppn;
    }
    total(){
        return this.hargaawal()+this.jumlahppn();
    }
    // metode statis
    static buatObjek(p,l,h,n){
        return new bayar(p,l,h,n);
    }
}
// membaca data panjang, lebar, harga per meter persegi, dan ppn
let p=20.5;
console.log("Nilai panjang      : "+p);
let l=30;
console.log("Nilai lebar        : "+l);
let h=1500000;
console.log("Nilai harga per m2 : "+h);
let n=15/100;
console.log("Nilai ppn          : "+n);

//memanggil metode statis
let obj=bayar.buatObjek(p,l,h,n);

console.log(`Luas tanah  : ${obj.luas()}`);
console.log(`Harga awal  : ${obj.hargaawal()}`);
console.log(`Jumlah PPN  : ${obj.jumlahppn()}`);
console.log(`Total bayar : ${obj.total()}`);