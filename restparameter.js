function sum(...a){
    let total=0.0;
    for(let elemen of a){
        total +=elemen;
    }
    return total;
}

//memanggil fungsi dengan 2 argumen
console.log('Sum(10,20): '+sum(10,20));
//memanggil fungsi dengan 3 argumen
console.log('Sum(10,20,30): '+sum(10,20,30));