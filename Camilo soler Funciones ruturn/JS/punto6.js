var number,Acum=1;
number=parseInt(prompt("Indique el numero que desea consultar")) 
function factorial(number){

    let resultado
    for(I=1;I<=number;I++){
        
        Acum=Acum*I

    }
    resultado = ("El resultado total es de "+Acum)
    return resultado;
}
alert (factorial(number))