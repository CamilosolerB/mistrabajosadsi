var number1,number2;
number1=parseInt(prompt("Indique el primer numero")); 
number2=parseInt(prompt("Indique el segundo numero")); 
function Mame(number1,number2){
    let T;
   if(number1<number2){
       T = (number2+" es el mayor");
   }
        else if(number1>number2){
           T = (number1+" es el mayor");
        }
            else{
                T = ("Ambos numeros son iguales");
                
            }
        return T;
            
}
alert(Mame(number1,number2))