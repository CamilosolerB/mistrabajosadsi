//colegio privado
let C,P,P5,Tm,Rp,RT,Rt;
P=parseFloat(prompt("Indique su promedio"));
C=prompt("Indique si es de preparatoria o es profesional");

if(C=="Preparatoria" || C=="preparatoria" || C=="PREPARATORIA"){
    if(P<=7){
        P5=300;
        Tm=9;
        Rp=P5*Tm;
        alert("El número de materias reprobadas es entre 0 a 3 , entonces podrá cursar 45 unidades y no tendrá descuento, lo que corresponde a $"+RP)
    }
        else if(P<=9){
        P5=180;
        Tm=10;
        Rp=P5*Tm;
        alert("Su promedio de "+P+" entonces podrá cursar 50 unidades y no tendrá descuento, lo que corresponde a $"+Rp)
        }
            else if(P<=9.5){
                P5=180;
                Tm=9;
                Rp=P5*Tm;
                RT=Rp*0.1;
                Rt=Rp-RT;
                alert("Su promedio de "+P+" entonces podrá cursar 50 unidades y tendrá un descuento del 10%, lo que corresponde a $"+Rt)
            }
                else if(P==10){
                    P5=180;
                    Tm=11;
                    Rp=P5*Tm;
                    RT=Rp*0.25;
                    Rt=Rp-RT;
                    alert("Su promedio de "+P+" entonces podrá cursar 55 unidades y tendrá un descuento del 25%, lo que corresponde a $"+RT)
                }
                    else{
                        alert("Error, vuelva a introducir los datos");
                    }
}
else if(C=="Profesional"||C=="profesional"||C=="PROFESIONAL"){
    if(P<=9.5){
        P5=300;
        Tm=11;
        Rp=P5*Tm;
        alert("Su promedio de "+P+" entonces podrá cursar 55 unidades y no tendrá descuento, lo que corresponde a $"+Rp)
    }
        else{
            P5=300;
            Tm=11;
            Rp=P5*Tm;
            RT=Rp*0.2;
            Rt=Rp-RT;

        }
}