alert("Instituto de idiomas Cambridge");
let D,DD,MM,B,I,A,S,T,E,Ap,Re,P;
D=prompt("Escriba el dia de las semana (Lunes o martes,etc)");
DD=parseInt(prompt("Escriba el que dia es hoy"));
MM=parseInt(prompt("Indique el mes"))
if(DD>31 || MM>12){
    alert("Hubo un error inesperado, por favor vuelva a intentar");
}
    else if(D=="Lunes" || D=="lunes" || D=="LUNES"){
        alert("hoy corresponde a nivel basico");
        E=prompt("¿Hoy presento examen?")
        if(E=="Si" || E=="si" || E=="SI"){
            Ap=parseInt(prompt("Por favor indique el numero de aprobados del examen"));
            Re=parseInt(prompt("Indique el numero de reprobados"));
            P=Ap+Re;
            Ap=Ap*100;
            Ap=Ap/P;
            alert("El promedio de estudiantes aprobados es de "+Ap+"%")
        }
        else{
            alert("Understandble, have a good day");
        }
    }
    else if(D=="Martes" || D=="martes" || D=="MARTES"){
        alert("hoy corresponde a nivel intermedio");
        E=prompt("¿Hoy presento examen?")
        if(E=="Si" || E=="si" || E=="SI"){
            Ap=parseInt(prompt("Por favor indique el numero de aprobados del examen"));
            Re=parseInt(prompt("Indique el numero de reprobados"));
            P=Ap+Re;
            Ap=Ap*100;
            Ap=Ap/P;
            alert("El promedio de estudiantes aprobados es de "+Ap+"%")
        }
        else{
            alert("Understandble, have a good day");
        }
    }
    else if(D=="Miercoles" || D=="miercoles" || D=="MIERCOLES"){
        alert("hoy corresponde a nivel avanzado");
        E=prompt("¿Hoy presento examen?")
        if(E=="Si" || E=="si" || E=="SI"){
            Ap=parseInt(prompt("Por favor indique el numero de aprobados del examen"));
            Re=parseInt(prompt("Indique el numero de reprobados"));
            P=Ap+Re;
            Ap=Ap*100;
            Ap=Ap/P;
            alert("El promedio de estudiantes aprobados es de "+Ap+"%")
        }
        else{
            alert("Understandble, have a good day");
        }
    }
    else if(D=="Jueves" || D=="jueves" || D=="JUEVES"){
        alert("Hoy corresponde a practica hablada");
        B=parseInt(prompt("Indique el numero de personas que asistieron"));
        I=parseInt(prompt("indique el numero de estudiantes registrados para su clase"));
        B=B*100;
        B=B/I;
        if(B<50){
            alert("No asistio la mayoria")
        }
        else{
            alert("asistio la mayoria")
        }
    }
    else if(D=="Viernes" || D=="viernes" || D=="VIERNES"){
        alert("Hoy corresponde a ingles para viajeros")
            if(DD==01 && MM==01 || MM==07){
                alert("Hoy empieza un nuevo ciclo para nuestros estudiantes");
                S=parseInt(prompt("Por favor indique el valor de arancel del ciclo"));
                A=parseInt(prompt("Indique el numero de estudiantes"));
                S=S*A;
                alert("El ingreso total es de "+S+". Solicitamos que los estudiantes esten al dia en sus pagos y conserven la factura para posibles incovenietes");
            }
            else{
                alert("Todos los estudiantes estan al dia con su pago, continue con su trabajo y gracias por trabajar con nosotros");
            }
    }