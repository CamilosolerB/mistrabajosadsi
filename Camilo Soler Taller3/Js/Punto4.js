alert("Electrodomesticos al menor precio");
let E,IVA,N,D,E1,R,RB,RTI,RT;
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
