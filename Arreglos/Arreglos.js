let nomarreglos=[];
let aux,tam,X;
tam=parseInt(prompt("Digite la cantidad de numeros para arreglo"));
for(let i=0; i<tam;i++){
    aux=parseInt(prompt("Digite una edad"));
    nomarreglos.push(aux);
    
}
for(let i=0; i<5;i++){
    X=nomarreglos[i]*2
    console.log(X)

}