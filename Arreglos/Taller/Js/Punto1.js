let arre=[];
let X,I,atrib=0,div=1,cal,Z;
alert("Escoja la opcion que desea")
X=parseInt(prompt("1. Suma\n2. Resta\n3. Multiplicacion\n4. Division"));
switch(X){
    case 1:
        for(I=1;I<=10;I++){
            
            cal=parseInt(prompt("Digite el numero "+I));
            arre.push(cal)

        }
        for(I=1;I<=10;I++){
            atrib=atrib;
            atrib=arre[I]+atrib;
            console.log(atrib)
        }
        break;
    case 2:
        for(I=1;I<=10;I++){
            
            cal=parseInt(prompt("Digite el numero "+I));
            arre.push(cal)

        }
        for(I=1;I<=10;I++){
            atrib=atrib;
            atrib=arre[I]-atrib;
            console.log(atrib)
        }
    case 3:
        for(I=1;I<=10;I++){
            
            cal=parseInt(prompt("Digite el numero "+I));
            arre.push(cal)

        }
        for(I=1;I<=10;I++){
            div=div;
            div=arre[I]*div;
            console.log(div)
        }
    case 4:
        for(I=1;I<=10;I++){
            
            cal=parseInt(prompt("Digite el numero "+I));
            arre.push(cal)

        }
        for(I=1;I<=10;I++){
            div=div;
            div=arre[I]/div;
            console.log(div)
        }
}