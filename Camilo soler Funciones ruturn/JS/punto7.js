var number;
number=parseInt(prompt("Indique el numero que desea consultar")) 
function Primos(number){

    let t;

   if(number % 2 !==0 && number % 3 !==0 && number % 5 !==0 && number % 7 !==0 || number==3 || number==2){
       t = (number+" es un numero primo")
   }
        else{
            t = (number+" es un numero compuesto")
        }
    
    return t;
}
alert(Primos(number))