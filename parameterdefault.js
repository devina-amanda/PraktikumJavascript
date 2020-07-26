function cetak(s,n=3,newline=true){
    for(let i=0;i<n;i++){
        process.stdout.write(s);
        if(newline)process.stdout.write('\n');
    }
}

//memanggil fungsi cetak() dengan satu parameter
console.log('Memanggil fungsi dengan satu parameter:');
cetak('RPL');

//memanggil fungsi cetak() dengan dua parameter
console.log('\n Memanggil Fungsi dengan 2 parameter:');
cetak('RPL',2);
//memanggil fungsi cetak dengan 3 parameter
console.log("Memanggil fungsi dengan 3 parameter:");
cetak('RPL',1,true);
cetak('TKJ',1,false);