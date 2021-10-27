var opc,opc2,opc3,opc4,b,h,c,A,Ct,R1,R2,R3,R4,R5,P,Tc1,c2,c3,c4,n1,n2,n3,n4,C1,C2,C3,C4,N1,N2,N3,N4,To,Pi,Pul,Y,Cm,M,SB,HED,HEN,HEF,HEDD,DNT,SD,SH,HHED, HHEN, HHEF, HHEDD,THE,TDNT,DESC,TB,TSyP,TFR1,R2,R3,E,IVA,N,D,E1,R,RB,RTI,RT,H,M,T,Th,FD,P,Dt,Tb,Tf,Pt,Ob,P1,D1,N,Ha,PB,Po2,P2,Po1,P10,PF,NP,Zi;
opc3=1
while(opc3==1){
alert("1. Secuenciales\n 2. If simple \n 3. If anidado\n 4.Ciclo while \n 5.Ciclo for \n 6.Case")
opc=parseInt(prompt("Digite la opcion"));
opc4=1;
while(opc4==1){
switch(opc){
    case 1:
        
alert("!!Bienvenido al menu de secuenciales por favor indique el ejercicio que desea!!");

opc2=parseInt(prompt("1. CALCULAR COSTO DE UN TERRENO \n 2. CALCULAR PROMEDIO DE CALIFICACIONES\n 3. CALCULAR CALIFICACIÓN FINAL CON PORCENTAJES\n 4. CALCULAR MEDIDAS SEGÚN EL VALOR DE LOS PIES \n 5. CALCULAR LA NOMINA "));


switch(opc2){
        
    
        case 1:
        alert("CALCULAR COSTO DE UN TERRENO");
        b=parseInt(prompt("Digite el primer valor"))
        h=parseInt(prompt("Digite el segundo valor"))
        c=parseInt(prompt("Digite el costo por metro cuadrado"))
        A=b*h;
        Ct=A*c
        alert("El costo total obtenido por el terreno es de $" +Ct)
        
        break;//Break punto 1

    case 2:
        alert("CALCULAR PROMEDIO DE CALIFICACIONES");
        
        R1=parseInt(prompt("Digite el Promedio 1"));
        R2=parseInt(prompt("Digite el Promedio 2"));
        R3=parseInt(prompt("Digite el Promedio 3"));
        R4=parseInt(prompt("Digite el Promedio 4"));
        R5=parseInt(prompt("Digite el Promedio 5"));
        P=R1+R2+R3+R4+R5;
        T=P/5;
        alert("El promedio final del muchacho es de "+T);
                
    break;//Break Punto 2
    case 3:
        alert("CALCULAR CALIFICACIÓN FINAL CON PORCENTAJE");
    
        n1=parseInt(prompt("Digite el resultado 1"));
        n2=parseInt(prompt("Digite el resultado 2"));
        n3=parseInt(prompt("Digite el resultado 3"));
        n4=parseInt(prompt("Digite el resultado 4"));
        N1=n1*0.3;
        N2=n2*0.2;
        N3=n3*0.1;
        N4=n4*0.4;
        To=N1+N2+N3+N4;
        alert("El promedio es de "+T);
        opc3=parseInt(prompt("Fin del algoritmo, desea repetirlo, presione 1 para continuar"))
        break;//Break punto 3 
    case 4:
        alert("CALCULAR MEDIDAS SEGÚN EL VALOR DE LOS PIES");
        
        Pi=parseInt(prompt("Por favor digite el valor en pies"));
        Pul=Pi*12;
        Y=Pi/3;
        Cm=Pul*2.54;
        M=Cm/100;
        alert('Los resultados son los siguientes:  '+Pul+' Pulgadas '+Y+' Yardas '+Cm+' Centimetros y  '+M+' Metros');
        
        break;//Break punto 4
    case 5:
        alert("CALCULAR LA NOMINA");
        SB=parseInt(prompt("Anote su salario Basico."));
        HED=parseInt(prompt("Indique el numero de horas extras diurnas trabajadas"));
        HEN=parseInt(prompt("Indique el numero de horas extras nocturnas trabajadas"));
        HEF=parseInt(prompt("Indique el numero de horas extras festivas trabajadas"));
        HEDD=parseInt(prompt("Indique el numero de horas extras diurnas dominicales trabajadas"));
        DNT=parseInt(prompt("Indique el numero de dias que no fue a trabajar"));
        SD=SB/30;
        SH=SD/8;
        HHED=SH*0.25+SH;
        HHEN=SH*0.35+SH;
        HHEF=SH*0.75+SH;
        HHEDD=SH+SH
        HED=HHEDD*HED;
        HEN=HHEN*HEN;
        HEF=HHEF*HEF;
        HEDD=HHEDD*HEDD;
        THE=HED+HEN+HEF+HEDD;
        TDNT=SD*DNT;
        DESC=SB-TDNT
        TB=DESC+THE;
        TSyP=TB*0.08
        TF=TB-TSyP
        alert('Su salario basico es de: $'+DESC+', debido a que usted fallo '+DNT+'dias, el total de ingresos por horas extras es de $'+THE+',por salud se le descuenta 4% y por pension 4% dando un descuento de: $'+TSyP+' ,dando un salario total de: $'+TF+' pesos')

    break;//Break punto 5
    default:("Verifique que haya escrito bien el numero");
    
    
} 

default:("Verifique que haya escrito bien el numero");

    break;//cierre del case de secuenciales

case 2:
    
    alert("!!Bienvenido al menu de if simple por favor indique el ejercicio que desea!!");
    opc2=parseInt(prompt("1. PARQUEADERO\n2. DESCUENTO EN DOCENAS\n3. CALCULAR PAGO DE UN EMPLEADO"));
    switch(opc2){
        case 1:
            alert("PARQUEADERO");
            
            H=parseInt(prompt("Indique el tiempo que va a estar en horas"));
            M=parseInt(prompt("Ahora indiquela en minutos"));
            if (M>=1){
                Th=H+1;
                T=Th*1500;
                alert("El coste por el estacionamiento es de: $"+T)
            }
            else{
                T=H*1500;
                alert("El coste por el estacionamiento es de: $"+T);

            }
        break;//break parqueadero
    
        case 2:
            alert("DESCUENTO EN DOCENAS");
            
            D=parseInt(prompt("Por favor escriba el numero de docenas que desea comprar"));
            P=parseInt(prompt("Precio de venta del producto"))
            if (D>=3){
                P1=P*15;
                Pt=P1/100;
                Pt=Pt*D;
                Tb=D*P;
                Ob=D/3;
                Tf=Tb-Pt;
                Ob=Math.round(Ob);
                alert('El precio total del producto es de $'+Tb+'  solo por hoy su descuento fue de  $'+Pt+'  por lo tanto su pago es de, $'+Tf+' y en agradecimiento le obsequiamos '+Ob+' producto(s) del mismo articulo.')
            }
            else {
                D1=P*10;
                Dt=D1/100;
                Dt=Dt*D;
                Tb=D*P;
                Tf=Tb-Dt;
                alert('El precio total del producto es de $'+Tb+'  solo por hoy su descuento fue de  $'+Dt+'  por lo tanto su pago es de, $'+Tf)


            }
        break;//Break descuento
        case 3:
            alert("CALCULAR PAGO DE UN EMPLEADO");
            
            N=prompt("Digite su nombre");
            Ha=parseInt(prompt("Digite las horas laboradas"));
            PB=Ha*8000;
            if (PB>= 700000){
                Po2=PB*3.5;
                P2=Po2/100;
                PF=PB-P2;
                alert("El resultado bruto es de:  $"+PB+" Entonces su salario es de $"+PF+" Señor(a) "+N)
            }
            else{
                Po1=PB*8.5;
                P10=Po2/100;
                PF=PB-P2;
                alert("El resultado bruto es de:  $"+PB+" Entonces su salario es de $"+PF+" Señor(a) "+N)
            }
        break;//break pago empleado
        default:("Verifique que haya escrito bien el numero");
    }
break;//break if simple

case 3:
    
    alert("!!Bienvenido al menu de if anidado por favor indique el ejercicio que desea!!")
    alert("1. JUEGO DE PREGUNTAS\n2. PROVEEDOR DE ESTÉREOS\n3. ALQUILER DE VEHÍCULOS\n4. CONCURSO DE PERROS\n5. NOTAS DE CUATRO PERIODOS Y CURSO AL QUE PASA\n6. COLEGIATURA");
    opc2=parseInt(prompt("Digite el numero del algoritmo"));
    switch(opc2){
        case 1:
            alert("Juego de preguntas");
            alert("Si fallas la pregunta, automaticamente estas fuera, !!!CONCENTRATE!!!");
            
            R1=prompt("Primera, ¿Colon descubrió América? Si o No");
            if(R1=="no" || R1=="NO" || R1=="No"){
            alert("Fin del juego, obtuvo 0 puntos");
            }
            else if(R1!=="no" || R1!=="NO" || R1!=="No"){
            R2=prompt("Segunda, ¿La independencia de México fue en el año 1810? falso o verdadero");
            }
            else if(R2=="verdadero"|| R2=="VERDADERO"|| R2=="Verdadero"){
            alert("Fin del juego ha obtenido 1 Punto");
                }
                else if(R2!=="verdadero"|| R2!=="VERDADERO"|| R2!=="Verdadero"){
                    R3=prompt("Tercera y ultima, ¿The Doors fue un grupo de rock Americano? si o no");
                }
                else if(R3=="si"|| R3=="SI" || R3=="Si"){
                    alert("Fin del juego, solo ha obtenido 2 puntos");
            }
                    else if(R3!=="Si"){
                        alert("Felicidades ha pasado el juego con 3 puntos");
            }

        break;//JUEGO DE PREGUNTAS
    
        case 2:
            alert("PROVEEDOR DE ESTÉREOS");
            alert("Electrodomesticos al menor precio");
            
            E=parseInt(prompt("Escriba el valor del electrodomestico"));
            N=prompt("¿Es marca NOSY?");
            IVA=parseInt(prompt("Ahora escriba el valor del IVA"));
            if(E>=2000){
                if(N=="Si"){
                    IVA=IVA/100;
                    D=E*0.05;
                    E1=E*0.1;
                    R=E-D;
                    RB=R-E1;
                    RTI=E*IVA;
                    RT=RB+RTI
                    alert('Por la compra mayor de 2000, la empresa ofrece un descuento de 10%, su ahorro fue de $'+E1+' incluyendolo al ser producto NOSY se ofrece un descuento del 5%, dando un ahorro de $'+R+' siendo el pago final de '+RT+' con IVA incluido')

                }   else{
                        IVA=IVA/100;
                        E1=E*0.1;
                        RB=E-E1;
                        RTI=E*IVA;
                        RT=RB+RTI
                        alert('Por la compra mayor de 2000, la empresa ofrece un descuento de 10%, su ahorro fue de $'+E1+', entonces el pago total seria $'+RT+' con IVA incluido');
                }
            }   

            else if(E<2000){
                alert(IVA)
                alert(E)
                if(N=="Si"){
                    IVA=IVA/100;
                    D=E*0.05;
                    RB=E-D;
                    RTI=E*IVA;
                    RT=RB+RTI
                    alert("Por la compra de electrodomesticos NOSY se le ofrece un descuento del 5% fuera del IVA, por lo tanto el valor a pagar es de: $"+RT)
                }   
                else{
                    IVA=IVA/100;
                    RT=E*IVA;
                    RT=E+RT;
                    alert("En este momento no tenemos un descuento disponible, por lo tanto, el producto costaria $"+RF+" con el IVA agregado.");
                    }
            }

        break;//proveedor de estereos
        case 3:
            alert("alquiler de vehiculos");
            alert("Escoje entre algunos vehiculos, estas son las opciones BMW $ 650000\n MEGANE $ 120000\n MERCEDES $ 700000\n TWINGO $ 100000\n CHEVROLET AVEO $ 150000");
            Nom=prompt("Por favor escriba su nombre");
            V=prompt("Por favor indique el nombre del vehiculo a comprar");
            D=parseInt(prompt("Cuantos dias desea alquilarlo"));
            So=parseInt(prompt("Desea adquirir el seguro todo riesgo"));
            if(D<=2){
                switch(V){
                    case "BMW":
                        let R,Desc,Rt;
                        R=650000;
                        if(So=="Si"||So=="SI"||So=="si"){
                            Desc=R*5;
                            Desc=Desc/100;
                            Rt=R+Desc
                            alert
                            alert("Por "+D+" no hay descuento, pero se suma el seguro todo riesgo del 5% lo cual seria un total de"+Rt);
                            }
                            else{
                                alert("Por "+D+" dias no hay descuento, entonces el valor a pagar es de"+R)
                            }
                            break
                            case "MEGANE":
                                
                                R=120000;
                                if(So=="Si"||So=="SI"||So=="si"){
                                    Desc=R*5;
                                    Desc=Desc/100;
                                    Rt=R+Desc
                                    alert
                                    alert("Por "+D+" no hay descuento, pero se suma el seguro todo riesgo del 5% lo cual seria un total de"+Rt);
                                    }
                                    else{
                                        alert("Por "+D+" dias no hay descuento, entonces el valor a pagar es de"+R)
                                    }
                            break
                                    case "MERCEDES":
                                        
                                        R=700000;
                                        if(So=="Si"||So=="SI"||So=="si"){
                                            Desc=R*5;
                                            Desc=Desc/100;
                                            Rt=R+Desc
                                            alert
                                            alert("Por "+D+" no hay descuento, pero se suma el seguro todo riesgo del 5% lo cual seria un total de"+Rt);
                                            }
                                            else{
                                                alert("Por "+D+" dias no hay descuento, entonces el valor a pagar es de"+R)
                                            }
                            break
                                            case "TWINGO":
                                                
                                                R=100000;
                                                if(So=="Si"||So=="SI"||So=="si"){
                                                    Desc=R*5;
                                                    Desc=Desc/100;
                                                    Rt=R+Desc
                                                    alert
                                                    alert("Por "+D+" no hay descuento, pero se suma el seguro todo riesgo del 5% lo cual seria un total de"+Rt);
                                                    }
                                                    else{
                                                        alert("Por "+D+" dias no hay descuento, entonces el valor a pagar es de"+R)
                                                    }
                                                    break
                                                    case "CHEVROLET AVEO":
                                                        
                                                        R=150000;
                                                        if(So=="Si"||So=="SI"||So=="si"){
                                                            Desc=R*5;
                                                            Desc=Desc/100;
                                                            Rt=R+Desc
                                                            alert
                                                            alert("Por "+D+" no hay descuento, pero se suma el seguro todo riesgo del 5% lo cual seria un total de"+Rt);
                                                            }
                                                            else{
                                                                alert("Por "+D+" dias no hay descuento, entonces el valor a pagar es de"+R)
                                                            }
                                                    break
                                                    default: alert("Verifique que haya escrito bien el texto, RECUERDE QUE DEBE ESTAR EN MAYUSCULA TODO") 

                        }
                    
                }
                if(D<=5){
                    switch(V){
                        case "BMW":
                            let Des;
                            R=650000;
                            Des=R*0.1;
                            R=R-Des;
                            if(So=="Si"||So=="SI"||So=="si"){
                                Desc=R*5;
                                Desc=Desc/100;
                                Rt=R+Desc
                                alert
                                alert("Por "+D+" hay descuento del 10% y se suma el seguro todo riesgo del 5% lo cual seria un total de"+Rt);
                                }
                                else{
                                    alert("Por "+D+" dias hay descuento de 10%, entonces el valor a pagar es de"+R)
                                }
                            break
                                case "MEGANE":
                                    
                                    R=120000;
                                    Des=R*0.1;
                                    R=R-Des;
                                    if(So=="Si"||So=="SI"||So=="si"){
                                        Desc=R*5;
                                        Desc=Desc/100;
                                        Rt=R+Desc
                                        alert
                                        alert("Por "+D+" hay descuento del 10% y se suma el seguro todo riesgo del 5% lo cual seria un total de"+Rt);
                                        }
                                        else{
                                            alert("Por "+D+" dias hay descuento de 10%, entonces el valor a pagar es de"+R)
                                        }
                            break
                                        case "MERCEDES":
                                            
                                            R=700000;
                                            Des=R*0.1;
                                            R=R-Des;
                                            if(So=="Si"||So=="SI"||So=="si"){
                                                Desc=R*5;
                                                Desc=Desc/100;
                                                Rt=R+Desc
                                                alert
                                                alert("Por "+D+" hay descuento del 10% y se suma el seguro todo riesgo del 5% lo cual seria un total de"+Rt);
                                                }
                                                else{
                                                    alert("Por "+D+" dias hay descuento de 10%, entonces el valor a pagar es de"+R)
                                                }
                                        break
                                                case "TWINGO":
                                                    
                                                    R=100000;
                                                    Des=R*0.1;
                                                    R=R-Des;
                                                    if(So=="Si"||So=="SI"||So=="si"){
                                                        Desc=R*5;
                                                        Desc=Desc/100;
                                                        Rt=R+Desc
                                                        alert
                                                        alert("Por "+D+" hay descuento del 10% y se suma el seguro todo riesgo del 5% lo cual seria un total de"+Rt);
                                                        }
                                                        else{
                                                            alert("Por "+D+" dias hay descuento de 10%, entonces el valor a pagar es de"+R)
                                                        }
                                        break
                                                        case "CHEVROLET AVEO":
                                                            
                                                            R=150000;
                                                            Des=R*0.1;
                                                            R=R-Des;
                                                            if(So=="Si"||So=="SI"||So=="si"){
                                                                Desc=R*5;
                                                                Desc=Desc/100;
                                                                Rt=R+Desc
                                                                alert
                                                                alert("Por "+D+" hay descuento del 10% y se suma el seguro todo riesgo del 5% lo cual seria un total de"+Rt);
                                                                }
                                                                else{
                                                                    alert("Por "+D+" dias hay descuento de 10%, entonces el valor a pagar es de"+R)
                                                                }
                                        break
                                        default: alert("Verifique que haya escrito bien el texto, RECUERDE QUE DEBE ESTAR EN MAYUSCULA TODO")
                            }

                if(D<=10){
                    switch(V){
                        case "BMW":
                            let Des;
                            R=650000;
                            Des=R*0.15;
                            R=R-Des;
                            if(So=="Si"||So=="SI"||So=="si"){
                                Desc=R*5;
                                Desc=Desc/100;
                                Rt=R+Desc
                                alert
                                alert("Por "+D+" hay descuento del 15% y se suma el seguro todo riesgo del 5% lo cual seria un total de"+Rt);
                                }
                                else{
                                    alert("Por "+D+" dias hay descuento de 15%, entonces el valor a pagar es de"+R)
                                }
                            break
                                case "MEGANE":
                                    
                                    R=120000;
                                    Des=R*0.15;
                                    R=R-Des;
                                    if(So=="Si"||So=="SI"||So=="si"){
                                        Desc=R*5;
                                        Desc=Desc/100;
                                        Rt=R+Desc
                                        alert
                                        alert("Por "+D+" hay descuento del 15% y se suma el seguro todo riesgo del 5% lo cual seria un total de"+Rt);
                                        }
                                        else{
                                            alert("Por "+D+" dias no hay descuento, entonces el valor a pagar es de"+R)
                                        }
                            break
                                        case "MERCEDES":
                                            
                                            R=700000;
                                            Des=R*0.15;
                                            R=R-Des;
                                            if(So=="Si"||So=="SI"||So=="si"){
                                                Desc=R*5;
                                                Desc=Desc/100;
                                                Rt=R+Desc
                                                alert
                                                alert("Por "+D+" no hay descuento, pero se suma el seguro todo riesgo del 5% lo cual seria un total de"+Rt);
                                                }
                                                else{
                                                    alert("Por "+D+" dias no hay descuento, entonces el valor a pagar es de"+R)
                                                }
                                        break
                                                case "TWINGO":
                                                    
                                                    R=100000;
                                                    Des=R*0.15;
                                                    R=R-Des;
                                                    if(So=="Si"||So=="SI"||So=="si"){
                                                        Desc=R*5;
                                                        Desc=Desc/100;
                                                        Rt=R+Desc
                                                        alert
                                                        alert("Por "+D+" no hay descuento, pero se suma el seguro todo riesgo del 5% lo cual seria un total de"+Rt);
                                                        }
                                                        else{
                                                            alert("Por "+D+" dias no hay descuento, entonces el valor a pagar es de"+R)
                                                        }
                                        break
                                                        case "CHEVROLET AVEO":
                                                            
                                                            R=150000;
                                                            Des=R*0.15;
                                                            R=R-Des;
                                                            if(So=="Si"||So=="SI"||So=="si"){
                                                                Desc=R*5;
                                                                Desc=Desc/100;
                                                                Rt=R+Desc
                                                                alert
                                                                alert("Por "+D+" no hay descuento, pero se suma el seguro todo riesgo del 5% lo cual seria un total de"+Rt);
                                                                }
                                                                else{
                                                                    alert("Por "+D+" dias no hay descuento, entonces el valor a pagar es de"+R)
                                                                }
                                        break
                                        default: alert("Verifique que haya escrito bien el texto, RECUERDE QUE DEBE ESTAR EN MAYUSCULA TODO")
                            }
                        
                    }
                    if(D>10){
                        switch(V){
                            case "BMW":
                                
                                R=650000;
                                Des=R*0.2;
                                R=R-Des;
                                if(So=="Si"||So=="SI"||So=="si"){
                                    Desc=R*5;
                                    Desc=Desc/100;
                                    Rt=R+Desc
                                    alert
                                    alert("Por "+D+" no hay descuento, pero se suma el seguro todo riesgo del 5% lo cual seria un total de"+Rt);
                                    }
                                    else{
                                        alert("Por "+D+" dias no hay descuento, entonces el valor a pagar es de"+R)
                                    }
                            break
                                    case "MEGANE":
                                       
                                        R=120000;
                                        Des=R*0.2;
                                        R=R-Des;
                                        if(So=="Si"||So=="SI"||So=="si"){
                                            Desc=R*5;
                                            Desc=Desc/100;
                                            Rt=R+Desc
                                            alert
                                            alert("Por "+D+" no hay descuento, pero se suma el seguro todo riesgo del 5% lo cual seria un total de"+Rt);
                                            }
                                            else{
                                                alert("Por "+D+" dias no hay descuento, entonces el valor a pagar es de"+R)
                                            }
                            break
                                            case "MERCEDES":
                                                
                                                R=700000;
                                                Des=R*0.2;
                                                R=R-Des;
                                                if(So=="Si"||So=="SI"||So=="si"){
                                                    Desc=R*5;
                                                    Desc=Desc/100;
                                                    Rt=R+Desc
                                                    alert
                                                    alert("Por "+D+" no hay descuento, pero se suma el seguro todo riesgo del 5% lo cual seria un total de"+Rt);
                                                    }
                                                    else{
                                                        alert("Por "+D+" dias no hay descuento, entonces el valor a pagar es de"+R)
                                                    }
                                                break
                                                    case "TWINGO":
                                                        
                                                        R=100000;
                                                        Des=R*0.2;
                                                        R=R-Des;
                                                        if(So=="Si"||So=="SI"||So=="si"){
                                                            Desc=R*5;
                                                            Desc=Desc/100;
                                                            Rt=R+Desc
                                                            alert
                                                            alert("Por "+D+" no hay descuento, pero se suma el seguro todo riesgo del 5% lo cual seria un total de"+Rt);
                                                            }
                                                            else{
                                                                alert("Por "+D+" dias no hay descuento, entonces el valor a pagar es de"+R)
                                                            }
                                                        break
                                                            case "CHEVROLET AVEO":
                                                                
                                                                R=150000;
                                                                Des=R*0.2;
                                                                R=R-Des;
                                                                if(So=="Si"||So=="SI"||So=="si"){
                                                                    Desc=R*5;
                                                                    Desc=Desc/100;
                                                                    Rt=R+Desc
                                                                    alert
                                                                    alert("Por "+D+" no hay descuento, pero se suma el seguro todo riesgo del 5% lo cual seria un total de"+Rt);
                                                                    }
                                                                    else{
                                                                        alert("Por "+D+" dias no hay descuento, entonces el valor a pagar es de"+R)
                                                                    }
                                                                    break
                                                                    default: alert("Verifique que haya escrito bien el texto, RECUERDE QUE DEBE ESTAR EN MAYUSCULA TODO")
                                }}}
        break;//Alquiler de vehiculos
        case 4:
            alert("concurso nacional de perros");
            let P1,P2,P3,V2,V3;
            alert("Los siguientes perros estan en concurso: \nPitbull \nBuly \nRottwhiller \nLabrador retriever \nGolden retriever \nDoberman \nDogo Argentino");
            P1=prompt("Escriba el nombre del primer puesto");
            P2=prompt("Escriba el nombre del segundo puesto");
            P3=prompt("Escriba el nombre del tercer puesto");
            V2=800000;
            V3=200000;
            switch(P1){
                case "Pitbull":
                    let V;
                V=6000000*2
                alert("El "+P1+" gana "+V)
                break
                case "Buly":
                
                V=6500000*2
                alert("El "+P1+" gana "+V)
                break
                case "Rottwhiller":
                    
                V=4000000*2
                alert("El "+P1+" gana "+V)
                break
                case "Labrador retriever":
                   
                V=3500000*2
                alert("El "+P1+" gana "+V)
                break
                case "Golden retriever":
                    ;
                V=3500000*2
                alert("El "+P1+" gana "+V)
                break
                case "Doberman":
                    
                V=5000000*2
                alert("El "+P1+" gana "+V)
                break
                case "Dogo argentino":
                    
                V=5500000*2
                alert("El "+P1+" gana "+V)
                break
            }
                    switch(P2){
                        case "Pitbull":
                            
                        V=6000000+V2;
                        alert("El "+P2+" gana "+V)
                        break;
                        case "Buly":
                            
                        V=6500000+V2;
                        alert("El "+P2+" gana "+V)
                        break;
                        case "Rottwhiller":
                            
                        V=4000000+V2
                        alert("El "+P2+" gana "+V)
                        break;
                        case "Labrador retriever":
                            
                        V=3500000+V2
                        alert("El "+P2+" gana "+V)
                        break;
                        case "Golden retriever":
                            
                        V=3500000+V2;
                        alert("El "+P2+" gana "+V)
                        break;
                        case "Doberman":
                           
                        V=5000000+V2;
                        alert("El "+P2+" gana "+V)
                        break;
                        case "Dogo argentino":
                            
                        V=5500000+V2;
                        alert("El "+P2+" gana "+V)
                        break
                    }
                    switch(P3){
                        case "Pitbull":
                            
                        V=6000000+V3;
                        alert("El "+P3+" gana "+V)
                        break;
                        case "Buly":
                            
                        V=6500000+V3;
                        alert("El "+P3+" gana "+V)
                        break;
                        case "Rottwhiller":
                            
                        V=4000000+V3;
                        alert("El "+P3+" gana "+V)
                        break;
                        case "Labrador retriever":
                            
                        V=3500000+V3;
                        alert("El "+P3+" gana "+V)
                        break;
                        case "Golden retriever":
                            
                        V=3500000+V3;
                        alert("El "+P3+" gana "+V)
                        break;
                        case "Doberman": 
                            
                        V=5000000+V3;
                        alert("El "+P3+" gana "+V)
                        break;
                        case "Dogo argentino":
                            
                        V=5500000+V3;
                        alert("El "+P3+" gana "+V)
                        break
                    }
        break;//break concurso de perros
        case 5:
            alert("Notas")
        N1=parseInt(prompt("Digite la nota 1"));
        N2=parseInt(prompt("Digite la nota 2"));
        N3=parseInt(prompt("Digite la nota 3"));
        N4=parseInt(prompt("Digite la nota 4"));
        NP=N1+N2+N3+N4;
        N=NP/4;
        G=parseInt(prompt("Indique el curso en el que esta actualmente"));
        if(N<=1){
            alert("No ha sido promovido y sigue en el curso "+G+" Su desempeño fue D");
        }
            else if(N<=2.9){
                alert("No ha sido promovido y sigue en el curso "+G+" Su desempeño fue I");
            }
                else if(N<=3.4){
                    alert("No ha sido promovido y sigue en el curso "+G+" Su desempeño fue A");
                }
                    else if(N<=3.8){
                        switch(G){
                            case 0:
                                alert("Felicidades ha sido promovido a primero y su  desempeño fue A");
                            break
                            case 1:
                                alert("Felicidades ha sido promovido a segundo y su  desempeño fue A");
                            break
                            case 2:
                                alert("Felicidades ha sido promovido a tercero y su  desempeño fue A");
                            break
                            case 3:
                                alert("Felicidades ha sido promovido a cuarto y su  desempeño fue A");
                            break
                            case 4:
                                alert("Felicidades ha sido promovido a quinto y su  desempeño fue A");
                            break
                            case 5:
                                alert("Felicidades ha sido promovido a sexto y su  desempeño fue A");
                            break
                            case 6:
                                alert("Felicidades ha sido promovido a septimo y su  desempeño fue A");
                            break
                            case 7:
                                alert("Felicidades ha sido promovido a octavo y su  desempeño fue A");
                            break
                            case 8:
                                alert("Felicidades ha sido promovido a noveno y su  desempeño fue A");
                            break
                            case 9:
                                alert("Felicidades ha sido promovido a decimo y su  desempeño fue A");
                            break
                            case 10:
                                alert("Felicidades ha sido promovido a once y su  desempeño fue A");
                            break
                            case 11:
                                alert("Felicidades, se puede graduar pues su  desempeño fue A");
                            break
                        }
                    }
                    else if(N<=4.6){
                        switch(G){
                            case 0:
                                alert("Felicidades ha sido promovido a primero y su  desempeño fue S");
                            break
                            case 1:
                                alert("Felicidades ha sido promovido a segundo y su  desempeño fue S");
                            break
                            case 2:
                                alert("Felicidades ha sido promovido a tercero y su  desempeño fue S");
                            break
                            case 3:
                                alert("Felicidades ha sido promovido a cuarto y su  desempeño fue S");
                            break
                            case 4:
                                alert("Felicidades ha sido promovido a quinto y su  desempeño fue S");
                            break
                            case 5:
                                alert("Felicidades ha sido promovido a sexto y su  desempeño fue S");
                            break
                            case 6:
                                alert("Felicidades ha sido promovido a septimo y su  desempeño fue S");
                            break
                            case 7:
                                alert("Felicidades ha sido promovido a octavo y su  desempeño fue S");
                            break
                            case 8:
                                alert("Felicidades ha sido promovido a noveno y su  desempeño fue S");
                            break
                            case 9:
                                alert("Felicidades ha sido promovido a decimo y su  desempeño fue S");
                            break
                            case 10:
                                alert("Felicidades ha sido promovido a once y su  desempeño fue S");
                            break
                            case 11:
                                alert("Felicidades, se puede graduar pues su  desempeño fue S");
                            break
                        }

                    }
                            else if(N<=5){
                                switch(G){
                                    case 0:
                                        alert("Felicidades ha sido promovido a primero y su  desempeño fue E");
                                    break
                                    case 1:
                                        alert("Felicidades ha sido promovido a segundo y su  desempeño fue E");
                                    break
                                    case 2:
                                        alert("Felicidades ha sido promovido a tercero y su  desempeño fue E");
                                    break
                                    case 3:
                                        alert("Felicidades ha sido promovido a cuarto y su  desempeño fue E");
                                    break
                                    case 4:
                                        alert("Felicidades ha sido promovido a quinto y su  desempeño fue E");
                                    break
                                    case 5:
                                        alert("Felicidades ha sido promovido a sexto y su  desempeño fue E");
                                    break
                                    case 6:
                                        alert("Felicidades ha sido promovido a septimo y su  desempeño fue E");
                                    break
                                    case 7:
                                        alert("Felicidades ha sido promovido a octavo y su  desempeño fue E");
                                    break
                                    case 8:
                                        alert("Felicidades ha sido promovido a noveno y su  desempeño fue E");
                                    break
                                    case 9:
                                        alert("Felicidades ha sido promovido a decimo y su  desempeño fue E");
                                    break
                                    case 10:
                                        alert("Felicidades ha sido promovido a once y su  desempeño fue E");
                                    break
                                    case 11:
                                        alert("Felicidades, se puede graduar pues su  desempeño fue E");
                                    break
                                }

                            }
        break;//Break promedio
        case 6:
            alert("Colegiatura");

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
        break;//Colegiatura
        default:("Verifique que haya escrito bien el numero");
    }
break;//break if anidado
case 4:
    alert("Bienvenido al menu de ciclos WHILE");
    alert("Indique la opcion que desea");
    opc2=parseInt(prompt("1. COLEGIO LOS ROBLES\n2. NUMERO MAYOR Y NUMERO MENOR\n3. TRIANGULO DE ASTERISCOS\n4. EMPRESA QUE VENDE HIELO SECO Y HOJAS\n5. ALGORITMO QUE CALCULE UNA TABLA N DE MULTIPLICAR QUE INICIA EL MULTIPLICANDO CON UN VALOR X HASTA UN VALOR Y "));
    switch(opc2){
    case 1:
        let Z,X=2035,Ra=0;
        alert("Lectura de promedios");
        Z=parseInt(prompt("Por favor indique el año actual"))
        while(Z<=X){
            var Pt,Ca,Rb;
            Pt=750;
            Ca=Pt*0.12;
            Rb=Pt+Ca;
            Ra=Ra+Rb
            Z=Z+1;
            alert('El crecimiento en el año '+Z+' es de '+Ra);
        }
        alert('Su promedio total es de '+Ra+' estudiantes.');
        break;//break colegio los robles
    case 2:
        let N,Ha,Za,N1,H;
        alert('Calcule el mayor y el menor de este conjunto de numeros');
        N=parseInt(prompt("Por favor escriba el numero de digitos que va a escribir"));
        Ha=parseInt(prompt("Por favor anote el numero 1"));
        N=N-1
        Za=1
        N1=0
        H=0
            while(Za<=N){
                Za=Za+1;
                N1=parseInt(prompt("Por favor escriba el numero "+ Z))
                    if(N1>=Ha){
                        Ha=N1
                    }
                        else{
                            N1=N1
                        }
            
            }
            alert('El mayor es '+H);
            Ha=parseInt(prompt('Por favor anote el numero 1, AHORA CALCULAREMOS EL MENOR.'));
            N=N-1;
            Za=1;
            N1=0;
                while(Za<=N){
                    Za=Za+1;
                    N1=parseInt(prompt("Por favor escriba el numero "+ Z));
                        if(N1<=Ha){
                            Ha=N1
                        }
                            else{
                                N1=N1
                            }
                }
                alert('El menor es ',H);
                break;//break mayor y menor
        case 3:
            let numPisos;
            alert("TRIANGULO DE ASTERISCOS")
            numPisos=parseInt(prompt("Digite el numero de asteriscos en su base"));
            function pyramid(numPisos) {
            for (let i = 0; i < numPisos; i++) {
                let piso = '';
                for (let j = 0; j < i + 1; j++) {
                piso = piso + '*';
                }
                console.log(piso)
            }
            }

            pyramid(numPisos);
            break;//Break triangulo de asteriscos
        case 4:
        alert("EMPRESA QUE VENDE HIELO SECO Y HOJAS");
        $: X1=1,NC,Na,V,T,No,t1=0.05,t2=0.08,t3=0.12,t4=0.15,P,To;
NC=parseInt(prompt("Escriba el numero de clientes que va agregar en el algoritmo"));
while(X1<=NC){
    Na=prompt("Por favor indique el nombre del cliente "+X);
    V=parseInt(prompt("Indique el valor de precio de venta de las hojas sin descuento"));
    T=parseInt(prompt('Por favor escriba el tipo de cliente (tipo 1, 2, 3 o 4) que es el cliente ',X));
    No=parseInt(prompt("Por favor digite cuantas hojas desea comprar  el cliente "+X1));
    if(T=1){
        V=V*No;
        P=V*t1;
        To=V-P;
        alert('El resultado es el siguiente: \nSeñor(a): '+Na+" usted compra "+No+" hoja(s), el valor bruto seria de "+V+" pero al ser un cliente tipo "+T+" Se le ofrece un descuento del 5%, por lo tanto el valor a pagar seria de $"+To)
    }
        else if(T=2){
            V=V*No;
            P=V*t2;
            To=V-P;
            alert('El resultado es el siguiente: \nSeñor(a): '+Na+" usted compra "+No+" hoja(s), el valor bruto seria de "+V+" pero al ser un cliente tipo "+T+" Se le ofrece un descuento del 8%, por lo tanto el valor a pagar seria de $"+To)
        }
            else if(T=3){
                V=V*No;
                P=V*t3;
                To=V-P;
                alert('El resultado es el siguiente: \nSeñor(a): '+Na+" usted compra "+No+" hoja(s), el valor bruto seria de "+V+" pero al ser un cliente tipo "+T+" Se le ofrece un descuento del 12%, por lo tanto el valor a pagar seria de $"+To)
            }
                if(T=4){
                    V=V*No;
                    P=V*t4;
                    To=V-P;
                    alert('El resultado es el siguiente: \nSeñor(a): '+Na+" usted compra "+No+" hoja(s), el valor bruto seria de "+V+" pero al ser un cliente tipo "+T+" Se le ofrece un descuento del 15%, por lo tanto el valor a pagar seria de $"+To)
                }
        X1++
}
        break;//Break hielo seco
    case 5:
        let X2;
        alert("ALGORITMO QUE CALCULE UNA TABLA N DE MULTIPLICAR QUE INICIA EL MULTIPLICANDO CON UN VALOR X HASTA UN VALOR Y ");
        X2=parseInt(prompt("INDIQUE LA TABLA DE MULTIPLICAR QUE DESEA UTILIZAR"));
        Y=parseInt(prompt("AHORA INDIQUE HASTA QUE FACTOR DESEA VER"));
        Zi=parseInt(prompt("Desde que factor desa multiplicar"));
        while(Zi<=Y){
            W=Zi*X2;
            console.log("El resultado es"+X2+" x "+Zi+" = "+W)
            Zi++
        }
    break;

    break;//break ciclo while
    }
case 5:
    alert("Bienvenido al menu de ciclos FOR");
    alert("Indique la opcion que desea")
    opc2=parseInt(prompt("1. ALGORITMO QUE IMPRIME LA SUMA DE 1 A 160 DE LOS NÚMEROS PARES\n2. ALGORITMO QUE LEA 10 NÚMEROS Y QUE CALCULE E IMPRIMA EL PROMEDIO DE DICHOS NÚMEROS.\n3. ALGORITMO QUE SOLICITE LA CANTIDAD DE NÚMERO QUE SE VAN A PROCESAR, LUEGO QUE LEA LOS NÚMEROS Y CALCULE E IMPRIMA EL PROMEDIO DE DICHOS NÚMEROS.\n4. SUELDO MAYOR DE VENDEDOR\n5. ALGORITMO QUE CALCULE E IMPRIMA LAS TABLAS DE MULTIPLICAR DESDE UNO HASTA UN NUMERO DADO POR EL USUARIO, EL MULTIPLICADOR DESDE UNO HASTA UN NUMERO DADO POR EL USUARIO.\n6. ELABORE UN ALGORITMO QUE CALCULE E IMPRIMA CUÁNTOS Y CUÁLES SON LOS NÚMEROS PRIMOS HAY DENTRO DE UN RANGO DADO POR EL USUARIO. "))
    //suma hasta 160
    switch(opc2){
case 1:
    let X=0
for(Y=2;Y<=160;Y++){
    X=X+Y
    Y++
}
alert("El resultado es "+X);
break;//Punto 2
//segundo punto
case 2:
alert('LECTURA DE PROMEDIOS');
let promedio,Ye=0,To
for(X=1;X<=10;X++){
    promedio=parseFloat(prompt("POR FAVOR DIGITE EL PROMEDIO "+X));
    Ye=Ye+promedio
    To=Ye/10;
}
alert('Su promedio total es de '+To)
break;//Punto 2
//tercer punto
case 3:
alert('LECTURA DE PROMEDIOS');
let promedio2,Yes=0,Tos,NT
NT=parseInt(prompt("Escriba la cantidad de numeros a promediar"));
for(X=1;X<=NT;X++){
    promedio2=parseFloat(prompt("POR FAVOR DIGITE EL PROMEDIO "+X));
    Yes=Yes+promedio2
    Tos=Yes/NT;
}
alert('Su promedio total es de '+Tos)
break;//Punto 3
case 4:
let Te,Va,Vb,A=480000,B=600000,Val1,Va2,SM,Top,Tv,vv,To2,N=10,T1,To1,Va1,Vb2;
alert('Calcule quien obtuvo mayor ganancias');
alert("Hubieron dos vehiculos a la venta, Un vehiculo A de valor 12.000.000 y un vehiculo B de 15.000.000")
Te=prompt("Por favor escriba el nombre del trabajador 1");
Va=parseInt(prompt("Escriba el numero de vehiculos A vendidos"));
Vb=parseInt(prompt("Escriba el numero de vehiculos B vendidos"));
Val1=Va*A;
Vb1=Vb*B;
SM=1000000;
Top=SM+Val1+Vb1;
Tv=Va+Vb;
To2=vv+RTCSctpTransport;
    for(X=2;X<=N;X++){
        T1=prompt("Por favor escriba el nombre del trabajador 1");
        Va=parseInt(prompt("Escriba el numero de vehiculos A vendidos"));
        Vb=parseInt(prompt("Escriba el numero de vehiculos B vendidos"));
        Va2=Va*A;
        Vb2=Vb*B;
        SM=1000000;
        Top=SM+Va1+Vb1;
        Tv=Va+Vb;
        To1=vv+Top;
            if(To1>=To2){
                To2=To1;
                T=T1
                Va=Va2
                Vb=Vb2
            }
            else{
                Vb2=0
                Vb2=0
            }
            To2=To2;
            T=T
            Va=Va
            Vb=Vb
    }
    alert("El vendedor con mayor ganancia fue "+T+" devengando un salario de "+To2+" vendiendo "+Va+" vehiculos A y "+Vb+" Vehiculos B")
    break;//Punto 4
    //punto 5
    case 5:
    var T,Xe,Y,W;
    T=parseInt(prompt('Por favor escriba hasta que tabla usted desa visualizar'));
    Xe=parseInt(prompt('¿Hasta que factor las desea ver?'));
    for(Y=1;Y<=T;Y++){
    for(Z=1;Z<=Xe;Z++){
        W=Y*Z;
        console.log(Y+' X '+Z+' = '+W)
    }
    }
    break;//Punto 5
    //Punto 6
    case 6:
    
    alert("El rango inicia desde 1 que no es numero primo");
    F=parseInt(prompt("Indique hasta que rango desea conocer"));
    NP=0
    for(Xi=2;Xi<=F;Xi++){
        NP=NP
        if(Xi%2!==0 && Xi%3!==0 || Xi==2 ||Xi==3){
            NP=NP+1
            alert(Xi+" es un numero primo");
        }
    }
    alert("En el rango indicado hay "+NP+" numeros primos");
    break;//breakPunto6
}

break;//break ciclo for
case 6:
    alert("Bienvenido al menu de CASE-SWITCH")
    alert("Indique la opcion que desea");
    opc2=parseInt(prompt("1. Autos\n 2.Concurso de perros\n 3.Promedio de notas"));
    switch(opc2){
    case 1:
        alert("alquiler de vehiculos");
        alert("Escoje entre algunos vehiculos, estas son las opciones BMW $ 650000\n MEGANE $ 120000\n MERCEDES $ 700000\n TWINGO $ 100000\n CHEVROLET AVEO $ 150000");
        let Vi,D,So,Nom,R,Desc,Rt,Des;
        Nom=prompt("Por favor escriba su nombre");
        Vi=prompt("Por favor indique el nombre del vehiculo a comprar");
        D=parseInt(prompt("Cuantos dias desea alquilarlo"));
        So=parseInt(prompt("Desea adquirir el seguro todo riesgo"));
        if(D<=2){
            switch(Vi){
                case "BMW":
                    R=650000;
                    if(So=="Si"||So=="SI"||So=="si"){
                        Desc=R*5;
                        Desc=Desc/100;
                        Rt=R+Desc
                        alert
                        alert("Por "+D+" no hay descuento, pero se suma el seguro todo riesgo del 5% lo cual seria un total de"+Rt);
                        }
                        else{
                            alert("Por "+D+" dias no hay descuento, entonces el valor a pagar es de"+R)
                        }
                        break
                        case "MEGANE":
                            
                            R=120000;
                            if(So=="Si"||So=="SI"||So=="si"){
                                Desc=R*5;
                                Desc=Desc/100;
                                Rt=R+Desc
                                alert
                                alert("Por "+D+" no hay descuento, pero se suma el seguro todo riesgo del 5% lo cual seria un total de"+Rt);
                                }
                                else{
                                    alert("Por "+D+" dias no hay descuento, entonces el valor a pagar es de"+R)
                                }
                        break
                                case "MERCEDES":
                                    
                                    R=700000;
                                    if(So=="Si"||So=="SI"||So=="si"){
                                        Desc=R*5;
                                        Desc=Desc/100;
                                        Rt=R+Desc
                                        alert
                                        alert("Por "+D+" no hay descuento, pero se suma el seguro todo riesgo del 5% lo cual seria un total de"+Rt);
                                        }
                                        else{
                                            alert("Por "+D+" dias no hay descuento, entonces el valor a pagar es de"+R)
                                        }
                        break
                                        case "TWINGO":
                                            
                                            R=100000;
                                            if(So=="Si"||So=="SI"||So=="si"){
                                                Desc=R*5;
                                                Desc=Desc/100;
                                                Rt=R+Desc
                                                alert
                                                alert("Por "+D+" no hay descuento, pero se suma el seguro todo riesgo del 5% lo cual seria un total de"+Rt);
                                                }
                                                else{
                                                    alert("Por "+D+" dias no hay descuento, entonces el valor a pagar es de"+R)
                                                }
                                                break
                                                case "CHEVROLET AVEO":
                                                    
                                                    R=150000;
                                                    if(So=="Si"||So=="SI"||So=="si"){
                                                        Desc=R*5;
                                                        Desc=Desc/100;
                                                        Rt=R+Desc
                                                        alert
                                                        alert("Por "+D+" no hay descuento, pero se suma el seguro todo riesgo del 5% lo cual seria un total de"+Rt);
                                                        }
                                                        else{
                                                            alert("Por "+D+" dias no hay descuento, entonces el valor a pagar es de"+R)
                                                        }
                                                break
                                                default: alert("Verifique que haya escrito bien el texto, RECUERDE QUE DEBE ESTAR EN MAYUSCULA TODO") 

                    }
                
            }
            if(D<=5){
                switch(Vi){
                    case "BMW":
                        
                        R=650000;
                        Des=R*0.1;
                        R=R-Des;
                        if(So=="Si"||So=="SI"||So=="si"){
                            Desc=R*5;
                            Desc=Desc/100;
                            Rt=R+Desc
                            alert
                            alert("Por "+D+" hay descuento del 10% y se suma el seguro todo riesgo del 5% lo cual seria un total de"+Rt);
                            }
                            else{
                                alert("Por "+D+" dias hay descuento de 10%, entonces el valor a pagar es de"+R)
                            }
                        break
                            case "MEGANE":
                                
                                R=120000;
                                Des=R*0.1;
                                R=R-Des;
                                if(So=="Si"||So=="SI"||So=="si"){
                                    Desc=R*5;
                                    Desc=Desc/100;
                                    Rt=R+Desc
                                    alert
                                    alert("Por "+D+" hay descuento del 10% y se suma el seguro todo riesgo del 5% lo cual seria un total de"+Rt);
                                    }
                                    else{
                                        alert("Por "+D+" dias hay descuento de 10%, entonces el valor a pagar es de"+R)
                                    }
                        break
                                    case "MERCEDES":
                                        
                                        R=700000;
                                        Des=R*0.1;
                                        R=R-Des;
                                        if(So=="Si"||So=="SI"||So=="si"){
                                            Desc=R*5;
                                            Desc=Desc/100;
                                            Rt=R+Desc
                                            alert
                                            alert("Por "+D+" hay descuento del 10% y se suma el seguro todo riesgo del 5% lo cual seria un total de"+Rt);
                                            }
                                            else{
                                                alert("Por "+D+" dias hay descuento de 10%, entonces el valor a pagar es de"+R)
                                            }
                                    break
                                            case "TWINGO":
                                                
                                                R=100000;
                                                Des=R*0.1;
                                                R=R-Des;
                                                if(So=="Si"||So=="SI"||So=="si"){
                                                    Desc=R*5;
                                                    Desc=Desc/100;
                                                    Rt=R+Desc
                                                    alert
                                                    alert("Por "+D+" hay descuento del 10% y se suma el seguro todo riesgo del 5% lo cual seria un total de"+Rt);
                                                    }
                                                    else{
                                                        alert("Por "+D+" dias hay descuento de 10%, entonces el valor a pagar es de"+R)
                                                    }
                                    break
                                                    case "CHEVROLET AVEO":
                                                        
                                                        R=150000;
                                                        Des=R*0.1;
                                                        R=R-Des;
                                                        if(So=="Si"||So=="SI"||So=="si"){
                                                            Desc=R*5;
                                                            Desc=Desc/100;
                                                            Rt=R+Desc
                                                            alert
                                                            alert("Por "+D+" hay descuento del 10% y se suma el seguro todo riesgo del 5% lo cual seria un total de"+Rt);
                                                            }
                                                            else{
                                                                alert("Por "+D+" dias hay descuento de 10%, entonces el valor a pagar es de"+R)
                                                            }
                                    break
                                    default: alert("Verifique que haya escrito bien el texto, RECUERDE QUE DEBE ESTAR EN MAYUSCULA TODO")
                        }

            if(D<=10){
                switch(Vi){
                    case "BMW":
                        
                        R=650000;
                        Des=R*0.15;
                        R=R-Des;
                        if(So=="Si"||So=="SI"||So=="si"){
                            Desc=R*5;
                            Desc=Desc/100;
                            Rt=R+Desc
                            alert
                            alert("Por "+D+" hay descuento del 15% y se suma el seguro todo riesgo del 5% lo cual seria un total de"+Rt);
                            }
                            else{
                                alert("Por "+D+" dias hay descuento de 15%, entonces el valor a pagar es de"+R)
                            }
                        break
                            case "MEGANE":
                                
                                R=120000;
                                Des=R*0.15;
                                R=R-Des;
                                if(So=="Si"||So=="SI"||So=="si"){
                                    Desc=R*5;
                                    Desc=Desc/100;
                                    Rt=R+Desc
                                    alert
                                    alert("Por "+D+" hay descuento del 15% y se suma el seguro todo riesgo del 5% lo cual seria un total de"+Rt);
                                    }
                                    else{
                                        alert("Por "+D+" dias no hay descuento, entonces el valor a pagar es de"+R)
                                    }
                        break
                                    case "MERCEDES":
                                        
                                        R=700000;
                                        Des=R*0.15;
                                        R=R-Des;
                                        if(So=="Si"||So=="SI"||So=="si"){
                                            Desc=R*5;
                                            Desc=Desc/100;
                                            Rt=R+Desc
                                            alert
                                            alert("Por "+D+" no hay descuento, pero se suma el seguro todo riesgo del 5% lo cual seria un total de"+Rt);
                                            }
                                            else{
                                                alert("Por "+D+" dias no hay descuento, entonces el valor a pagar es de"+R)
                                            }
                                    break
                                            case "TWINGO":
                                                
                                                R=100000;
                                                Des=R*0.15;
                                                R=R-Des;
                                                if(So=="Si"||So=="SI"||So=="si"){
                                                    Desc=R*5;
                                                    Desc=Desc/100;
                                                    Rt=R+Desc
                                                    alert
                                                    alert("Por "+D+" no hay descuento, pero se suma el seguro todo riesgo del 5% lo cual seria un total de"+Rt);
                                                    }
                                                    else{
                                                        alert("Por "+D+" dias no hay descuento, entonces el valor a pagar es de"+R)
                                                    }
                                    break
                                                    case "CHEVROLET AVEO":
                                                        
                                                        R=150000;
                                                        Des=R*0.15;
                                                        R=R-Des;
                                                        if(So=="Si"||So=="SI"||So=="si"){
                                                            Desc=R*5;
                                                            Desc=Desc/100;
                                                            Rt=R+Desc
                                                            alert
                                                            alert("Por "+D+" no hay descuento, pero se suma el seguro todo riesgo del 5% lo cual seria un total de"+Rt);
                                                            }
                                                            else{
                                                                alert("Por "+D+" dias no hay descuento, entonces el valor a pagar es de"+R)
                                                            }
                                    break
                                    default: alert("Verifique que haya escrito bien el texto, RECUERDE QUE DEBE ESTAR EN MAYUSCULA TODO")
                        }
                    
                }
                if(D>10){
                    switch(Vi){
                        case "BMW":
                            
                            R=650000;
                            Des=R*0.2;
                            R=R-Des;
                            if(So=="Si"||So=="SI"||So=="si"){
                                Desc=R*5;
                                Desc=Desc/100;
                                Rt=R+Desc
                                alert
                                alert("Por "+D+" no hay descuento, pero se suma el seguro todo riesgo del 5% lo cual seria un total de"+Rt);
                                }
                                else{
                                    alert("Por "+D+" dias no hay descuento, entonces el valor a pagar es de"+R)
                                }
                        break
                                case "MEGANE":
                                    
                                    R=120000;
                                    Des=R*0.2;
                                    R=R-Des;
                                    if(So=="Si"||So=="SI"||So=="si"){
                                        Desc=R*5;
                                        Desc=Desc/100;
                                        Rt=R+Desc
                                        alert
                                        alert("Por "+D+" no hay descuento, pero se suma el seguro todo riesgo del 5% lo cual seria un total de"+Rt);
                                        }
                                        else{
                                            alert("Por "+D+" dias no hay descuento, entonces el valor a pagar es de"+R)
                                        }
                        break
                                        case "MERCEDES":
                                           
                                            R=700000;
                                            Des=R*0.2;
                                            R=R-Des;
                                            if(So=="Si"||So=="SI"||So=="si"){
                                                Desc=R*5;
                                                Desc=Desc/100;
                                                Rt=R+Desc
                                                alert
                                                alert("Por "+D+" no hay descuento, pero se suma el seguro todo riesgo del 5% lo cual seria un total de"+Rt);
                                                }
                                                else{
                                                    alert("Por "+D+" dias no hay descuento, entonces el valor a pagar es de"+R)
                                                }
                                            break
                                                case "TWINGO":
                                                    
                                                    R=100000;
                                                    Des=R*0.2;
                                                    R=R-Des;
                                                    if(So=="Si"||So=="SI"||So=="si"){
                                                        Desc=R*5;
                                                        Desc=Desc/100;
                                                        Rt=R+Desc
                                                        alert
                                                        alert("Por "+D+" no hay descuento, pero se suma el seguro todo riesgo del 5% lo cual seria un total de"+Rt);
                                                        }
                                                        else{
                                                            alert("Por "+D+" dias no hay descuento, entonces el valor a pagar es de"+R)
                                                        }
                                                    break
                                                        case "CHEVROLET AVEO":
                                                            
                                                            R=150000;
                                                            Des=R*0.2;
                                                            R=R-Des;
                                                            if(So=="Si"||So=="SI"||So=="si"){
                                                                Desc=R*5;
                                                                Desc=Desc/100;
                                                                Rt=R+Desc
                                                                alert
                                                                alert("Por "+D+" no hay descuento, pero se suma el seguro todo riesgo del 5% lo cual seria un total de"+Rt);
                                                                }
                                                                else{
                                                                    alert("Por "+D+" dias no hay descuento, entonces el valor a pagar es de"+R)
                                                                }
                                                                break
                                                                default: alert("Verifique que haya escrito bien el texto, RECUERDE QUE DEBE ESTAR EN MAYUSCULA TODO")
                            }}}
    break;//Alquiler de vehiculos
    case 2:
        alert("concurso nacional de perros");
        alert("Los siguientes perros estan en concurso: \nPitbull \nBuly \nRottwhiller \nLabrador retriever \nGolden retriever \nDoberman \nDogo Argentino");
        P1=prompt("Escriba el nombre del primer puesto");
        P2=prompt("Escriba el nombre del segundo puesto");
        P3=prompt("Escriba el nombre del tercer puesto");
        V2=800000;
        V3=200000;
        switch(P1){
            case "Pitbull":
            
            V=6000000*2
            alert("El "+P1+" gana "+V)
            break
            case "Buly":
            
            V=6500000*2
            alert("El "+P1+" gana "+V)
            break
            case "Rottwhiller":
            
            V=4000000*2
            alert("El "+P1+" gana "+V)
            break
            case "Labrador retriever":
            
            V=3500000*2
            alert("El "+P1+" gana "+V)
            break
            case "Golden retriever":
            
            V=3500000*2
            alert("El "+P1+" gana "+V)
            break
            case "Doberman":
            
            V=5000000*2
            alert("El "+P1+" gana "+V)
            break
            case "Dogo argentino":
            
            V=5500000*2
            alert("El "+P1+" gana "+V)
            break
        }
                switch(P2){
                    case "Pitbull":
                    
                    V=6000000+V2;
                    alert("El "+P2+" gana "+V)
                    break;
                    case "Buly":
                    
                    V=6500000+V2;
                    alert("El "+P2+" gana "+V)
                    break;
                    case "Rottwhiller":
                    
                    V=4000000+V2
                    alert("El "+P2+" gana "+V)
                    break;
                    case "Labrador retriever":
                    
                    V=3500000+V2
                    alert("El "+P2+" gana "+V)
                    break;
                    case "Golden retriever":
                    
                    V=3500000+V2;
                    alert("El "+P2+" gana "+V)
                    break;
                    case "Doberman":
                    
                    V=5000000+V2;
                    alert("El "+P2+" gana "+V)
                    break;
                    case "Dogo argentino":
                    
                    V=5500000+V2;
                    alert("El "+P2+" gana "+V)
                    break
                }
                switch(P3){
                    case "Pitbull":
                    
                    V=6000000+V3;
                    alert("El "+P3+" gana "+V)
                    break;
                    case "Buly":
                    
                    V=6500000+V3;
                    alert("El "+P3+" gana "+V)
                    break;
                    case "Rottwhiller":
                    
                    V=4000000+V3;
                    alert("El "+P3+" gana "+V)
                    break;
                    case "Labrador retriever":
                    
                    V=3500000+V3;
                    alert("El "+P3+" gana "+V)
                    break;
                    case "Golden retriever":
                
                    V=3500000+V3;
                    alert("El "+P3+" gana "+V)
                    break;
                    case "Doberman": 
                    
                    V=5000000+V3;
                    alert("El "+P3+" gana "+V)
                    break;
                    case "Dogo argentino":
                    
                    V=5500000+V3;
                    alert("El "+P3+" gana "+V)
                    break
                }
    break;//break concurso de perros
    case 3:
        alert("Notas")
    N1=parseInt(prompt("Digite la nota 1"));
    N2=parseInt(prompt("Digite la nota 2"));
    N3=parseInt(prompt("Digite la nota 3"));
    N4=parseInt(prompt("Digite la nota 4"));
    NP=N1+N2+N3+N4;
    N=NP/4;
    G=parseInt(prompt("Indique el curso en el que esta actualmente"));
    if(N<=1){
        alert("No ha sido promovido y sigue en el curso "+G+" Su desempeño fue D");
    }
        else if(N<=2.9){
            alert("No ha sido promovido y sigue en el curso "+G+" Su desempeño fue I");
        }
            else if(N<=3.4){
                alert("No ha sido promovido y sigue en el curso "+G+" Su desempeño fue A");
            }
                else if(N<=3.8){
                    switch(G){
                        case 0:
                            alert("Felicidades ha sido promovido a primero y su  desempeño fue A");
                        break
                        case 1:
                            alert("Felicidades ha sido promovido a segundo y su  desempeño fue A");
                        break
                        case 2:
                            alert("Felicidades ha sido promovido a tercero y su  desempeño fue A");
                        break
                        case 3:
                            alert("Felicidades ha sido promovido a cuarto y su  desempeño fue A");
                        break
                        case 4:
                            alert("Felicidades ha sido promovido a quinto y su  desempeño fue A");
                        break
                        case 5:
                            alert("Felicidades ha sido promovido a sexto y su  desempeño fue A");
                        break
                        case 6:
                            alert("Felicidades ha sido promovido a septimo y su  desempeño fue A");
                        break
                        case 7:
                            alert("Felicidades ha sido promovido a octavo y su  desempeño fue A");
                        break
                        case 8:
                            alert("Felicidades ha sido promovido a noveno y su  desempeño fue A");
                        break
                        case 9:
                            alert("Felicidades ha sido promovido a decimo y su  desempeño fue A");
                        break
                        case 10:
                            alert("Felicidades ha sido promovido a once y su  desempeño fue A");
                        break
                        case 11:
                            alert("Felicidades, se puede graduar pues su  desempeño fue A");
                        break
                    }
                }
                else if(N<=4.6){
                    switch(G){
                        case 0:
                            alert("Felicidades ha sido promovido a primero y su  desempeño fue S");
                        break
                        case 1:
                            alert("Felicidades ha sido promovido a segundo y su  desempeño fue S");
                        break
                        case 2:
                            alert("Felicidades ha sido promovido a tercero y su  desempeño fue S");
                        break
                        case 3:
                            alert("Felicidades ha sido promovido a cuarto y su  desempeño fue S");
                        break
                        case 4:
                            alert("Felicidades ha sido promovido a quinto y su  desempeño fue S");
                        break
                        case 5:
                            alert("Felicidades ha sido promovido a sexto y su  desempeño fue S");
                        break
                        case 6:
                            alert("Felicidades ha sido promovido a septimo y su  desempeño fue S");
                        break
                        case 7:
                            alert("Felicidades ha sido promovido a octavo y su  desempeño fue S");
                        break
                        case 8:
                            alert("Felicidades ha sido promovido a noveno y su  desempeño fue S");
                        break
                        case 9:
                            alert("Felicidades ha sido promovido a decimo y su  desempeño fue S");
                        break
                        case 10:
                            alert("Felicidades ha sido promovido a once y su  desempeño fue S");
                        break
                        case 11:
                            alert("Felicidades, se puede graduar pues su  desempeño fue S");
                        break
                    }

                }
                        else if(N<=5){
                            switch(G){
                                case 0:
                                    alert("Felicidades ha sido promovido a primero y su  desempeño fue E");
                                break
                                case 1:
                                    alert("Felicidades ha sido promovido a segundo y su  desempeño fue E");
                                break
                                case 2:
                                    alert("Felicidades ha sido promovido a tercero y su  desempeño fue E");
                                break
                                case 3:
                                    alert("Felicidades ha sido promovido a cuarto y su  desempeño fue E");
                                break
                                case 4:
                                    alert("Felicidades ha sido promovido a quinto y su  desempeño fue E");
                                break
                                case 5:
                                    alert("Felicidades ha sido promovido a sexto y su  desempeño fue E");
                                break
                                case 6:
                                    alert("Felicidades ha sido promovido a septimo y su  desempeño fue E");
                                break
                                case 7:
                                    alert("Felicidades ha sido promovido a octavo y su  desempeño fue E");
                                break
                                case 8:
                                    alert("Felicidades ha sido promovido a noveno y su  desempeño fue E");
                                break
                                case 9:
                                    alert("Felicidades ha sido promovido a decimo y su  desempeño fue E");
                                break
                                case 10:
                                    alert("Felicidades ha sido promovido a once y su  desempeño fue E");
                                break
                                case 11:
                                    alert("Felicidades, se puede graduar pues su  desempeño fue E");
                                break
                            }

                        }
}
}
opc4=parseInt(prompt("fin del algoritmo, ¿desea repetirlo? 1.si"))
}
opc3=parseInt(prompt("Desea volver al menu principal, 1.Si"))
}
