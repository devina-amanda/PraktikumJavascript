function sum(a){
    if (!typeof a==='Array'){
        console.log('Kesalahan: parameter harus bertipe array');
        return;
    }

    let total=0.0;
    for(let elemen of a){
        total +=elemen;
    }
    return total;
}

//parameter berupa array dengan dua elemen
console.log('sum([10,20]):'+sum([10,20]));
//parameter berupa array dengan tiga elemen
console.log('sum([10,20,30]):'+sum([10,20,30]));