let NUM=[],Xi,Numbers,XF,NP,I;
for(Xi=0;Xi<=10;Xi++){
Numbers=parseInt(prompt("Indique el numero "+Xi));
    NUM.push(Numbers)
    console.log(NUM)
}
NP=0
for(I=0;I<=10;I++){
    NP=NP
    NUM[I]
    if(NUM[I]==1){
        document.write("1 no es numero primo<br>")
    }
    else if(XF % 2!==0 && XF % 3!==0){
        
            NP=NP+1
            alert(NP)
            document.write(Xi+" es un numero primo<br>");
        
    }

}
document.write("<br>En el rango indicado hay "+NP+" numeros primos");

