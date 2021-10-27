let arre=[],div,cal,I;
for(I=1;I<=5;I++){
            
    cal=parseInt(prompt("Digite el numero "+I));
    arre.push(cal)

}
for(I=0;I<=9;I++){
    
    div=arre[I]*2;
    console.log(div)
}