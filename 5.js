class Lingkaran{

    constructor(j){
        this.jarijari=j;
    }

    luaslink(){
        return 3.14*(this.jarijari*this.jarijari);
    }

    kelilinglink(){
        return 2*3.14*this.jarijari;
    }

    cetakPropert(){
        console.log(`Jarijari\t:${this.jarijari}`);
        console.log(`Luas\t:${this.luas}`);
        console.log(`Keliling\t:${this.keliling}`);

    }
}

class Tabung extends Lingkaran{
    constructor(j,t){
        super(j);
        this.tinggi=t;
    }

    volume(){
        return this.luaslink()*this.tinggi;
    }
    luasselimut(){
        return 2*3.14*this.jarijari*this.tinggi;
    }
    luaspermukaan(){
        return 2*(this.luaslink())+this.luasselimut();
    }

    cetakPropert(){
        //memanggil segitiga.cetakPropert
        super.cetakPropert();
        console.log(`Tinggi\t:${this.tinggi}`);
    }
}

let j=7.5;
console.log("Nilai jari-jari :"+j+"cm");
let t=50;
console.log("Nilai tinggi :"+t+"cm");

let obj=new Tabung(j,t);
obj.cetakPropert;

//memanggil metode luas
console.log(`Volume\t:${obj.volume()}`);
console.log(`Luas Selimut\t:${obj.luasselimut()}`);
console.log(`Luas Permukaan\t:${obj.luaspermukaan()}`);

