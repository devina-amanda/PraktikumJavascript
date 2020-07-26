function hipotenusa(a,b){
    //fungsi lokal
    function kuadrat(x){
        return x*x;
    }
    //memanggil fungsi lokal
    return c =Math.sqrt(kuadrat(a)+kuadrat(b));
}

console.log('Menghitung Sisi Miring Segitiga Siku-siku');
let a=3;
console.log("Nilai alas: "+a);
let b=4;
console.log("Nilai tinggi: "+b);

var c=hipotenusa(a,b);

console.log(`Sisi Miring = ${c}`);