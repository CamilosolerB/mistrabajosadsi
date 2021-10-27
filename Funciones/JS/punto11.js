let V1,V2,D;

V1=parseInt(prompt("Indique la velocidad de movimiento del vehiculo A Me/min"));
V2=parseInt(prompt("Indique la velocidad del vehiculo b en Me/min"));
D=parseInt(prompt("Indique la distancia en metros"));

    function MRU(V1,V2,D){
        var dif,T;
        if(V1>=V2){
            dif=V1-V2;
            T=D/dif;
            
            document.write("El tiempo empleado para que el vehiculo A alcance al vehiculo B es de "+T+" minutos");
        }
            else{
                dif=V2-V1;
                T=D/dif;
                
                document.write("El tiempo empleado para que el vehiculo B alcance al vehiculo A es de "+T+" minutos")
            }
    }
    MRU(V1,V2,D)