alert("lavanderia de ropa !TIENE LAVADORAS!")
let lb;
lb=parseInt(prompt("Por favor indique el numero de libras que va a lavar"));
if(lb<8){
    alert("El nivel de lavado es el minimo y se aconseja poca agua");
    }
    else if(lb<15){
        alert("El nivel de lavado es medio y se aconseja un termino medio de uso de agua");
    }
        else if(lb<22){
            alert("El nivel de lavado es alto y se aconseja una gran cantidad de agua");
        }
            else if(lb<=30){
                alert("Es el nivel maximo y el uso de agua se requiere de una gran cantidad");
            }
                else{
                    alert("Sobrepasa los niveles esperados, por favor introduzca menos ropa");
                }