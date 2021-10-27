alert("Computadores y accesorios");
let N,Tc,Pc,TCf;
N=parseInt(prompt("Por favor indique el numero de computadores que desea adquirir, COSTO DE COMPUTADOR:11000"));
if(N<=5){
    Tc=11000*N;
    Pc=Tc*0.1;
    TCf=Tc-Pc;
    alert("Por la compra  de "+N+" computadores ofrecemos un descuento del 10%, por lo tanto, el precio final es de: $"+TCf+" pesos")
}
    else if(N<=10){
        Tc=11000*N;
        Pc=Tc*0.2;
        TCf=Tc-Pc;
        alert("Por la compra  de "+N+" computadores ofrecemos un descuento del 20%, por lo tanto, el precio final es de: $"+TCf+" pesos")

    }
        else{
            Tc=11000*N;
            Pc=Tc*0.4;
            TCf=Tc-Pc;
            alert("Por la compra  de "+N+" computadores ofrecemos un descuento del 40%, por lo tanto, el precio final es de: $"+TCf+" pesos")
    
        }