alert("Lectura de promedios")
let AR=[],X,I,Y=0;
for(I=0;I<=9;I++){

    X=parseFloat(prompt("Digite el valor "+I));
    AR.push(X)
}

for(I=0;I<=9;I++){
   
    Y=Y
   Y=AR[I]+Y   

}
Y=Y/10
document.write("El promedio total es "+Y)