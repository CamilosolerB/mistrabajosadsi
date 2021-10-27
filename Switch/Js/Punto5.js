alert("alquiler de vehiculos");
alert("Escoje entre algunos vehiculos, estas son las opciones BMW $ 650000\n MEGANE $ 120000\n MERCEDES $ 700000\n TWINGO $ 100000\n CHEVROLET AVEO $ 150000");
let V,D,So,Nom;
Nom=prompt("Por favor escriba su nombre");
V=prompt("Por favor indique el nombre del vehiculo a comprar");
D=parseInt(prompt("Cuantos dias desea alquilarlo"));
So=parseInt(prompt("Desea adquirir el seguro todo riesgo"));
if(D<=2){
    switch(V){
        case "BMW":
            var R,Desc,Rt;
            R=650000;
            if(So=="Si"||So=="SI"||So=="si"){
                Desc=R*5;
                Desc=Desc/100;
                Rt=R+Desc
                alert
                alert("Por "+D+" no hay descuento, pero se suma el seguro todo riesgo del 5% lo cual seria un total de"+Rt);
                }
                else{
                    alert("Por "+D+" dias no hay descuento, entonces el valor a pagar es de"+R)
                }
                break
                case "MEGANE":
                    var R,Desc,Rt;
                    R=120000;
                    if(So=="Si"||So=="SI"||So=="si"){
                        Desc=R*5;
                        Desc=Desc/100;
                        Rt=R+Desc
                        alert
                        alert("Por "+D+" no hay descuento, pero se suma el seguro todo riesgo del 5% lo cual seria un total de"+Rt);
                        }
                        else{
                            alert("Por "+D+" dias no hay descuento, entonces el valor a pagar es de"+R)
                        }
                break
                        case "MERCEDES":
                            var R,Desc,Rt;
                            R=700000;
                            if(So=="Si"||So=="SI"||So=="si"){
                                Desc=R*5;
                                Desc=Desc/100;
                                Rt=R+Desc
                                alert
                                alert("Por "+D+" no hay descuento, pero se suma el seguro todo riesgo del 5% lo cual seria un total de"+Rt);
                                }
                                else{
                                    alert("Por "+D+" dias no hay descuento, entonces el valor a pagar es de"+R)
                                }
                break
                                case "TWINGO":
                                    var R,Desc,Rt;
                                    R=100000;
                                    if(So=="Si"||So=="SI"||So=="si"){
                                        Desc=R*5;
                                        Desc=Desc/100;
                                        Rt=R+Desc
                                        alert
                                        alert("Por "+D+" no hay descuento, pero se suma el seguro todo riesgo del 5% lo cual seria un total de"+Rt);
                                        }
                                        else{
                                            alert("Por "+D+" dias no hay descuento, entonces el valor a pagar es de"+R)
                                        }
                                        break
                                        case "CHEVROLET AVEO":
                                            var R,Desc,Rt;
                                            R=150000;
                                            if(So=="Si"||So=="SI"||So=="si"){
                                                Desc=R*5;
                                                Desc=Desc/100;
                                                Rt=R+Desc
                                                alert
                                                alert("Por "+D+" no hay descuento, pero se suma el seguro todo riesgo del 5% lo cual seria un total de"+Rt);
                                                }
                                                else{
                                                    alert("Por "+D+" dias no hay descuento, entonces el valor a pagar es de"+R)
                                                }
                                        break
                                        default: alert("Verifique que haya escrito bien el texto, RECUERDE QUE DEBE ESTAR EN MAYUSCULA TODO") 

            }
        
    }
    if(D<=5){
        switch(V){
            case "BMW":
                var R,Desc,Rt,Des;
                R=650000;
                Des=R*0.1;
                R=R-Des;
                if(So=="Si"||So=="SI"||So=="si"){
                    Desc=R*5;
                    Desc=Desc/100;
                    Rt=R+Desc
                    alert
                    alert("Por "+D+" hay descuento del 10% y se suma el seguro todo riesgo del 5% lo cual seria un total de"+Rt);
                    }
                    else{
                        alert("Por "+D+" dias hay descuento de 10%, entonces el valor a pagar es de"+R)
                    }
                break
                    case "MEGANE":
                        var R,Desc,Rt,Des;
                        R=120000;
                        Des=R*0.1;
                        R=R-Des;
                        if(So=="Si"||So=="SI"||So=="si"){
                            Desc=R*5;
                            Desc=Desc/100;
                            Rt=R+Desc
                            alert
                            alert("Por "+D+" hay descuento del 10% y se suma el seguro todo riesgo del 5% lo cual seria un total de"+Rt);
                            }
                            else{
                                alert("Por "+D+" dias hay descuento de 10%, entonces el valor a pagar es de"+R)
                            }
                break
                            case "MERCEDES":
                                var R,Desc,Rt,Des;
                                R=700000;
                                Des=R*0.1;
                                R=R-Des;
                                if(So=="Si"||So=="SI"||So=="si"){
                                    Desc=R*5;
                                    Desc=Desc/100;
                                    Rt=R+Desc
                                    alert
                                    alert("Por "+D+" hay descuento del 10% y se suma el seguro todo riesgo del 5% lo cual seria un total de"+Rt);
                                    }
                                    else{
                                        alert("Por "+D+" dias hay descuento de 10%, entonces el valor a pagar es de"+R)
                                    }
                            break
                                    case "TWINGO":
                                        var R,Desc,Rt,Des;
                                        R=100000;
                                        Des=R*0.1;
                                        R=R-Des;
                                        if(So=="Si"||So=="SI"||So=="si"){
                                            Desc=R*5;
                                            Desc=Desc/100;
                                            Rt=R+Desc
                                            alert
                                            alert("Por "+D+" hay descuento del 10% y se suma el seguro todo riesgo del 5% lo cual seria un total de"+Rt);
                                            }
                                            else{
                                                alert("Por "+D+" dias hay descuento de 10%, entonces el valor a pagar es de"+R)
                                            }
                            break
                                            case "CHEVROLET AVEO":
                                                var R,Desc,Rt,Des;
                                                R=150000;
                                                Des=R*0.1;
                                                R=R-Des;
                                                if(So=="Si"||So=="SI"||So=="si"){
                                                    Desc=R*5;
                                                    Desc=Desc/100;
                                                    Rt=R+Desc
                                                    alert
                                                    alert("Por "+D+" hay descuento del 10% y se suma el seguro todo riesgo del 5% lo cual seria un total de"+Rt);
                                                    }
                                                    else{
                                                        alert("Por "+D+" dias hay descuento de 10%, entonces el valor a pagar es de"+R)
                                                    }
                            break
                            default: alert("Verifique que haya escrito bien el texto, RECUERDE QUE DEBE ESTAR EN MAYUSCULA TODO")
                }

    if(D<=10){
        switch(V){
            case "BMW":
                var R,Desc,Rt,Des;
                R=650000;
                Des=R*0.15;
                R=R-Des;
                if(So=="Si"||So=="SI"||So=="si"){
                    Desc=R*5;
                    Desc=Desc/100;
                    Rt=R+Desc
                    alert
                    alert("Por "+D+" hay descuento del 15% y se suma el seguro todo riesgo del 5% lo cual seria un total de"+Rt);
                    }
                    else{
                        alert("Por "+D+" dias hay descuento de 15%, entonces el valor a pagar es de"+R)
                    }
                break
                    case "MEGANE":
                        var R,Desc,Rt,Des;
                        R=120000;
                        Des=R*0.15;
                        R=R-Des;
                        if(So=="Si"||So=="SI"||So=="si"){
                            Desc=R*5;
                            Desc=Desc/100;
                            Rt=R+Desc
                            alert
                            alert("Por "+D+" hay descuento del 15% y se suma el seguro todo riesgo del 5% lo cual seria un total de"+Rt);
                            }
                            else{
                                alert("Por "+D+" dias no hay descuento, entonces el valor a pagar es de"+R)
                            }
                break
                            case "MERCEDES":
                                var R,Desc,Rt,Des;
                                R=700000;
                                Des=R*0.15;
                                R=R-Des;
                                if(So=="Si"||So=="SI"||So=="si"){
                                    Desc=R*5;
                                    Desc=Desc/100;
                                    Rt=R+Desc
                                    alert
                                    alert("Por "+D+" no hay descuento, pero se suma el seguro todo riesgo del 5% lo cual seria un total de"+Rt);
                                    }
                                    else{
                                        alert("Por "+D+" dias no hay descuento, entonces el valor a pagar es de"+R)
                                    }
                            break
                                    case "TWINGO":
                                        var R,Desc,Rt,Des;
                                        R=100000;
                                        Des=R*0.15;
                                        R=R-Des;
                                        if(So=="Si"||So=="SI"||So=="si"){
                                            Desc=R*5;
                                            Desc=Desc/100;
                                            Rt=R+Desc
                                            alert
                                            alert("Por "+D+" no hay descuento, pero se suma el seguro todo riesgo del 5% lo cual seria un total de"+Rt);
                                            }
                                            else{
                                                alert("Por "+D+" dias no hay descuento, entonces el valor a pagar es de"+R)
                                            }
                            break
                                            case "CHEVROLET AVEO":
                                                var R,Desc,Rt,Des;
                                                R=150000;
                                                Des=R*0.15;
                                                R=R-Des;
                                                if(So=="Si"||So=="SI"||So=="si"){
                                                    Desc=R*5;
                                                    Desc=Desc/100;
                                                    Rt=R+Desc
                                                    alert
                                                    alert("Por "+D+" no hay descuento, pero se suma el seguro todo riesgo del 5% lo cual seria un total de"+Rt);
                                                    }
                                                    else{
                                                        alert("Por "+D+" dias no hay descuento, entonces el valor a pagar es de"+R)
                                                    }
                            break
                            default: alert("Verifique que haya escrito bien el texto, RECUERDE QUE DEBE ESTAR EN MAYUSCULA TODO")
                }
            
        }
        if(D>10){
            switch(V){
                case "BMW":
                    var R,Desc,Rt,Des;
                    R=650000;
                    Des=R*0.2;
                    R=R-Des;
                    if(So=="Si"||So=="SI"||So=="si"){
                        Desc=R*5;
                        Desc=Desc/100;
                        Rt=R+Desc
                        alert
                        alert("Por "+D+" no hay descuento, pero se suma el seguro todo riesgo del 5% lo cual seria un total de"+Rt);
                        }
                        else{
                            alert("Por "+D+" dias no hay descuento, entonces el valor a pagar es de"+R)
                        }
                break
                        case "MEGANE":
                            var R,Desc,Rt,Des;
                            R=120000;
                            Des=R*0.2;
                            R=R-Des;
                            if(So=="Si"||So=="SI"||So=="si"){
                                Desc=R*5;
                                Desc=Desc/100;
                                Rt=R+Desc
                                alert
                                alert("Por "+D+" no hay descuento, pero se suma el seguro todo riesgo del 5% lo cual seria un total de"+Rt);
                                }
                                else{
                                    alert("Por "+D+" dias no hay descuento, entonces el valor a pagar es de"+R)
                                }
                break
                                case "MERCEDES":
                                    var R,Desc,Rt,Des;
                                    R=700000;
                                    Des=R*0.2;
                                    R=R-Des;
                                    if(So=="Si"||So=="SI"||So=="si"){
                                        Desc=R*5;
                                        Desc=Desc/100;
                                        Rt=R+Desc
                                        alert
                                        alert("Por "+D+" no hay descuento, pero se suma el seguro todo riesgo del 5% lo cual seria un total de"+Rt);
                                        }
                                        else{
                                            alert("Por "+D+" dias no hay descuento, entonces el valor a pagar es de"+R)
                                        }
                                    break
                                        case "TWINGO":
                                            var R,Desc,Rt,Des;
                                            R=100000;
                                            Des=R*0.2;
                                            R=R-Des;
                                            if(So=="Si"||So=="SI"||So=="si"){
                                                Desc=R*5;
                                                Desc=Desc/100;
                                                Rt=R+Desc
                                                alert
                                                alert("Por "+D+" no hay descuento, pero se suma el seguro todo riesgo del 5% lo cual seria un total de"+Rt);
                                                }
                                                else{
                                                    alert("Por "+D+" dias no hay descuento, entonces el valor a pagar es de"+R)
                                                }
                                            break
                                                case "CHEVROLET AVEO":
                                                    var R,Desc,Rt,Des;
                                                    R=150000;
                                                    Des=R*0.2;
                                                    R=R-Des;
                                                    if(So=="Si"||So=="SI"||So=="si"){
                                                        Desc=R*5;
                                                        Desc=Desc/100;
                                                        Rt=R+Desc
                                                        alert
                                                        alert("Por "+D+" no hay descuento, pero se suma el seguro todo riesgo del 5% lo cual seria un total de"+Rt);
                                                        }
                                                        else{
                                                            alert("Por "+D+" dias no hay descuento, entonces el valor a pagar es de"+R)
                                                        }
                                                        break
                                                        default: alert("Verifique que haya escrito bien el texto, RECUERDE QUE DEBE ESTAR EN MAYUSCULA TODO")
                    }}}