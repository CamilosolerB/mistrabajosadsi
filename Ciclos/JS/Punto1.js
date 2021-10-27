//El colegio Los Robles, tiene actualmente 750 estudiantes. Se espera tener un crecimiento anual de 12%. Elabore un algoritmo que calcule e imprima la población estudiantil que se espera tener en el año 2035
let Z,X=2035,Ra=0;
alert("Lectura de promedios");
Z=parseInt(prompt("Por favor indique el año actual"))
while(Z<=X){
    var Pt,Ca,Rb;
    Pt=750;
    Ca=Pt*0.12;
    Rb=Pt+Ca;
    Ra=Ra+Rb
    Z=Z+1;
    alert('El crecimiento en el año '+Z+' es de '+Ra);
}
alert('Su promedio total es de '+Ra+' estudiantes.');