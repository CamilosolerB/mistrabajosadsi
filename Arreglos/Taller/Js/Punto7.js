let NUM=[],numbers,opc;
for (I=0;I<=20;I++){
    numbers= Math.round(Math.random()*100);
    NUM.push(numbers)
}
console.log(NUM)
opc=parseInt(prompt("Digite un numero entre 0 a 100 para mirar si esta en la lista"));
for(I=0;I<=20;I++){
    alert("Esta en el for")
    alert(NUM[I])
if(opc>=100){
    document.write("Repitalo de nuevo, un NUMERO DE 1 A 100");
    I=21
}

    else if(opc==NUM[I]){
        
        alert("El numero "+opc+" si se encuentra en la propiedad");
        I=21
    }
        else{
            alert("El numero "+opc+" no se encuentra en la lista");
           
        }
        I=I
    }