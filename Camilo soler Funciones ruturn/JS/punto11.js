let V1,V2,D;

V1=parseInt(prompt("Indique la velocidad de movimiento del vehiculo A km/h"));
V2=parseInt(prompt("Indique la velocidad del vehiculo b en km/h"));
D=parseInt(prompt("Indique la distancia en kilometros"));

let Mos;
    function MRU(V1,V2,D){
        var dif,T;
        if(V1>=V2){
            dif=V1-V2;
            T=D/dif
            T=T*60
            
            
            Mos = ("El tiempo empleado para que el vehiculo A alcance al vehiculo B es de "+T+" minutos");
        }
            else{
                dif=V2-V1;
                T=D/dif;
                T=T*60
                
                Mos = ("El tiempo empleado para que el vehiculo B alcance al vehiculo A es de "+T+" minutos")
            }

            return Mos;
    }
    alert(MRU(V1,V2,D))