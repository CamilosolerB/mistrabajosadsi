alert("Llantera la empresa de llantas que tiene llantas");
let N,L,Tn;
N=parseInt(prompt("Por favor indique el numero de llantas a comprar"));
if(N<=5){
    L=300;
    Tn=L*N;
    alert("Por la compra  de "+N+" Llanta(s) su precio individual es de "+L+" por lo tanto, el precio final es de: $"+Tn+" pesos")
    }
    else if(N<=10){
        L=250;
        Tn=L*N;
        alert("Por la compra  de "+N+" Llanta(s) su precio individual es de "+L+" por lo tanto, el precio final es de: $"+Tn+" pesos")
    }
        else{
            L=200;
            Tn=L*N;
            alert("Por la compra  de "+N+" Llanta(s) su precio individual es de "+L+" por lo tanto, el precio final es de: $"+Tn+" pesos")
        }