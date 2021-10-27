alert("¿Que dia es mañana?")
let D,M,A;
D=parseInt(prompt("Digite que dia es hoy"));
M=parseInt(prompt("Por favor digite el mes"));
A=parseInt(prompt("Por favor indique el año"));
if(D==31){
    if(M==1 || M==3 || M==5|| M==7 || M==8 || M==10){
        D=1;
        M=M+1;
        alert(D+"/"+M+"/"+A);
    }
    else if(M==12){
        A=A+1;
        D=1;
        M=1;
        alert(D+"/"+M+"/"+A);
    }
    else{
        alert("la fecha indicada no existe");
    }
}
    else if(D==30){
        if(M==4 || M==6 || M==9|| M==11){
            D=1;
            M=M+1;
            alert(D+"/"+M+"/"+A);
        }
        else{
            D=D+1;
            alert(D+"/"+M+"/"+A);
        }
}
            else if(D==29 && M==2 && A%4==0){
                    D=1;
                    M=3;
                    alert(D+"/"+M+"/"+A);
                }
                else if(D==29 && M==2 && A%4!==0){
                    alert("Este año no es bisiesto");
                }       
                    else if(D==28 && M==2 && A%4==0){
                        D=D+1
                            alert(D+"/"+M+"/"+A);
}
                            else if(D==28 && M==2 && A%4!==0){
                                D=1
                                M=3
                                alert(D+"/"+M+"/"+A);
                            }
else{
    D=D+1
    alert(D+"/"+M+"/"+A);
}