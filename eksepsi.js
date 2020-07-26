//kelas ekspresi
class DivisionByZeroError extends Error{
    constructor (msg){
        super(msg);
        this.name=this.constructor.name;
        this.message=msg;
    }
    getMessage(){
        return this.message;
    }
}

let a=2;
console.log("Nilai A: "+a);
let b=0;
console.log("Nilai B: "+b);

try{
    if(b==0){
        throw new DivisionByZeroError(
            'Nilai B tidak boleh 0'
        );
    }
    let c=a/b;
    console.log(`${a}/${b}=${c}`);
}catch(e){
    console.log(e.getMessage());
}