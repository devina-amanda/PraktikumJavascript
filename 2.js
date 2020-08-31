class bayar{
    // konstruktor
    constructor(b,hb,g,hg,t,ht,m,hm){
        // mendifinisikan properti
        this.beras = b;
        this.hargaberas = hb;
        this.gula = g;
        this.hargagula = hg;
        this.telur = t;
        this.hargatelur = ht;
        this.minyak = m;
        this.hargaminyak = hm;
    }
    // daftar metode
    totalberas(){
        return this.beras*this.hargaberas;
    }
    totalgula(){
        return this.gula*this.hargagula;
    }
    totaltelur(){
        return this.telur*this.hargatelur;
    }
    totalminyak(){
        return this.minyak*this.hargaminyak;
    }
    totalbayar(){
        return this.totalberas()+this.totalgula()+this.totaltelur()+this.totalminyak();
    }
    // metode statis
    static buatObjek(b,hb,g,hg,t,ht,m,hm){
        return new bayar(b,hb,g,hg,t,ht,m,hm);
    }
}
// membaca data 
let b=5;
console.log("Jumlah beras    : "+b);
let hb=10000;
console.log("Harga beras     : "+hb);
let g=5;
console.log("Jumlah gula     : "+g);
let hg=14000;
console.log("Harga gula      : "+hg);
let t=2;
console.log("Jumlah telur    : "+t);
let ht=20000;
console.log("Harga telur     : "+ht);
let m=10;
console.log("Jumlah minyak   : "+m);
let hm=9000;
console.log("Harga minyak    : "+hm);

//memanggil metode statis
let obj=bayar.buatObjek(b,hb,g,hg,t,ht,m,hm);

console.log(`Total beras         : ${obj.totalberas()}`);
console.log(`Total gula          : ${obj.totalgula()}`);
console.log(`Total telur         : ${obj.totaltelur()}`);
console.log(`Total minyak goreng : ${obj.totalminyak()}`);
console.log(`Total bayar         : ${obj.totalbayar()}`);