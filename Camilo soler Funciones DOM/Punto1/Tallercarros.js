$(document).ready(function(){

    $("#btn").on("click",function(){
let V,D,So,Nom,Nom1,V1,D1,So1,Showresult;
Nom1=document.getElementById("print");
console.log(Nom1)
V1=document.getElementById("V")

D1=document.getElementById("D")

So1=document.getElementById("So")

Nom=document.getElementById("Nom1").value
console.log(Nom)
V=document.getElementById("V").value
console.log(V)
D=document.getElementById("D").value;
console.log(D)
So=document.getElementById("So").value;
console.log(So)
Showresult=document.getElementById("Showresult")

if(D<=2){
    switch(V){
        
        case "BMW":
            Nom1.innerHTML+=V
            Nom1.style.backgroundColor="blue"
            var R,Desc,Rt;
            R=650000;
            R=R*D
            if(So=="Si"||So=="SI"||So=="si"){
                Desc=R*5;
                Desc=Desc/100;
                Rt=R+Desc
                
                Showresult.innerHTML=("Por "+D+" dias no hay descuento, pero se suma el seguro todo riesgo del 5% lo cual seria un total de"+Rt);
                }
                else{
                    
                    Showresult.innerHTML=("Por "+D+" dias no hay descuento, entonces el valor a pagar es de"+R)
                }
                Showresult.style.backgroundColor="#D35400"
                break
                case "MEGANE":
                    Nom1.innerHTML+=("El carro es un ")+V
                    Nom1.style.backgroundColor="#FF0000"
                    var R,Desc,Rt;
                    R=120000;
                    if(So=="Si"||So=="SI"||So=="si"){
                        Desc=R*5;
                        Desc=Desc/100;
                        Rt=R+Desc
                        
                        Showresult.innerHTML=("Por "+D+" dias no hay descuento, pero se suma el seguro todo riesgo del 5% lo cual seria un total de"+Rt);
                        }
                        else{
                            Showresult.innerHTML=("Por "+D+" dias no hay descuento, entonces el valor a pagar es de"+R)
                        }
                        Showresult.style.backgroundColor="#D35400"
                break
                        case "MERCEDES":
                            Nom1.innerHTML+=("El vehiculo es un ")+V
                            Nom1.style.backgroundColor="black"
                            Nom1.style.color="White"
                            
                            var R,Desc,Rt;
                            R=700000;
                            R=R*D
                            if(So=="Si"||So=="SI"||So=="si"){
                                Desc=R*5;
                                Desc=Desc/100;
                                Rt=R+Desc
                                
                                Showresult.innerHTML=("Por "+D+" dias no hay descuento, pero se suma el seguro todo riesgo del 5% lo cual seria un total de"+Rt);
                                }
                                else{
                                    Showresult.innerHTML=("Por "+D+" dias no hay descuento, entonces el valor a pagar es de"+R)
                                }
                                Showresult.style.backgroundColor="#D35400"
                break
                                case "TWINGO":
                                    Nom1.innerHTML+=("El vehiculo es un ")+V
                                    Nom1.style.backgroundColor="green"
                                    var R,Desc,Rt;
                                    R=100000;
                                    R=R*D
                                    if(So=="Si"||So=="SI"||So=="si"){
                                        Desc=R*5;
                                        Desc=Desc/100;
                                        Rt=R+Desc
                                        
                                        Showresult.innerHTML=("Por "+D+" dias no hay descuento, pero se suma el seguro todo riesgo del 5% lo cual seria un total de"+Rt);
                                        }
                                        else{
                                            Showresult.innerHTML=("Por "+D+" dias no hay descuento, entonces el valor a pagar es de"+R)
                                        }
                                        Showresult.style.backgroundColor="#D35400"
                                        break
                                        case "CHEVROLET AVEO":
                                            Nom1.innerHTML+=("El vehiculo es un ")+V
                                            Nom1.style.backgroundColor="gray"
                                            var R,Desc,Rt;
                                            R=150000;
                                            R=R*D
                                            if(So=="Si"||So=="SI"||So=="si"){
                                                Desc=R*5;
                                                Desc=Desc/100;
                                                Rt=R+Desc
                                                alert
                                                Showresult.innerHTML=("Por "+D+" dias no hay descuento, pero se suma el seguro todo riesgo del 5% lo cual seria un total de"+Rt);
                                                }
                                                else{
                                                    Showresult.innerHTML=("Por "+D+" dias no hay descuento, entonces el valor a pagar es de"+R)
                                                }
                                                Showresult.style.backgroundColor="#D35400"
                                        break
                                        default: Showresult.innerHTML=("Verifique que haya escrito bien el texto, RECUERDE QUE DEBE ESTAR EN MAYUSCULA TODO") 

                                                

            }
        
    }
    else if(D<=5 && D>=3){
        switch(V){
            case "BMW":
                Nom1.innerHTML+=("El carro es un ")+V
                Nom1.style.backgroundColor="blue"
                var R,Desc,Rt;
                var Des;
                R=650000;
                R=R*D
                Des=R*0.1;
                R=R-Des;
                if(So=="Si"||So=="SI"||So=="si"){
                    Desc=R*5;
                    Desc=Desc/100;
                    Rt=R+Desc
                    
                    Showresult.innerHTML=("Por "+D+" dias hay descuento del 10% y se suma el seguro todo riesgo del 5% lo cual seria un total de"+Rt);
                    }
                    else{
                        Showresult.innerHTML=("Por "+D+" dias hay descuento de 10%, entonces el valor a pagar es de"+R)
                    }
                    Showresult.style.backgroundColor="#F1C40F"
                break
                    case "MEGANE":
                        Nom1.innerHTML+=("El carro es un ")+V
                        Nom1.style.backgroundColor="FF0000"
                        var R,Desc,Rt;
                        R=120000;
                        R=R*D
                        Des=R*0.1;
                        R=R-Des;
                        if(So=="Si"||So=="SI"||So=="si"){
                            Desc=R*5;
                            Desc=Desc/100;
                            Rt=R+Desc
                            
                            Showresult.innerHTML=("Por "+D+" dias hay descuento del 10% y se suma el seguro todo riesgo del 5% lo cual seria un total de"+Rt);
                            }
                            else{
                                Showresult.innerHTML=("Por "+D+" dias hay descuento de 10%, entonces el valor a pagar es de"+R)
                            }
                            Showresult.style.backgroundColor="#F1C40F"
                break
                            case "MERCEDES":
                                Nom1.innerHTML+=("El carro es un ")+V
                                Nom1.style.backgroundColor="#1C2833"
                                Nom1.style.color="white"
                                var R,Desc,Rt;
                                R=700000;
                                R=R*D
                                Des=R*0.1;
                                R=R-Des;
                                if(So=="Si"||So=="SI"||So=="si"){
                                    Desc=R*5;
                                    Desc=Desc/100;
                                    Rt=R+Desc
                                    
                                    Showresult.innerHTML=("Por "+D+" dias hay descuento del 10% y se suma el seguro todo riesgo del 5% lo cual seria un total de"+Rt);
                                    }
                                    else{
                                        Showresult.innerHTML=("Por "+D+" dias hay descuento de 10%, entonces el valor a pagar es de"+R)
                                    }
                                    Showresult.style.backgroundColor="#F1C40F"
                            break
                                    case "TWINGO":
                                        Nom1.innerHTML+=("El carro es un ")+V
                                        Nom1.style.backgroundColor="00FF00"
                                        var R,Desc,Rt;
                                        R=100000;
                                        R=R*D
                                        Des=R*0.1;
                                        R=R-Des;
                                        if(So=="Si"||So=="SI"||So=="si"){
                                            Desc=R*5;
                                            Desc=Desc/100;
                                            Rt=R+Desc
                                            
                                            Showresult.innerHTML=("Por "+D+" dias hay descuento del 10% y se suma el seguro todo riesgo del 5% lo cual seria un total de"+Rt);
                                            }
                                            else{
                                                Showresult.innerHTML=("Por "+D+" dias hay descuento de 10%, entonces el valor a pagar es de"+R)
                                            }
                                            Showresult.style.backgroundColor="#F1C40F"
                            break
                                            case "CHEVROLET AVEO":
                                                Nom1.innerHTML+=("El carro es un ")+V
                                                Nom1.style.backgroundColor="#99A3A4"
                                                var R,Desc,Rt;
                                                R=150000;
                                                R=R*D
                                                Des=R*0.1;
                                                R=R-Des;
                                                if(So=="Si"||So=="SI"||So=="si"){
                                                    Desc=R*5;
                                                    Desc=Desc/100;
                                                    Rt=R+Desc
                                                    
                                                    Showresult.innerHTML=("Por "+D+" dias hay descuento del 10% y se suma el seguro todo riesgo del 5% lo cual seria un total de"+Rt);
                                                    }
                                                    else{
                                                        Showresult.innerHTML=("Por "+D+" dias hay descuento de 10%, entonces el valor a pagar es de"+R)
                                                    }
                                                    Showresult.style.backgroundColor="#F1C40F"
                            break
                            default: Showresult.innerHTML=("Verifique que haya escrito bien el texto, RECUERDE QUE DEBE ESTAR EN MAYUSCULA TODO")
                }
            }


    
    if(D<=10 && D>=6){
        switch(V){
            case "BMW":
                alert("Estoy aqui")
                Nom1.innerHTML+=("El carro es un ")+V
                Nom1.style.backgroundColor="blue"
                var Des;
                R=650000;
                R=R*D
                Des=R*0.15;
                R=R-Des;
                if(So=="Si"||So=="SI"||So=="si"){
                    Desc=R*5;
                    Desc=Desc/100;
                    Rt=R+Desc
                    
                    Showresult.innerHTML=("Por "+D+" hay descuento del 15% y se suma el seguro todo riesgo del 5% lo cual seria un total de"+Rt);
                    }
                    else{
                        Showresult.innerHTML=("Por "+D+" dias hay descuento de 15%, entonces el valor a pagar es de"+R)
                    }
                    Showresult.style.backgroundColor="#2ECC71"
                break
                    case "MEGANE":
                        Nom1.innerHTML+=("El carro es un ")+V
                        Nom1.style.backgroundColor="red"
                        Nom1.style.color="White"
                        R=120000;
                        R=R*D
                        Des=R*0.15;
                        R=R-Des;
                        if(So=="Si"||So=="SI"||So=="si"){
                            Desc=R*5;
                            Desc=Desc/100;
                            Rt=R+Desc
                            
                            Showresult.innerHTML=("Por "+D+" hay descuento del 15% y se suma el seguro todo riesgo del 5% lo cual seria un total de"+Rt);
                            }
                            else{
                                Showresult.innerHTML=("Por "+D+" dias hay descuento del 15%, entonces el valor a pagar es de"+R)
                            }
                            Showresult.style.backgroundColor="#2ECC71"
                break
                            case "MERCEDES":
                                Nom1.innerHTML+=("El carro es un ")+V
                                Nom1.style.backgroundColor="black"
                                Nom1.style.color="White"
                                R=700000;
                                R=R*D
                                Des=R*0.15;
                                R=R-Des;
                                if(So=="Si"||So=="SI"||So=="si"){
                                    Desc=R*5;
                                    Desc=Desc/100;
                                    Rt=R+Desc
                                    
                                    Showresult.innerHTML=("Por "+D+" hay descuento del 15%, pero se suma el seguro todo riesgo del 5% lo cual seria un total de"+Rt);
                                    }
                                    else{
                                        Showresult.innerHTML=("Por "+D+" dias hay descuento del 15%, entonces el valor a pagar es de"+R)
                                    }
                                    Showresult.style.backgroundColor="#2ECC71"
                            break
                                    case "TWINGO":
                                        Nom1.innerHTML+=("El carro es un ")+V
                                        Nom1.style.backgroundColor="green"
                                        R=100000;
                                        R=R*D
                                        Des=R*0.15;
                                        R=R-Des;
                                        if(So=="Si"||So=="SI"||So=="si"){
                                            Desc=R*5;

                                            Desc=Desc/100;
                                            Rt=R+Desc
                                            alert
                                            Showresult.innerHTML=("Por "+D+" hay descuento del 15%, pero se suma el seguro todo riesgo del 5% lo cual seria un total de"+Rt);
                                            }
                                            else{
                                                Showresult.innerHTML=("Por "+D+" dias hay descuento del 15%, entonces el valor a pagar es de"+R)
                                            }
                                            Showresult.style.backgroundColor="#2ECC71"
                            break
                                            case "CHEVROLET AVEO":
                                                Nom1.innerHTML+=("El carro es un ")+V
                                                Nom1.style.backgroundColor="gray"
                                                R=150000;
                                                R=R*D
                                                Des=R*0.15;
                                                R=R-Des;
                                                if(So=="Si"||So=="SI"||So=="si"){
                                                    Desc=R*5;
                                                    Desc=Desc/100;
                                                    Rt=R+Desc
                                                    
                                                    Showresult.innerHTML=("Por "+D+" dias hay descuento del 15%, pero se suma el seguro todo riesgo del 5% lo cual seria un total de"+Rt);
                                                    }
                                                    else{
                                                        Showresult.innerHTML=("Por "+D+" dias hay descuento del 15%, entonces el valor a pagar es de"+R)
                                                    }
                                                    Showresult.style.backgroundColor="#2ECC71"
                            break
                            default: Showresult.innerHTML=("Verifique que haya escrito bien el texto, RECUERDE QUE DEBE ESTAR EN MAYUSCULA TODO")
                }
            
        }
        if(D>10){
            switch(V){
                case "BMW":
                    Nom1.innerHTML+=("El carro es un ")+V
                    Nom1.style.backgroundColor="blue"
                    R=650000;
                    R=R*D
                    Des=R*0.2;
                    R=R-Des;
                    if(So=="Si"||So=="SI"||So=="si"){
                        Desc=R*5;
                        Desc=Desc/100;
                        Rt=R+Desc
                        
                        Showresult.innerHTML=("Por "+D+" dias hay descuento del 20%, pero se suma el seguro todo riesgo del 5% lo cual seria un total de"+Rt);
                        }
                        else{
                            Showresult.innerHTML=("Por "+D+" dias hay descuento del 20%, entonces el valor a pagar es de"+R)
                        }
                        Showresult.style.backgroundColor="#85C1E9"
                break
                        case "MEGANE":
                            Nom1.innerHTML+=("El carro es un ")+V
                            Nom1.style.backgroundColor="red"
                            
                            R=120000;
                            R=R*D
                            Des=R*0.2;
                            R=R-Des;
                            if(So=="Si"||So=="SI"||So=="si"){
                                Desc=R*5;
                                Desc=Desc/100;
                                Rt=R+Desc
                                
                                Showresult.innerHTML=("Por "+D+" dias hay descuento del 20& , pero se suma el seguro todo riesgo del 5% lo cual seria un total de"+Rt);
                                }
                                else{
                                    Showresult.innerHTML=("Por "+D+" dias hay descuento del 20%, entonces el valor a pagar es de"+R)
                                }
                                Showresult.style.backgroundColor="#85C1E9"
                break
                                case "MERCEDES":
                                    Nom1.innerHTML+=("El carro es un ")+V
                                    Nom1.style.backgroundColor="black"
                                    Nom1.style.color="White"
                                    R=700000;
                                    R=R*D
                                    Des=R*0.2;
                                    R=R-Des;
                                    if(So=="Si"||So=="SI"||So=="si"){
                                        Desc=R*5;
                                        Desc=Desc/100;
                                        Rt=R+Desc
                                        
                                        Showresult.innerHTML=("Por "+D+" hay descuento del 20%, pero se suma el seguro todo riesgo del 5% lo cual seria un total de"+Rt);
                                        }
                                        else{
                                            Showresult.innerHTML=("Por "+D+" dias hay descuento del 20%, entonces el valor a pagar es de"+R)
                                        }
                                        Showresult.style.backgroundColor="#85C1E9"
                                    break
                                        case "TWINGO":
                                            Nom1.innerHTML+=("El carro es un ")+V
                                            Nom1.style.backgroundColor="green"
                                            R=100000;
                                            R=R*D;
                                            Des=R*0.2;
                                            R=R-Des;
                                            if(So=="Si"||So=="SI"||So=="si"){
                                                Desc=R*5;
                                                Desc=Desc/100;
                                                Rt=R+Desc
                                                alert
                                                Showresult.innerHTML=("Por "+D+" dias hay descuento del 20%, pero se suma el seguro todo riesgo del 5% lo cual seria un total de"+Rt);
                                                }
                                                else{
                                                    Showresult.innerHTML=("Por "+D+" dias hay descuento del 20%, entonces el valor a pagar es de"+R)
                                                }
                                                Showresult.style.backgroundColor="#85C1E9"
                                            break
                                                case "CHEVROLET AVEO":
                                                    
                                                    Nom1.innerHTML+=("El carro es un ")+V
                                                    Nom1.style.backgroundColor="gray"
                                                    
                                                    R=150000;
                                                    R=R*D
                                                    Des=R*0.2;
                                                    R=R-Des;
                                                    if(So=="Si"||So=="SI"||So=="si"){
                                                        Desc=R*5;
                                                        Desc=Desc/100;
                                                        Rt=R+Desc
                                                        
                                                        Showresult.innerHTML=("Por "+D+" hay descuento del 20% y se suma el seguro todo riesgo del 5% lo cual seria un total de"+Rt);
                                                        }
                                                        else{
                                                            Showresult.innerHTML=("Por "+D+" dias hay descuento del 20% entonces el valor a pagar es de"+R)
                                                        }
                                                        Showresult.style.backgroundColor="#85C1E9"
                                                        break
                                                        default: Showresult.innerHTML=("Verifique que haya escrito bien el texto, RECUERDE QUE DEBE ESTAR EN MAYUSCULA TODO")
                    }}




                


})
})
