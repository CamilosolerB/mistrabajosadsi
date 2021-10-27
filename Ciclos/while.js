/*let ri,rf,cp=0,ci=0,r;
while(r="si" || r=="SI" || r=="Si"){
ri=parseInt(prompt("Digite rango incial"));
rf=parseInt(prompt("Digite el rango final"));
while(ri>rf){
    alert("Rango inicial no valido, vuelva a escribir")
    ri=parseInt(prompt("Digite rango incial"));
    rf=parseInt(prompt("Digite el rango final"));
    
}
while(ri<=rf){
    if(ri % 2==0){
        cp++;
    }
    else{
        ci++;
    }
ri++;
}
alert("numeros pares "+cp);
alert("Numeros impares "+ci);
r=prompt("¿Desea volver a ejecutar el algoritmo?")
}*/
let t=1,
while (t<=3) {
    m=1;
    while (m<=5) {
    let r=t*m
    console.log(t+" x "+m+" = "+r+"\n")
    m++       
    }
    t++
}