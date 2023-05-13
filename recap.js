//Ternary Operator

//condition ? True : False



let age = 15;


// ternary operatorsüz
if(age >= 18){
    console.log("Okey ! ");
}
else{
    console.log("Not Okay !");
}



// ternary operatorlü
// ?   --> if     :  --> else
let result = (age >= 18) ? "Okay" :  "Not Okay";
console.log(result);

// bu sekilde de yazilabilir ama reuseable (tekrar kullanilabilir) bir kod olmasi için yukaridaki gibi yazmak daha iyi olur ilerisi için.
age >=18 ? console.log("OK") : console.log("NOT OK");















// 3 kosul olursa
if(age >= 18){
    console.log("You are eligable");
}
else if(age < 18){
    console.log("You must be older than 18 ");
}
else{
    console.log("You are not eligable")
}



//3 kosul olursa ve ternary operator kullanilirsa
let result2 = 
(age >= 18) ? "eligable" :
((age < 18) ? "not older than 18" : "not eligable");
console.log(result2);












let result3 = (age >= 18) ? "You are eligable" :""; // :; yanlis oluyor,error veriyor.Bosluk koymaliyiz.
console.log(result3);











// JSON - JavaScript Object Notation
// Json example
/*
let jsonData = `{"name" : "Json", "surname" : "Statham",}`;

console.log(jsonData.name);  // output : undefined
// console.log(jsonData.getFullName()); --> fonksiyon Json da çalismaz.

let convertedJson = JSON.parse(jsonData); // Js dünyasina çevirilir , obje ye çevirilir.
console.log(convertedJson);
*/


//JavaScript object example
let jsData = {
    name :  "Jsaon",
    surname : "Statham",
    getFullName : function(){
        return this.name + " " + this.surname;
    }
};

console.log(jsData.name);
console.log(jsData.getFullName());  // yukarida return degilde console log yazsaydik sonra burada tekrar konsol log a yazdirdigimizda undefined olurdu











let data = '{"name":"Emre","age":23,"langs":["Html","Css","Js"]}';
let convertedData = JSON.parse(data);

console.log(convertedData);
console.log(convertedData.langs[0]); //html
console.log(convertedData.langs[1]); //css
console.log(convertedData.langs[2]); //js

/*
let myJson = JSON.stringify(obj);
console.log(myJson);
*/












// Regular Expression - Regex - RegExp


let text = "Visit Google";
console.log(text);

let sonuc1 = text.replace("Google","W3school"); // 1. yazdigimizi 2. yazdigimizla degistirdik.
console.log(sonuc1);

let sonuc2 = text.replace("google","W3school"); // küçük harften dolayi Google i bulamadi.Degistiremedi.
console.log(sonuc2);

let sonuc3 = text.replace(/google/i,"W3school"); // i sayesinde case sensitive oldu ve küçük yazmamiza ragmen degistirdi.
console.log(sonuc3);








let text2 = "Is this all about js is";

let sonuc4 = text2.match(/is/i); // output sadece ---> Is
console.log(sonuc4);

let sonuc5 = text2.match(/is/g); // output : is,is
console.log(sonuc5);

let sonuc6 = text2.match(/is/ig); // output: Is,is,is
console.log(sonuc6);








//DÜZGÜN KOD YAZMA 
//CLEAN CODE

// camelCase ler e dikkat edilmeli


// degisken isimleri value lar ile alakali olmali
let bar = "Zeynep";  // saçma
let name = "Zeynep"; //düzgün



// boolen degisken isimler soru seklinde tanimlanir,
let isActive = true;





//Kaçinilmasi gereken tanimlama
const user = {
    userId: "fsdsghdfh-2242xvsrt8-dgsdgf",
    userEmail:"john@john.com"
};

// dogru olan
const user2 = {
    id: "fsdsghdfh-2242xvsrt8-dgsdgf",  //tekrar user yazmaya gerek yok.
    email: "john@john.com"
}




//Kaçinilmasi gereken
if(isActive === true){
    //...
}

//Daha uygun olan
if(isActive){   // ---> "eger aktif ise " demek . yani direk isActive i true sayiyor.
    //...
}






let firstName = "JOHN";
if(firstName !==""  &&  firstName !== null  &&  firstName !== undefined){
    console.log("Merhaba");
}


if(!!firstName){  // !!  ---> yukaridaki 3 seye karsilik geliyor.
    console.log("Merhaba");
}