var a=10, b=20;
console.log(`a \t: ${a}`);
console.log(`a \t: ${b}`);
console.log(`a==b \t: ${(a==b)}`);
console.log(`a!=b \t: ${(a!=b)}`);
console.log(`a<b \t: ${(a<b)}`);
console.log(`a>b \t: ${(a>b)}`);
console.log(`a<=b \t: ${(a<=b)}`);
console.log(`a>=b \t: ${(a>=b)}`);

//operator relasional dalam blok pemilihan
if(a<b){
    console.log(`a lebih kecil dari b`);
}

//operator relasional dalamm blok pengulangan
var i=a;
while(i<=b){
    console.log(`${i}`);
    i +=2
}