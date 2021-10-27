var number1,number2;
number1=parseInt(prompt("Indique el valor de la base")); 
number2=parseInt(prompt("Indique el valor de la altura")); 
function Triangle(number1,number2){
   var A;
   A=(number1*number2)/2;
   document.write("El area del triangulo equivale a "+A);
}
Triangle(number1,number2);