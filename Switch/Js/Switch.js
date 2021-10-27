
/*let opc, x;

alert("1.Suma\n 2.Resta\n 3.Multiplicacion\n 4.Division");


opc=parseInt(prompt("Digite el algoritmo que desea ver"));

switch(opc){
    case 1:
        var n1,n2,r;
        n1=parseInt(prompt("Digite un numero"));
        n2=parseInt(prompt("Digite un numero"));
        r=n1+n2
        alert("La suma da "+r);
        break

        case 2:
            var n1,n2,r;
            n1=parseInt(prompt("Digite un numero"));
            n2=parseInt(prompt("Digite un numero"));
            r=n1-n2
            alert("La resta da "+r);
            break
            case 3:
                var n1,n2,r;
                n1=parseInt(prompt("Digite un numero"));
                n2=parseInt(prompt("Digite un numero"));
                r=n1*n2
                alert("La multiplicacion da da "+r);
                break
                case 4:
                    var n1,n2,r;
                    n1=parseInt(prompt("Digite un numero"));
                    n2=parseInt(prompt("Digite un numero"));
                    r=n1/n2
                    alert("La division da "+r);
                    break
    
                    default: alert("Seleccione una opcion entre 1 y 4")    
}*/
//all tarea, hacer con todos los talleres hechos
let opc,opc2;

alert("1. Secuencales \n 2.if \n3. if anidado")
opc=parseInt(prompt("Digite la opcion"));

switch(opc){

    case 1:
alert("1. Ejercicio 1\n 2. Ejercicio 2 \n 3,Ejercicio 3");
opc2=parseInt(prompt("Digite el numero del algoritmo"));
switch(opc2){
    case 1:
        alert("Ejercicio 1 de secuenciales");
    break;

    case 2:
        alert("Ejercicio 2 de secuenciales");
    break;
    case 3:
        alert("Ejercicio 3 de secuenciales");
    break;
    default:("Verifique que haya escrito bien el numero");
}

default:("Verifique que haya escrito bien el numero");

    break;//cierre del case de secuenciales
case 2:
    alert("Menu de if simple");
    alert("1. Ejercicio 1\n 2. Ejercicio 2 \n 3,Ejercicio 3");
    opc2=parseInt(prompt("Digite el numero del algoritmo"));
    switch(opc2){
        case 1:
            alert("Ejercicio 1 de if simple");
        break;
    
        case 2:
            alert("Ejercicio 2 de if simple");
        break;
        case 3:
            alert("Ejercicio 3 de if simple");
        break;
        default:("Verifique que haya escrito bien el numero");
    }
break;//break if simple

case 3:
    alert("Menu de if anidado");
    alert("1. Ejercicio 1\n 2. Ejercicio 2 \n 3,Ejercicio 3");
    opc2=parseInt(prompt("Digite el numero del algoritmo"));
    switch(opc2){
        case 1:
            alert("Ejercicio 1 de if anidado");
        break;
    
        case 2:
            alert("Ejercicio 2 de if anidado");
        break;
        case 3:
            alert("Ejercicio 3 de if anidado");
        break;
        default:("Verifique que haya escrito bien el numero");
    }
break;//break if anidado

}
