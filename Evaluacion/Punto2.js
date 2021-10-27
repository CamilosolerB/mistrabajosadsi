alert("Agenda de citas medicas");
let Nom,opc;
Nom=prompt("Indique su nombre");
opc=parseInt(prompt("Seleccione la opción para su cita \n1. Medicina general \n2. Medicina con especialista \n3. Exámenes médicos\n4. Radiografías"));
if(opc==1){
var edad,RC,FN,R;
edad=parseInt(prompt("Por favor indique su edad"));
if(edad<7){
    RC=parseInt(prompt("Por favor indique Nº de Registro civil"));
    FN=prompt("Indique su fecha de nacimiento");
    alert("Hay disponibilidad en:\n1.26 de Marzo:7:00 AM\n2.26 de Marzo:8:00 AM\n3.26 de Marzo:9:00 AM\n4.26 de Marzo:10:00 AM\n5.26 de Marzo:11:00 AM");
    R=parseInt(prompt("Indique la que mas le convenga"));
    switch(R){
        case 1:
            alert("su cita quedo agendada para el dia 26 de Marzo: 7:00 AM, joven "+Nom+" Identificado con RC # "+RC+", nacido el dia "+FN);
            break;
        case 2:
            alert("Su cita quedo agendada para el dia 26 de Marzo: 8:00 AM joven "+Nom+" Identificado con RC # "+RC+", nacido el dia "+FN);
            break;
        case 3:
            alert("Su cita quedo agendada para el dia 26 de Marzo: 9:00 AM joven "+Nom+" Identificado con RC #"+RC+", nacido el dia"+FN);
            break;
        case 4:
            alert("Su cita quedo agendada para el dia 26 de Marzo: 10:00 AM joven "+Nom+" Identificado con RC #"+RC+", nacido el dia"+FN);
            break;
        case 5:
            alert("Su cita quedo agendada para el dia 26 de Marzo: 11:00 AM joven "+Nom+" Identificado con RC #"+RC+", nacido el dia"+FN);
            break;
        default:alert("Opcion no disponible");
        }
}
        else if(edad<18){
            RC=parseInt(prompt("Por favor indique Nº de tarjeta de identidad"));
            FN=prompt("Indique su fecha de nacimiento");
            alert("Hay disponibilidad en:\n1. 27 de Marzo:7:00 AM\n2. 27 de Marzo:8:00 AM\n3. 27 de Marzo:9:00 AM\n4. 27 de Marzo:10:00 AM\n5. 27 de Marzo:11:00 AM");
            R=parseInt(prompt("Indique la que mas le convenga"));
            switch(R){
                case 1:
                    alert("su cita quedo agendada para el dia 27 de Marzo: 7:00 AM joven "+Nom+" Identificado con T.I # "+RC+" , nacido el dia"+FN);
                    break;
                case 2:
                    alert("Su cita quedo agendada para el dia 27 de Marzo: 8:00 AM joven "+Nom+" Identificado con T.I # "+RC+" , nacido el dia"+FN);
                    break;
                case 3:
                    alert("Su cita quedo agendada para el dia 27 de Marzo: 9:00 AM joven "+Nom+" Identificado con T.I # "+RC+" , nacido el dia"+FN);
                    break;
                case 4:
                    alert("Su cita quedo agendada para el dia 27 de Marzo: 10:00 AM joven "+Nom+" Identificado con T.I # "+RC+" , nacido el dia"+FN);
                    break;
                case 5:
                    alert("Su cita quedo agendada para el dia 27 de Marzo: 11:00 AM joven "+Nom+" Identificado con T.I # "+RC+" , nacido el dia"+FN);
                    break;
                default:alert("Opcion no disponible");
                }
        
        }
                else if(edad>=18){
                    RC=parseInt(prompt("Por favor indique Nº de Cedula de ciudadania"));
                    FN=prompt("Indique su fecha de nacimiento");
                    alert("Hay disponibilidad en:\n1. 28 de Marzo:7:00 AM\n2. 28 de Marzo:8:00 AM\n3. 28 de Marzo:9:00 AM\n4. 28 de Marzo:10:00 AM\n5. 28 de Marzo:11:00 AM");
                    R=parseInt(prompt("Indique la que mas le convenga"));
                    switch(R){
                        case 1:
                            alert("su cita quedo agendada para el dia 28 de Marzo: 7:00 AM señor(a) "+Nom+" Identificado con T.I #"+RC+", nacido el dia"+FN);
                            break;
                        case 2:
                            alert("Su cita quedo agendada para el dia 28 de Marzo: 8:00 AM señor(a) "+Nom+" Identificado con T.I #"+RC+", nacido el dia"+FN);
                            break;
                        case 3:
                            alert("Su cita quedo agendada para el dia 28 de Marzo: 9:00 AM señor(a) "+Nom+" Identificado con T.I #"+RC+", nacido el dia"+FN);
                            break;
                        case 4:
                            alert("Su cita quedo agendada para el dia 28 de Marzo: 10:00 AM señor(a) "+Nom+" Identificado con T.I #"+RC+", nacido el dia"+FN);
                            break;
                        case 5:
                            alert("Su cita quedo agendada para el dia 28 de Marzo: 11:00 AM señor(a) "+Nom+ " Identificado con T.I #"+RC+", nacido el dia"+FN);
                            break;
                        default:alert("Opcion no disponible");
                        }
                
          
                }

}
    else if(opc==2){
        var esp,opc1;
        esp=prompt("Por favor digite la especialidad");
        alert("Para el servicio de "+esp+" hay disponibilidad para el dia \n1.27 de Marzo a las 7:00 AM \n2. 3 de Abril 4:00 PM")
        opc1=parseInt(prompt("digite la opcion que mas le convenga"));
        switch(opc1){
            case 1:
                alert("Su cita quedo agendada para el dia 27 de marzo a las 7:00 AM señor(a) "+Nom);
            break
            case 2:
                alert("Su cita quedo agendada para el dia 3 de Abril a las 4:00 PM señor(a) "+Nom);
            break
            default: alert("Digito no valido, redirigiendo");
        }
        }
            else if(opc==3){
                alert("Para la toma de examenes medicos se atiendene de 8:00 AM a 10:00 PM, no es necesario agendar");
            }
                else if(opc==4){
                    var R
                    R=prompt("Para radiografia solo hay disponibilidad para el dia 27 de Marzo a las 7:00 AA, si la quiere digite SI");
                    if(R=="SI"){
                        alert("Su cita quedo agendada para el dia 27 de Marzo a las 7:00 Am");
                    }
                    else{
                        alert("saliendo al menu principal");
                    }
                    
                }