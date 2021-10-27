var number1,number2;
number1=parseInt(prompt("Indique el primer numero")); 
number2=parseInt(prompt("Indique el segundo numero")); 
function Div(number1,number2){
   var exp;

    exp = ("El resultado de la division es equivalente a "+number1/number2+" y el valor del residuo es de "+number1 % number2);

    return exp;
}
alert(Div(number1,number2))