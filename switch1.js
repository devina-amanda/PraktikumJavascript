var ruang = 13;
console.log("No Ruangan: "+ruang);
var kelas;

switch(ruang){
    case 1 : kelas = "X RPL 1" ; break;
    case 2 : kelas = "X RPL 2" ; break;
    case 3 : kelas = "X RPL 3" ; break;
    case 4 : kelas = "X RPL 4" ; break;
    case 5 : kelas = "X RPL 5" ; break;
    case 6 : kelas = "X RPL 6" ; break;
    case 7 : kelas = "X RPL 7" ; break;
    case 8 : kelas = "X RPL 8" ; break;
    case 9 : kelas = "X TKJ 1" ; break;
    case 10 : kelas = "X TKJ 2" ; break;
    case 11 : kelas = "X TKJ 3" ; break;
    case 12 : kelas = "X TKJ 4" ; break;
    case 13 : kelas = "X TKJ 5" ; break;
    case 14 : kelas = "X TKJ 6" ; break;
    default:{
        console.log(`Tidak termasuk kelas 1`)
    }
}

console.log(`Kelas ${kelas} adalah Ruang ${ruang}`);