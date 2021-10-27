function Mañana(){
    var D,M,A;
    D=parseInt(prompt("Por favor indique el dia"))
    M=parseInt(prompt("Por favor indique el mes"))
    A=parseInt(prompt("Por favor indique el año"))
if(D<=31){
    if(M<=12){
    switch(D){
        case 28:
            if(A% 4==0 && A%100!==0 && M==2 || A%400==0){
                D=D+1;
                alert("El dia de mañana es "+D+"/"+M+"/"+A);
            }
            else if(M==2){
                D=1;
                M=3;
                alert("El dia de mañana es "+D+"/"+M+"/"+A);
            }
            else{
                D=D+1;
                alert("El dia de mañana es "+D+"/"+M+"/"+A);
            }
        break;
        
        case 29:
            if(A% 4==0 && A%100!==0 && M==2 || A%400==0){
                D=1;
                M=3;
                alert("El dia de mañana es "+D+"/"+M+"/"+A);
            }
            else if(M==2){
                alert("Este año no es bisiesto");
            }
            else{
                D=D+1;
                alert("El dia de mañana es "+D+"/"+M+"/"+A);
            }
        break;
        case 30:
            if(M==2){
                alert("Este dia no existe");
            }
            else if(M==4 || M==6 || M==9 || M==11){
                D=1;
                M=M+1;
                alert("El dia de mañana es "+D+"/"+M+"/"+A);
            }
            else{
                D=D+1;
                alert("El dia de mañana es "+D+"/"+M+"/"+A);
            }
        break;
        case 31:
            if(M==2 || M==4 || M==6 || M==9 || M==11){
                alert("Este dia no existe en el calendario");
            }
            else if(M==12){
                D=1;
                M=1;
                A=A+1;
                alert("El dia de mañana es "+D+"/"+M+"/"+A);
            }
            else{
                D=1;
                M=M+1;
                alert("El dia de mañana es "+D+"/"+M+"/"+A);
            }
        break;

        default:
            D=D+1
            alert("El dia de mañana es "+D+"/"+M+"/"+A);
            }
        }
        else{
            alert("Este mes no existe");
        }
        
    }
    else{
        alert("Este dia no existe");
    }
}


function callback(){
    Mañana()
}

callback(Mañana)