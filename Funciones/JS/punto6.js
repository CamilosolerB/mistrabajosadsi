var number,Acum=1;
number=parseInt(prompt("Indique el numero que desea consultar")) 
function factorial(number){

    for(I=1;I<=number;I++){
        
        Acum=Acum*I

    }
    alert("El resultado total es de "+Acum)
}
factorial(number)