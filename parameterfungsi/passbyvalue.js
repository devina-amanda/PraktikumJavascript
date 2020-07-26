function tukar(a,b){
    let c=a;
    a=b;
    b=c;
}

let x=100, y=200;

//menampilkan nilai x dan y sebelum ditukar
console.log('Sebelum ditukar');
console.log(`x: ${x}`);
console.log(`y: ${y}`);

//memanggil fungsi tukar()
tukar(x,y);

//menampilkan nilai x dan y setelah ditukar
console.log('\n Setelah Ditukar');
console.log(`x: ${x}`);
console.log(`y: ${y}`);