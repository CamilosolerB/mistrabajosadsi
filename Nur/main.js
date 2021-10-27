alert("Ejercicio 2");

let edad,nombre;

edad=parseInt(prompt("Escriba la edad"));
nombre=prompt("Escriba su nombre")

if(edad<=5){
    alert(+nombre+" es un niño pequeño ");
}

        else if(edad<=12){
        alert(+nombre+" es un niño grande ");
        } 

                else if(edad<=17){
                alert(+nombre+" es un adolencente");
                }

                    else if(edad<=70){
                    alert(+nombre+" es un adulto");
                    }
                            else if(edad<=100){
                            alert(+nombre+" es un adulto mayor");
                            }
                                else{
                                alert("digite una edad 1 a 100");
                                }