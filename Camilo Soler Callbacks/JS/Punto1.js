function mycompany(){

    var IVA, aporte,sumtotal=0;


    aporte=parseInt(prompt("Indique el coste de importe"))
    IVA=parseInt(prompt("Escriba el IVA implementado (4%,7%,16%"))
    while(aporte!==0){

        switch(IVA){
            case 4:
                if(aporte<1000){
                    var vb,desc;
                    vb=(aporte*0.04)+aporte
                    alert("Valor total aporte, sumado IVA"+vb);
                }
                    else if(aporte<10000){
                    
                    vb=(aporte*0.04)+aporte
                    vb=vb-(vb*0.05)
                    alert("Valor total aporte, sumado IVA y descuento"+vb)
                    }
                        else{
                            vb=(aporte*0.04)+aporte
                            vb=vb-(vb*0.1)
                            alert("Valor total aporte, sumado IVA y descuento"+vb)
                 
                        }
            break;
            case 7:
                if(aporte<1000){
                    vb=(aporte*0.07)+aporte
                    alert("Valor total aporte, sumado IVA"+vb);
                }
                    else if(aporte<10000){
                    vb=(aporte*0.07)+aporte
                    vb=vb-(vb*0.05)
                    alert("Valor total aporte, sumado IVA y descuento"+vb)
                    }
                        else{
                            vb=(aporte*0.07)+aporte
                            vb=vb-(vb*0.1)
                            alert("Valor total aporte, sumado IVA y descuento"+vb)
                 
                        }
            break;
            case 16:
                if(aporte<1000){
                    var vb,desc;
                    vb=(aporte*0.04)+aporte
                    alert("Valor total aporte, sumado IVA"+vb);
                }
                    else if(aporte<10000){
                    
                    vb=(aporte*0.04)+aporte
                    vb=vb-(vb*0.05)
                    alert("Valor total aporte, sumado IVA y descuento"+vb)
                    }
                        else{
                            vb=(aporte*0.04)+aporte
                            vb=vb-(vb*0.1)
                            alert("Valor total aporte, sumado IVA y descuento"+vb)
                 
                        }
            break;
            default:
                alert("El IVA introducido no es valido, el aporte no sera tomado en cuenta")
        

    }
    aporte=parseInt(prompt("Indique el coste de importe"))
    IVA=parseInt(prompt("Escriba el IVA implementado (4%,7%,16%"))
    sumtotal=sumtotal+vb;
}
    alert("El resultado por todas las importaciones ha sido un total de "+sumtotal+" con iva y descuentos incluidos")
}
function callback(){

    mycompany()

}

callback(mycompany)