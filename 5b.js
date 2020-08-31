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

class Kerucut extends Lingkaran{
    constructor(j,t){
        super(j);
        this.tinggi=t;
    }
    

    volume(){
        return 1/3*this.luaslink()*this.tinggi;
    }
    luasselimut(){
        return 3.14*this.jarijari*Math.sqrt((this.jarijari*this.jarijari)+(this.tinggi*this.tinggi));
    }
    luaspermukaan(){
        return this.luaslink()+this.luasselimut();
    }

    cetakPropert(){
        //memanggil lingkaran.cetakPropert
        super.cetakPropert();
        console.log(`Tinggi\t:${this.tinggi}`);
    }
}
let j=10;
console.log("Nilai jari-jari :"+j+"cm");
let t=40;
console.log("Nilai tinggi    :"+t+"cm");

let obj=new Kerucut(j,t);
obj.cetakPropert;

//memanggil metode 
console.log(`Volume\t:${obj.volume()}`);
console.log(`Luas Selimut\t:${obj.luasselimut()}`);
console.log(`Luas Permukaan\t:${obj.luaspermukaan()}`);
