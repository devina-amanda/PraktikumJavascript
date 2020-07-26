let siswa=[
    ['1','Adi','Malang'],
    ['2','Budi','Sidoarjo'],
    ['3','Dea','Surabaya']
];

console.log('No \t Nama Siswa \t Asal');
console.log('--- \t ------- \t ----');
for(let i=0;i<siswa[i].length;i++){
    for(let j=0;j<siswa[i].length;j++){
        process.stdout.write(siswa[i][j].toString());
        if(j<siswa[i].length-1){
            process.stdout.write(' \t  ');
        }
    }
    console.log();
}