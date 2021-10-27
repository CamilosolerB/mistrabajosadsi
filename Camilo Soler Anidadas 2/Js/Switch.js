
let opc, x;

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
}
