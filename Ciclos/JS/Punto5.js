let W,X,Y;Z;
X=parseInt(prompt("INDIQUE LA TABLA DE MULTIPLICAR QUE DESEA UTILIZAR"));
Y=parseInt(prompt("AHORA INDIQUE HASTA QUE FACTOR DESEA VER"));
Z=parseInt(prompt("Desde que factor desa multiplicar"));
while(Z<=Y){
    W=Z*X;
    alert("El resultado es"+X+" x "+Z+" = "+W)
    Z++
}