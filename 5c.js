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

class Bola extends Lingkaran{
    constructor(j){
        super(j);
    }

    volume(){
        return 4/3*3.14*this.jarijari*this.jarijari*this.jarijari;
    }
    luaspermukaan(){
        return 4*3.14*this.jarijari*this.jarijari;
    }

}

let j=15;
console.log("Nilai jari-jari :"+j+"cm");


let obj=new Bola(j);
obj.cetakPropert;

//memanggil metode 
console.log(`Volume\t        :${obj.volume()}`);
console.log(`Luas Permukaan\t:${obj.luaspermukaan()}`);

