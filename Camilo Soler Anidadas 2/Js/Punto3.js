alert("año bisiesto o ¿no?");
let A;
A=parseInt(prompt("Por favor digite el año para saber si es bisiesto o no"));
if(A%4===0 && A%100!==0 || A%400==0){
    alert(A+" es un año bisiesto.");
}
    else{
        alert(A+" no es año bisiesto");
    }