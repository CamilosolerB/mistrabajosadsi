alert("El mayor y el menor");
let N1,N2,N3,N4;
N1=parseInt(prompt("Por favor escriba el valor 1"));
N2=parseInt(prompt("Por favor escriba el valor 2"));
N3=parseInt(prompt("Por favor escriba el valor 3"));
N4=parseInt(prompt("Pro favor escriba el valor 4"));
if(N1>=N2 && N1>=N3 && N1>=N4){
    alert("El numero mayor es "+N1);
}
    else if(N2>=N1 && N2>=N3 && N2>=N4){
        alert("El numero mayor es "+N2);
    }
        else if(N3>=N1 && N3>=N2 && N3>=N4){
            alert("El numero mayor es "+N3);
        }
            else if(N4>=N1 && N4>=N2 && N4>=N3){
                alert("El numero mayor es "+N4);
            }
if(N1<=N2 && N1<=N3 && N1<=N4){
    alert("El numero menor es "+N1);
}
    else if(N2<=N1 && N2<=N3 && N2<=N4){
        alert("El numero menor es "+N2);
    }
        else if(N3<=N1 && N3<=N2 && N3<=N4){
            alert("El numero menor es "+N3);
        }
            else if(N4<=N1 && N4<=N2 && N4<=N3){
                alert("El numero menor es "+N4)
            }