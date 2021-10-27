var number1,number2,number3;
number1=parseInt(prompt("Indique el primer numero")); 
number2=parseInt(prompt("Indique el segundo numero")); 
number3=parseInt(prompt("Indique el tercer numero"));
function Mame(number1,number2,number3){

    let R,total;
    total=(number1+number2+number3)/3

    if(number1>=number2 && number1>=number3){
        if(number2<=number3){
           
            R = alert(number1+" es el numero mayor y el menor es: "+number2+" y la media de los tres numeros es de"+total)
           
        }
        else{
            R = alert(number1+" es el numero mayor y el menor es: "+number3+" y la media de los tres numeros es de"+total)
        }
    }

    if(number2>=number1 && number2>=number3){
        if(number1<=number3){
           
            R = alert(number2+" es el numero mayor y el menor es: "+number1+" y la media de los tres numeros es de"+total)
           
        }
        else{
            R = alert(number2+" es el numero mayor y el menor es: "+number3+"y la media de los tres numeros es de"+total)
        }
    }

    if(number3>=number1 && number3>=number2){
        if(number1<=number2){
           
            R = alert(number3+" es el numero mayor y el menor es: "+number1+" y la media de los tres numeros es de"+total)
           
        }
        else{
            R = alert(number3+" es el numero mayor y el menor es: "+number2+"y la media de los tres numeros es de"+total)
        }
    }

    return R;
    }

alert(Mame(number1,number2,number3))