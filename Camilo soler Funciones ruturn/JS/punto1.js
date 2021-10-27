var number;

number=parseInt(prompt("Indique el numero que desea consultar")) 
function Par_e_impar(number){
    let T;
   if(number % 2 ===0){
       T = (number+" es un numero par")
   }
        else{
           T = (number+" es un numero impar")
        }
        return T;
}
alert(Par_e_impar(number))