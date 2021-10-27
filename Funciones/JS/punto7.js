var number;
number=parseInt(prompt("Indique el numero que desea consultar")) 
function Primos(number){
   if(number % 2 !==0 && number % 3 !==0 && number % 5 !==0 && number % 7 !==0 || number==3 || number==2){
       document.write(number+" es un numero primo")
   }
        else{
            document.write(number+" es un numero compuesto")
        }
}
Primos(number)