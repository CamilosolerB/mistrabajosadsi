var number;

number=parseInt(prompt("Indique el numero que desea consultar")) 

const Par_e_impar=(number)=>{
    if(number % 2 ===0){
        alert(number+" es un numero par")
    }
         else{
            alert(number+" es un numero impar")
         }
}

alert(Par_e_impar(number))