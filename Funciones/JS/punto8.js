var number1,number2,number3;
number1=parseInt(prompt("Indique el primer numero")); 
number2=parseInt(prompt("Indique el segundo numero")); 
number3=parseInt(prompt("Indique el tercer numero"));
function Mame(number1,number2,number3){

    if(number1>=number2){
        if(number1>=number3){

            document.write(number1+" es el numero mayor y el menor es: "+number2)
        }
        else{
            document.write(number3+" es el numero mayor y el menor es: "+number2)
            }
        }
    if(number2>=number3){
        if(number1>=number3){

            document.write(number2+" es el numero mayor y el menor es: "+number1)
        }
        else{
            document.write(number3+" es el numero mayor y el menor es: "+number1)
            }
        
    }
    else if(number1>=number3){
        if(number1>=number2){
            
            document.write(number1+" es el numero mayor y el menor es: "+number3)
        }
        else{
            document.write(number2+" es el numero mayor y el menor es: "+number3)
        }
    }
    }

Mame(number1,number2,number3)