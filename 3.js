var bb = 90;
console.log("Berat badan  :" +bb+ "kg");
var tb = 1.7;
console.log("Tinggi badan :" +tb+ "m")

var bmi = bb/(tb*tb);
console.log("Nilai BMI    :" +bmi)
if(bmi < 18.5){
    console.log(`Anda kekurangan berat badan`)

}else if((bmi >= 18.5) && (bmi <= 24.9)){
    console.log(`Anda normal(ideal)`)

}else if((bmi >= 24.9) && (bmi <= 29.9)){
    console.log(`Anda kelebihan berat badan`)

}else if(bmi >= 30){
    console.log(`Anda kegemukan(obesitas)`)
}else{}



