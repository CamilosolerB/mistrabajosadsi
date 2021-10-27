var number1,number2;
number1=parseInt(prompt("Indique el primer numero")); 
number2=parseInt(prompt("Indique el segundo numero")); 
function Div(number1,number2){
   var ref,dif;
   ref=number1/number2
    dif=number1%number2
    document.write("El resultado de la division es equivalente a "+ref+" y el valor del residuo es de "+dif)
}
Div(number1,number2)