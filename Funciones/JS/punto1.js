var number;

number=parseInt(prompt("Indique el numero que desea consultar")) 
function Par_e_impar(number){
   if(number % 2 ===0){
       document.write(number+" es un numero par")
   }
        else{
            document.write(number+" es un numero impar")
        }
}
Par_e_impar(number)