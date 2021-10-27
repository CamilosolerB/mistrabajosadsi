var number1,number2;
number1=parseInt(prompt("Indique el primer numero")); 
number2=parseInt(prompt("Indique el segundo numero")); 
function Mame(number1,number2){
   if(number1<number2){
       alert(number2+" es el mayor");
   }
        else if(number1>number2){
            alert(number1+" es el mayor");
        }
            else{
                alert("Ambos numeros son iguales");
                
            }
}
Mame(number1,number2)