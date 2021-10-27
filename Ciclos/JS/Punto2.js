//Elabore un algoritmo que le lea N números diferente y calcule e imprima el mayor y el menor.
let N,H;
alert('Calcule el manor y el menor de este conjunto de numeros');
N=parseInt(prompt("Por favor escriba el numero de digitos que va a escribir"));
H=parseInt(prompt("Por favor anote el numero 1"));
N=N-1
Z=1
N1=0
H=0
    while(Z<=N){
        
        var Z;
        Z=Z+1;
        alert();
        N1=parseInt(prompt("Por favor escriba el numero "+ Z))
            if(N1>=H){
                H=N1
            }
                else{
                    N1=N1
                }
    
    }
    alert('El mayor es '+H);
    H=parseInt(prompt('Por favor anote el numero 1, AHORA CALCULAREMOS EL MENOR.'));
    N=N-1;
    Z=1;
    N1=0;
        while(Z<=N){
            Z=Z+1;
            N1=parseInt(prompt("Por favor escriba el numero "+ Z));
                if(N1<=H){
                    H=N1
                }
                    else{
                        N1=N1
                    }
        }
        alert('El menor es ',H);