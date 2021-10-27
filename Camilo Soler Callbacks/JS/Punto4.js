function supermercado(){

var nom,M,tc,com,iva=0.19,desc,I,ncom,vcom=0,vb,En=10,Fe=5,Ma=20,A1=10,A2=5,vt,np,desc1;

np=parseInt(prompt("indique el numero de personas las cual va a facturar"))

for(x=1;x<=np;x++){

nom=prompt("Indique su nombre");
M=prompt("Indique el mes de compra");
tc=parseInt(prompt("Indique el tipo de cliente que es usted (Recuerde que solo hay A1 y A2, pero solo anote 1 o 2)"));
com=parseInt(prompt("Indique el numero de productos a comprar"));

for( I=1 ; I <= com ; I++){
    ncom=parseInt(prompt("Indique el valor del producto "+I));
    vcom=ncom+vcom;
}

vb=(vcom*iva)+vcom;

switch(M){
    case "Enero":
        if(tc==1){
            desc=En+A1;
            desc1=desc/100;
            vt=vb-(vb*desc1);
            alert("Señor "+nom+"El valor de su compra equivale a un total de"+vcom+", sumado con el iva del 19%, esto da "+vb+" por ser este el mes de "+M+" y ser un cliente tipo A"+tc+" su descuento es del "+desc+"%, dando un total a pagar de $"+vt)
        }
            else{
                desc=(En+A2);
                desc1=desc/100;
                vt=vb-(vb*desc1);
                alert("Señor "+nom+"El valor de su compra equivale a un total de"+vcom+", sumado con el iva del 19%, esto da "+vb+" por ser este el mes de "+M+" y ser un cliente tipo A"+tc+" su descuento es del "+desc+"%, dando un total a pagar de $"+vt)
    
        }
    break;

    case "Febrero":
        if(tc==1){
            desc=Fe+A1;
            desc1=desc/100;
            vt=vb-(vb*desc1);
            alert("Señor "+nom+"El valor de su compra equivale a un total de"+vcom+", sumado con el iva del 19%, esto da "+vb+" por ser este el mes de "+M+" y ser un cliente tipo A"+tc+" su descuento es del "+desc+"%, dando un total a pagar de $"+vt)
        }
            else{
                desc=(Fe+A2);
                desc1=desc/100;
                vt=vb-(vb*desc1);
                alert("Señor "+nom+"El valor de su compra equivale a un total de"+vcom+", sumado con el iva del 19%, esto da "+vb+" por ser este el mes de "+M+" y ser un cliente tipo A"+tc+" su descuento es del "+desc+"%, dando un total a pagar de $"+vt)
    
        }
    break;
    
    case "Marzo":
    if(tc==1){
        desc=Ma+A1;
        desc1=desc/100;
        vt=vb-(vb*desc1);
        alert("Señor "+nom+"El valor de su compra equivale a un total de"+vcom+", sumado con el iva del 19%, esto da "+vb+" por ser este el mes de "+M+" y ser un cliente tipo A"+tc+" su descuento es del "+desc+"%, dando un total a pagar de $"+vt)
    }
        else{
            desc=Ma+A2;
            desc1=desc/100;
            vt=vb-(vb*desc1);
            alert("Señor "+nom+"El valor de su compra equivale a un total de"+vcom+", sumado con el iva del 19%, esto da "+vb+" por ser este el mes de "+M+" y ser un cliente tipo A"+tc+" su descuento es del "+desc+"%, dando un total a pagar de $"+vt)

    }
    break;

    default:
        alert("Este mes no hay descuento posible")
        if(tc==1){
            desc=A1/100;
            vt=vb-(vb*desc);
            alert("Señor "+nom+"El valor de su compra equivale a un total de"+vcom+", sumado con el iva del 19%, esto da "+vb+" por ser un cliente tipo A"+tc+" su descuento es del "+A1+"%, dando un total a pagar de $"+vt)
        }
            else{
                desc=A2/100;
                vt=vb-(vb*desc);
                alert("Señor "+nom+"El valor de su compra equivale a un total de"+vcom+", sumado con el iva del 19%, esto da "+vb+" por ser un cliente tipo A"+tc+" su descuento es del "+A2+"%, dando un total a pagar de $"+vt)
    
        }
    }
}

}




function callback(){
    supermercado()
}

callback(supermercado)