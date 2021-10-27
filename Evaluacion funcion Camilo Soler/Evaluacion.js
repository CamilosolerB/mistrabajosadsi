$(document).ready(function(){

    $("#btn").on("click",function(){
        var estrato,hijos,discapacidad,porcentaje,totalresult;

        estrato=document.getElementById("estrato").value;
        console.log(estrato)
        hijos=document.getElementById("hijos").value;
        console.log(hijos)
        discapacidad=document.getElementById("discapacidad").value
        console.log(discapacidad)
        porcentaje=document.getElementById("porcentaje")
        totalresult=document.getElementById("totalresult")

        var e1=15, e2=10, e3=5, h1=2, h2=4, h3=6, h4=8, dis=5,t,sal=908526,total,prin,percent; 
        switch(estrato){
            case "1":
                switch(hijos){
                    case "1":
                        if(discapacidad=="si" || discapacidad=="SI" || discapacidad=="Si"){
                           t=e1+h1+dis;
                            total=(sal*t)/100;
                            print=("Con relacion a lo anterior lo que ganaria equivale a "+total)
                            
                        }
                        else{
                            t=e1+h1;
                            total=(sal*t)/100;
                            print=("Con relacion a lo anterior lo que ganaria equivale a "+total)
                        }
                        
                    break;
                    case "2":
                        if(discapacidad=="si" || discapacidad=="SI" || discapacidad=="Si"){
                           t=e1+h2+dis;
                            total=(sal*t)/100;
                            print=("Con relacion a lo anterior lo que ganaria equivale a "+total)
                        }
                        else{
                            t=e1+h2;
                            total=(sal*t)/100;
                            print=("Con relacion a lo anterior lo que ganaria equivale a "+total)
                        }
                    break;
                    case "2":
                        if(discapacidad=="si" || discapacidad=="SI" || discapacidad=="Si"){
                           t=e1+h2+dis;
                            total=(sal*t)/100;
                            print=("Con relacion a lo anterior lo que ganaria equivale a "+total)
                        }
                        else{
                            t=e1+h2;
                            total=(sal*t)/100;
                            print=("Con relacion a lo anterior lo que ganaria equivale a "+total)
                        }
                    break;
                    case "3":
                        if(discapacidad=="si" || discapacidad=="SI" || discapacidad=="Si"){
                           t=e1+h3+dis;
                            total=(sal*t)/100;
                            print=("Con relacion a lo anterior lo que ganaria equivale a "+total)
                        }
                        else{
                            t=e1+h3;
                            total=(sal*t)/100;
                            print=("Con relacion a lo anterior lo que ganaria equivale a "+total)
                        }
                    break;

                    default:
                        if(discapacidad=="si" || discapacidad=="SI" || discapacidad=="Si"){
                            t=e1+h4+dis;
                             total=(sal*t)/100;
                             print=("Con relacion a lo anterior lo que ganaria equivale a "+total)
                         }
                         else{
                             t=e1+h4;
                             total=(sal*t)/100;
                             print=("Con relacion a lo anterior lo que ganaria equivale a "+total)
                         }
                    return print;
                }
            break;

            case "2":
                switch(hijos){
                    case "1":
                        if(discapacidad=="si" || discapacidad=="SI" || discapacidad=="Si"){
                           t=e2+h1+dis;
                            total=(sal*t)/100;
                            print=("Con relacion a lo anterior lo que ganaria equivale a "+total)
                        }
                        else{
                            t=e2+h1;
                            total=(sal*t)/100;
                            print=("Con relacion a lo anterior lo que ganaria equivale a "+total)
                        }
                    break;
                    case "2":
                        if(discapacidad=="si" || discapacidad=="SI" || discapacidad=="Si"){
                           t=e2+h2+dis;
                            total=(sal*t)/100;
                            print=("Con relacion a lo anterior lo que ganaria equivale a "+total)
                        }
                        else{
                            t=e2+h2;
                            total=(sal*t)/100;
                            print=("Con relacion a lo anterior lo que ganaria equivale a "+total)
                        }
                    break;

                    case "3":
                        if(discapacidad=="si" || discapacidad=="SI" || discapacidad=="Si"){
                           t=e2+h3+dis;
                            total=(sal*t)/100;
                            porcentaje.innerHTML=("El porcentaje que recibira equivale a un "+t+"%")
                            print=("Con relacion a lo anterior lo que ganaria equivale a "+total)
                        }
                        else{
                            t=e2+h3;
                            total=(sal*t)/100;
                            porcentaje.innerHTML=("El porcentaje que recibira equivale a un "+t+"%")
                            print=("Con relacion a lo anterior lo que ganaria equivale a "+total)
                        }
                    break;

                    default:
                        if(discapacidad=="si" || discapacidad=="SI" || discapacidad=="Si"){
                            t=e2+h4+dis;
                             total=(sal*t)/100;
                             porcentaje.innerHTML=("El porcentaje que recibira equivale a un "+t+"%")
                             print=("Con relacion a lo anterior lo que ganaria equivale a "+total)
                         }
                         else{
                             t=e2+h4;
                             total=(sal*t)/100;
                             porcentaje.innerHTML=("El porcentaje que recibira equivale a un "+t+"%")
                             print=("Con relacion a lo anterior lo que ganaria equivale a "+total)
                         }
                    
                }
                return print;
            break;
            case "3":
                switch(hijos){
                    case "1":
                        if(discapacidad=="si" || discapacidad=="SI" || discapacidad=="Si"){
                           t=e3+h1+dis;
                            total=(sal*t)/100;
                            print=("Con relacion a lo anterior lo que ganaria equivale a "+total)
                        }
                        else{
                            t=e3+h1;
                            total=(sal*t)/100;
                            print=("Con relacion a lo anterior lo que ganaria equivale a "+total)
                        }
                    break;
                    case "2":
                        if(discapacidad=="si" || discapacidad=="SI" || discapacidad=="Si"){
                           t=e3+h2+dis;
                            total=(sal*t)/100;
                            print=("Con relacion a lo anterior lo que ganaria equivale a "+total)
                        }
                        else{
                            t=e3+h2;
                            total=(sal*t)/100;
                            print=("Con relacion a lo anterior lo que ganaria equivale a "+total)
                        }
                    break;

                        
                    break;
                    case "3":
                        if(discapacidad=="si" || discapacidad=="SI" || discapacidad=="Si"){
                           t=e3+h3+dis;
                            total=(sal*t)/100;
                            print=("Con relacion a lo anterior lo que ganaria equivale a "+total)
                        }
                        else{
                            t=e3+h3;
                            total=(sal*t)/100;
                            pprint=("Con relacion a lo anterior lo que ganaria equivale a "+total)
                        }
                    break;

                    default:
                        if(discapacidad=="si" || discapacidad=="SI" || discapacidad=="Si"){
                            t=e3+h4+dis;
                             total=(sal*t)/100;
                             print=("Con relacion a lo anterior lo que ganaria equivale a "+total)
                         }
                         else{
                             t=e3+h4;
                             total=(sal*t)/100;
                             print=("Con relacion a lo anterior lo que ganaria equivale a "+total)
                         }
                    
                }
            break;

            default:
                print=("Señor usuario, el servicio de apoyo y sostenimiento, solo esta disponible para los estratos 1,2 y 3, si pertenece a alguno de ellos verifique su informacion y envielo de nuevo")
                break
            return print
        }
        switch(estrato){
            case "1":
                switch(hijos){
                    case "1":
                        if(discapacidad=="si" || discapacidad=="SI" || discapacidad=="Si"){
                           t=e1+h1+dis;
                            total=(sal*t)/100;
                            percent=("El porcentaje que recibira equivale a un "+t+"%")
                            
                        }
                        else{
                            t=e1+h1;
                            total=(sal*t)/100;
                            percent=("El porcentaje que recibira equivale a un "+t+"%")
                        }
                        
                    break;
                    case "2":
                        if(discapacidad=="si" || discapacidad=="SI" || discapacidad=="Si"){
                           t=e1+h2+dis;
                            total=(sal*t)/100;
                            percent=("El porcentaje que recibira equivale a un "+t+"%")
                        }
                        else{
                            t=e1+h2;
                            total=(sal*t)/100;
                            percent=("El porcentaje que recibira equivale a un "+t+"%")
                        }
                    break;
                    case "2":
                        if(discapacidad=="si" || discapacidad=="SI" || discapacidad=="Si"){
                           t=e1+h2+dis;
                            total=(sal*t)/100;
                            percent=("El porcentaje que recibira equivale a un "+t+"%")
                        }
                        else{
                            t=e1+h2;
                            total=(sal*t)/100;
                            percent=("El porcentaje que recibira equivale a un "+t+"%")
                        }
                    break;
                    case "3":
                        if(discapacidad=="si" || discapacidad=="SI" || discapacidad=="Si"){
                           t=e1+h3+dis;
                            total=(sal*t)/100;
                            percent=("El porcentaje que recibira equivale a un "+t+"%")
                        }
                        else{
                            t=e1+h3;
                            total=(sal*t)/100;
                            percent=("El porcentaje que recibira equivale a un "+t+"%")
                        }
                    break;

                    default:
                        if(discapacidad=="si" || discapacidad=="SI" || discapacidad=="Si"){
                            t=e1+h4+dis;
                             total=(sal*t)/100;
                             percent=("El porcentaje que recibira equivale a un "+t+"%")
                         }
                         else{
                             t=e1+h4;
                             total=(sal*t)/100;
                             percent=("El porcentaje que recibira equivale a un "+t+"%")
                         }
                    return percent;
                }
            break;

            case "2":
                switch(hijos){
                    case "1":
                        if(discapacidad=="si" || discapacidad=="SI" || discapacidad=="Si"){
                           t=e2+h1+dis;
                            total=(sal*t)/100;
                            percent=("El porcentaje que recibira equivale a un "+t+"%")
                        }
                        else{
                            t=e2+h1;
                            total=(sal*t)/100;
                            percent=("El porcentaje que recibira equivale a un "+t+"%")
                        }
                    break;
                    case "2":
                        if(discapacidad=="si" || discapacidad=="SI" || discapacidad=="Si"){
                           t=e2+h2+dis;
                            total=(sal*t)/100;
                            percent=("El porcentaje que recibira equivale a un "+t+"%")
                        }
                        else{
                            t=e2+h2;
                            total=(sal*t)/100;
                            percent=("El porcentaje que recibira equivale a un "+t+"%")
                        }
                    break;
                    case "2":
                        if(discapacidad=="si" || discapacidad=="SI" || discapacidad=="Si"){
                           t=e2+h2+dis;
                            total=(sal*t)/100;
                            percent=("El porcentaje que recibira equivale a un "+t+"%")
                        }
                        else{
                            t=e2+h2;
                            total=(sal*t)/100;
                            percent=("El porcentaje que recibira equivale a un "+t+"%")
                        }
                    break;
                    case "3":
                        if(discapacidad=="si" || discapacidad=="SI" || discapacidad=="Si"){
                           t=e2+h3+dis;
                            total=(sal*t)/100;
                            percent=("El porcentaje que recibira equivale a un "+t+"%")
                        }
                        else{
                            t=e2+h3;
                            total=(sal*t)/100;
                            percent=("El porcentaje que recibira equivale a un "+t+"%")
                        }
                    break;

                    default:
                        if(discapacidad=="si" || discapacidad=="SI" || discapacidad=="Si"){
                            t=e2+h4+dis;
                             total=(sal*t)/100;
                             percent=("El porcentaje que recibira equivale a un "+t+"%")
                         }
                         else{
                             t=e2+h4;
                             total=(sal*t)/100;
                             percent=("El porcentaje que recibira equivale a un "+t+"%")
                         }
                    
                }
                return percent;
            break;
            case "3":
                switch(hijos){
                    case "1":
                        if(discapacidad=="si" || discapacidad=="SI" || discapacidad=="Si"){
                           t=e3+h1+dis;
                            total=(sal*t)/100;
                            percent=("El porcentaje que recibira equivale a un "+t+"%")
                        }
                        else{
                            t=e3+h1;
                            total=(sal*t)/100;
                            percent=("El porcentaje que recibira equivale a un "+t+"%")
                        }
                    break;
                    case "2":
                        if(discapacidad=="si" || discapacidad=="SI" || discapacidad=="Si"){
                           t=e3+h2+dis;
                            total=(sal*t)/100;
                            percent=("El porcentaje que recibira equivale a un "+t+"%")
                        }
                        else{
                            t=e3+h2;
                            total=(sal*t)/100;
                            percent=("El porcentaje que recibira equivale a un "+t+"%")
                        }
                    break;
                    case "2":
                        if(discapacidad=="si" || discapacidad=="SI" || discapacidad=="Si"){
                           t=e3+h2+dis;
                            total=(sal*t)/100;
                            percent=("El porcentaje que recibira equivale a un "+t+"%")
                        }
                        else{
                            t=e3+h2;
                            total=(sal*t)/100;
                            percent=("El porcentaje que recibira equivale a un "+t+"%")
                        }
                    break;
                    case "3":
                        if(discapacidad=="si" || discapacidad=="SI" || discapacidad=="Si"){
                           t=e3+h3+dis;
                            total=(sal*t)/100;
                            percent=("El porcentaje que recibira equivale a un "+t+"%")
                        }
                        else{
                            t=e3+h3;
                            total=(sal*t)/100;
                            percent=("El porcentaje que recibira equivale a un "+t+"%")
                        }
                    break;

                    default:
                        if(discapacidad=="si" || discapacidad=="SI" || discapacidad=="Si"){
                            t=e3+h4+dis;
                             total=(sal*t)/100;
                             percent=("El porcentaje que recibira equivale a un "+t+"%")
                         }
                         else{
                             t=e3+h4;
                             total=(sal*t)/100;
                             percent=("El porcentaje que recibira equivale a un "+t+"%")
                         }
                    
                }
            break;

            default:
                percent=("Señor usuario, el servicio de apoyo y sostenimiento, solo esta disponible para los estratos 1,2 y 3, si pertenece a alguno de ellos verifique su informacion y envielo de nuevo")
                break
            return percent
        }

        porcentaje.innerHTML=(percent)
        totalresult.innerHTML=(print)
    })
})