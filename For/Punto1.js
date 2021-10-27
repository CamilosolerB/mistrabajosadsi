//suma hasta 160
let X=0
for(Y=2;Y<=160;Y++){
    X=X+Y
    Y++
}
alert("El resultado es "+X);
//segundo punto
alert('LECTURA DE PROMEDIOS');
let promedio,Ye=0,To
for(X=1;X<=10;X++){
    promedio=parseFloat(prompt("POR FAVOR DIGITE EL PROMEDIO "+X));
    Ye=Ye+promedio
    To=Ye/10;
}
alert('Su promedio total es de '+To)
//tercer punto
alert('LECTURA DE PROMEDIOS');
let promedio,Ye=0,To,NT
NT=parseInt(prompt("Escriba la cantidad de numeros a promediar"));
for(X=1;X<=NT;X++){
    promedio=parseFloat(prompt("POR FAVOR DIGITE EL PROMEDIO "+X));
    Ye=Ye+promedio
    To=Ye/NT;
}
alert('Su promedio total es de '+To)
let T,Va,Vb,A=480000,B=600000,Va1,Va2,SM,To,Tv,vv,To2,N=10,T1,To1,Va1,Vb2;
alert('Calcule quien obtuvo mayor ganancias');
alert("Hubieron dos vehiculos a la venta, Un vehiculo A de valor 12.000.000 y un vehiculo B de 15.000.000")
T=prompt("Por favor escriba el nombre del trabajador 1");
Va=parseInt(prompt("Escriba el numero de vehiculos A vendidos"));
Vb=parseInt(prompt("Escriba el numero de vehiculos B vendidos"));
Va1=Va*A;
Vb1=Vb*B;
SM=1000000;
To=SM+Va1+Vb1;
Tv=Va+Vb;
To2=vv+To;
    for(X=2;X<=N;X++){
        T1=prompt("Por favor escriba el nombre del trabajador 1");
        Va=parseInt(prompt("Escriba el numero de vehiculos A vendidos"));
        Vb=parseInt(prompt("Escriba el numero de vehiculos B vendidos"));
        Va2=Va*A;
        Vb2=Vb*B;
        SM=1000000;
        To=SM+Va1+Vb1;
        Tv=Va+Vb;
        To1=vv+To;
            if(To1>=To2){
                To2=To1;
                T=T1
                Va=Va2
                Vb=Vb2
            }
            else{
                Vb2=0
                Vb2=0
            }
            To2=To2;
            T=T
            Va=Va
            Vb=Vb
    }
    alert("El vendedor con mayor ganancia fue "+T+" devengando un salario de "+To2+" vendiendo "+Va+" vehiculos A y "+Vb+" Vehiculos B")
    //punto 5
    let T,X,Y,W;
    T=parseInt(prompt('Por favor escriba hasta que tabla usted desa visualizar'));
    X=parseInt(prompt('¿Hasta que factor las desea ver?'));
    for(Y=1;Y<=T;Y++){
    for(Z=1;Z<=X;Z++){
        W=Y*Z;
        console.log(Y+' X '+Z+' = '+W)
    }
    }
    //Punto 6
    let F,NP=0
    alert("El rango inicia desde 1");
    F=parseInt(prompt("Indique hasta que rango desea conocer"));
    for(X=2;X<=F;X++){
        if(X%2!==0 && X%3!==0 || X==2 ||X==3){
            NP=NP+1
            alert(X+" es un numero primo");
        }
    }
    alert("En el rango indicado hay "+NP+" numeros primos");