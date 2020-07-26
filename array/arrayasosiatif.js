let x=new Array();
x['rpl']='Rekayasa Perangkat Lunak';
x['tkj']='Teknik Komputer dan Jaringan';

for(key in x){
    console.log(key.toUpperCase()+'\t='+x[key]);
}