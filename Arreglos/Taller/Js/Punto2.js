let A1=[],A2=[];
let cal,I,cal2
for(I=1;I<=5;I++){
            
    cal=parseInt(prompt("Digite el numero "+I));
    A1.push(cal)

}
for(I=1;I<=5;I++){
            
    cal2=parseInt(prompt("Digite el numero "+I));
    A2.push(cal2)

}

for(I=0;I<=4;I++){

    cal=A1[I]
    cal2=A2[I]
    
    console.log(cal)
    console.log(cal2)
}