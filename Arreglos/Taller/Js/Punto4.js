let arre=[],I,div=0,ST=0,A;
for(I=0;I<=200;I++){
            
    arre.push(I)
    I++
}
for(I=1;I<=100;I++){
    
    ST=ST
    div=div;
    div=arre[I];
    document.write(div+"<br>")
    ST=arre[I]+ST
    ST=ST
}
console.log("La suma da "+ST)