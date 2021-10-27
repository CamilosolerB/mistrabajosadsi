/*let N,P1,Pt,P,i;
i=1
N=parseInt(prompt("Indique el numero de digitos a promediar"));
P1=parseInt(prompt("indique el promedio 1"))
for(i=2;i<=N;i++){
    P=parseInt(prompt("Digite el promedio "+i))
    P1=P1+P
    Pt=P1/N
    P=Pt
}
alert("el promedio es "+P)*/
/*let N,w,TP,TI;
N=parseInt(prompt("Indique la cantidad de numeros a sumars"));
TP=0;
TI=0;
for(w=1;w<=N;w++){
    var x;
    x=parseInt(prompt("Digite el numero "+w));
    if(x%2== 0){
        var SP;
        SP=TP+x
        TP=SP

    }
        else{
            var SI;
            SI=TI+x
            TI=SI
        }
    TP=TP;
    TI=TI;
}
alert("suma par "+TP)
alert("Suma impar "+TI)*/
alert("Sector de vacunacion");
let N,i,T=14000,NT=0;
for(i=1;i<=7;i++){
    N=parseInt(prompt("Indique el numero de vacunas que se aplico en el dia "+i));
    if(T<=1000){
        alert("Se llego a la cifra maxima de 1000 e incluso quedo inferior")
        i=8
    }

    else if(N<=2000){
        NT=N
        T=T-NT
        alert("Quedan "+T+" vacunas");
        i=i
        T=T
    }
        else{
            alert("Ha exedido lo recomendaddo pero lo valemos")
            NT=N
            T=T-NT
            alert("Quedan "+T+" vacunas");
            i=i
            T=T
        }

T=T
i=i
}
alert("Fin de las dosis semanales")
