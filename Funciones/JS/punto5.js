var number;
number=parseInt(prompt("Indique el coste del producto")) 
function IVA(number){
   var inc;
        inc=number*0.19;
        inc=inc+number
        document.write("El precio original del producto es de $"+number+", sumandole el IVA del 19% eso equivale a $"+inc)
}
IVA(number)