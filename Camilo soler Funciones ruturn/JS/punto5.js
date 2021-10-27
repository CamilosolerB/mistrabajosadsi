var number;
number=parseInt(prompt("Indique el coste del producto")) 
function IVA(number){
   var inc;

        inc = ("El precio original del producto es de $"+number+", sumandole el IVA del 19% eso equivale a $"+parseInt((number*0.19)+number))

        return inc;
}
alert(IVA(number))