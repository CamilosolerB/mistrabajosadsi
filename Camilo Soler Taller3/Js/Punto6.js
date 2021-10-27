//Archivacion de productos y servicio
let Capital,DC,EC,M,CI;
Capital=parseInt(prompt("Por favor escriba el balance de su empresa"));
if(Capital<=0){
    10000-Capital;
    EC=DC-5000;
    M=EC-2000;
    CI=M/2;
    alert("El prestamo que se debe solicitar es de $"+DC+" la empresa tiene que hacer la distribucion del capital restando el capital de compra de equipos de computo quedaria"+EC+" y 2000 en mobiliario quedando en "+M+" ademas de esto hay que hacer un descuento para la compra de insumos equivalente a "+CI+" y los incentivos del mismo valor");
}
    else if(Capital<=20000){
        DC=20000-Capital;
        EC=DC-5000;
        M=EC-2000;
        CI=M/2;
        alert('El prestamo que se debe solicitar es de $'+DC+' la empresa tiene que hacer la distribucion del capital restando el capital de compra de equipos de computo quedaria'+EC+' y 2000 en mobiliario quedando en '+M+' ademas de esto hay que hacer un descuento para la compra de insumos equivalente a '+CI+' y los incentivos del mismo valor')
        }
            else{
                DC=Capital;
                EC=DC-5000;
                M=EC-2000;
                CI=M/2;
                alert('La empresa no requiere de un credito ya que su capital es de $'+DC+' la empresa tiene que hacer la distribucion del capital restando el capital de compra de equipos de computo quedaria'+EC+' y 2000 en mobiliario quedando en '+M+' ademas de esto hay que hacer un descuento para la compra de insumos equivalente a '+CI+' y los incentivos del mismo valor')
            }