var number1,number2,number3;
number1=parseInt(prompt("Indique el primer numero")); 
number2=parseInt(prompt("Indique el segundo numero")); 
number3=parseInt(prompt("Indique el tercer numero"));
const Mame=(number1,number2,number3)=>{

    total=(number1+number2+number3)/3

    if(number1>=number2 && number1>=number3){
        if(number2<=number3){
           
            document.write(number1+" es el numero mayor y el menor es: "+number2+" y la media de los tres numeros es de"+total)
           
        }
        else{
            document.write(number1+" es el numero mayor y el menor es: "+number3+" y la media de los tres numeros es de"+total)
        }
    }

    if(number2>=number1 && number2>=number3){
        if(number1<=number3){
           
            document.write(number2+" es el numero mayor y el menor es: "+number1+" y la media de los tres numeros es de"+total)
           
        }
        else{
            document.write(number2+" es el numero mayor y el menor es: "+number3+"y la media de los tres numeros es de"+total)
        }
    }

    if(number3>=number1 && number3>=number2){
        if(number1<=number2){
           
            document.write(number3+" es el numero mayor y el menor es: "+number1+" y la media de los tres numeros es de"+total)
           
        }
        else{
            document.write(number3+" es el numero mayor y el menor es: "+number2+"y la media de los tres numeros es de"+total)
        }
    }
}


Mame(number1,number2,number3)