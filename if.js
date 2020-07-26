var x= 2;
console.log("Nilai x: "+x);
var y= 0;
console.log("Nilai y: "+y);
var z;

if (y===0){
    console.log('Kesalahan: Nilai y tidak boleh nol');
    process.exit(1);
}

z=x/y;
console.log(`${x}/${y}=${z}`);