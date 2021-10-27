var X=1,NC,Na,V,T,No,t1=0.05,t2=0.08,t3=0.12,t4=0.15,P,To;
NC=parseInt(prompt("Escriba el numero de clientes que va agregar en el algoritmo"));
while(X<=NC){
    Na=prompt("Por favor indique el nombre del cliente "+X);
    V=parseInt(prompt("Indique el valor de precio de venta de las hojas sin descuento"));
    T=parseInt(prompt('Por favor escriba el tipo de cliente (tipo 1, 2, 3 o 4) que es el cliente ',X));
    No=parseInt(prompt("Por favor digite cuantas hojas desea comprar  el cliente "+X));
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
}
