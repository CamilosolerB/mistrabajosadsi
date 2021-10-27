let pers,p1,p2;
pers=parseInt(prompt("Indique el numero de personas que desean la paella"));
p1=parseInt(prompt("Indique el precio del kilo de arroz"));
p2=parseInt(prompt("Indique el valor del kilo de gambas"));
    function menu(pers,p1,p2){
        var arr,gam,varr,vgam,total;
    //dividire 1/2 entre 4 =0.125 y 1/4 entre 4= 0,0625, referenciado como arr y gam
    arr= 0.125*pers;
    gam=0.0625*pers;
    //tenemos que saber cuanto vale el kilo por persona de cad producto
    varr= (p1*pers)*arr;
    vgam= (p2*pers)*gam;
    total= varr+vgam;

    document.write("En la paella se fue un total de "+arr+" kilos de arroz y " +gam+" kilos de gambas, si hablamos de precio, equivale $"+varr+" el arroz y $"+vgam+"las gambas, dando un total de "+total)
    }

    menu(pers,p1,p2)