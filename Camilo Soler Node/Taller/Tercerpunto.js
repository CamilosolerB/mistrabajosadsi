const universidad=()=>{

    var sal=908526,nom,ape,edad,score,pfam
    var e1=parseInt(25),e2=parseInt(15),e3=parseInt(10);
    var if1=parseInt(30),if2=parseInt(20),if3=parseInt(10),if4=parseInt(5);
    var p1=parseInt(30),p2=parseInt(35),p3=parseInt(40),p4=parseInt(45);

    console.log("UNiversidad el nuevo mundo");
    nom="Camilo";
    ape="Soler";
    edad= 16;
    score=100;
    pfam=800000;
    console.log("Nienvenido señor(a)"+nom+" "+ape+" su edad es de "+edad+" años, su puntaje en la pruba fue de "+score+" y el presupuesto familiar es de "+pfam);
    if(edad<=14){
        console.log("Esta edad no es valida para recibir una beca");
    }
    else if(edad<=18){

        if(pfam<=sal){

            if(score<80){

                t=("No aplicas para beca");
            }
            else if(score<86){
                t=("El porcentaje de descuento de la baca es del ")+(e1+if1+p1)+("%");
            }
            else if(score<91){
                t=("El porcentaje de descuento de la baca es del ")+(e1+if1+p2)+("%");
            }
            else if(score<96){
                t=("El porcentaje de descuento de la baca es del ")+(e1+if1+p3)+("%");
            }
            else if(score<=100){
                t=("El porcentaje de descuento de la baca es del ")+(e1+if1+p4)+("%");
            }
            else{
                t=("Verifique que haya ecrito bien el puntaje, operacion no valida");
            }
        }

        
        else if(pfam<=(sal*2)){

            if(score<80){

                t=("No aplicas para beca");
            }
            else if(score<86){
                t=("El porcentaje de descuento de la baca es del ")+(e1+if2+p1)+("%");
            }
            else if(score<91){
                t=("El porcentaje de descuento de la baca es del ")+(e1+if2+p2)+("%");
            }
            else if(score<96){
                t=("El porcentaje de descuento de la baca es de ")+(e1+if2+p3)+("%");
            }
            else if(score<=100){
                t=("El porcentaje de descuento de la baca es del ")+(e1+if2+p4)+("%");
            }
            else{
                t=("Verifique que haya ecrito bien el puntaje, operacion no valida");
            }
        }
        
        else if(pfam<=(sal*3)){

            if(score<80){

                t=("No aplicas para beca");
            }
            else if(score<86){
                t=("El porcentaje de descuento de la baca es del ")+(e1+if3+p1)+("%");
            }
            else if(score<91){
                t=("El porcentaje de descuento de la baca es del ")+(e1+if3+p2)+("%");
            }
            else if(score<96){
                t=("El porcentaje de descuento de la baca es del ")+(e1+if3+p3)+("%");
            }
            else if(score<=100){
                t=("El porcentaje de descuento de la baca es del ")+(e1+if3+p4)+("%");
            }
            else{
                t=("Verifique que haya ecrito bien el puntaje, operacion no valida");
            }
        }
    
        else if(pfam<=(sal*4)){

            if(score<80){

                t=("No aplicas para beca");
            }
            else if(score<86){
                t=("El porcentaje de descuento de la baca es del ")+(e1+if4+p1)+("%");
            }
            else if(score<91){
                t=("El porcentaje de descuento de la baca es del ")+(e1+if4+p2)+("%");
            }
            else if(score<96){
                t=("El porcentaje de descuento de la baca es del ")+(e1+if4+p3)+("%");
            }
            else if(score<=100){ 
                t=("El porcentaje de descuento de la baca es del ")+(e1+if4+p4)+("%");
            }
            else{
                t=("Verifique que haya ecrito bien el puntaje, operacion no valida");
            }
        }
    
    }
        else if(edad<=21){

            if(pfam<=sal){

                if(score<80){
    
                    t=("No aplicas para beca");
                }
                else if(score<86){
                    t=("El porcentaje de descuento de la baca es del ")+(e2+if1+p1)+("%");
                }
                else if(score<91){
                    t=("El porcentaje de descuento de la baca es del ")+(e2+if1+p2)+("%");
                }
                else if(score<96){
                    t=("El porcentaje de descuento de la baca es del ")+(e2+if1+p3)+("%");
                }
                else if(score<=100){
                    t=("El porcentaje de descuento de la baca es del ")+(e2+if1+p4)+("%");
                }
                else{
                    t=("Verifique que haya ecrito bien el puntaje, operacion no valida");
                }
            }
    
            
            else if(pfam<=(sal*2)){
    
                if(score<80){
    
                    t=("No aplicas para beca");
                }
                else if(score<86){
                    t=("El porcentaje de descuento de la baca es del ")+(e2+if2+p1)+("%");
                }
                else if(score<91){
                    t=("El porcentaje de descuento de la baca es del ")+(e2+if2+p2)+("%");
                }
                else if(score<96){
                    t=("El porcentaje de descuento de la baca es del ")+(e2+if2+p3)+("%");
                }
                else if(score<=100){
                    t=("El porcentaje de descuento de la baca es del ")+(e2+if2+p4)+("%");
                }
                else{
                    t=("Verifique que haya ecrito bien el puntaje, operacion no valida");
                }
            }
            
            else if(pfam<=(sal*3)){
    
                if(score<80){
    
                    t=("No aplicas para beca");
                }
                else if(score<86){
                    t=("El porcentaje de descuento de la baca es del ")+(e2+if3+p1)+("%");
                }
                else if(score<91){
                    t=("El porcentaje de descuento de la baca es del ")+(e2+if3+p2)+("%");
                }
                else if(score<96){
                    t=("El porcentaje de descuento de la baca es del ")+(e2+if3+p3)+("%");
                }
                else if(score<=100){
                    t=("El porcentaje de descuento de la baca es del ")+(e2+if3+p4)+("%");
                }
                else{
                    t=("Verifique que haya ecrito bien el puntaje, operacion no valida");
                }
            }
        
            else if(pfam<=(sal*4)){
    
                if(score<80){
    
                    t=("No aplicas para beca");
                }
                else if(score<86){
                    t=("El porcentaje de descuento de la baca es del ")+(e2+if4+p1)+("%");
                }
                else if(score<91){
                    t=("El porcentaje de descuento de la baca es del ")+(e2+if4+p2)+("%");
                }
                else if(score<96){
                    t=("El porcentaje de descuento de la baca es del ")+(e2+if4+p3)+("%");
                }
                else if(score<=100){
                    t=("El porcentaje de descuento de la baca es del ")+(e2+if4+p4)+("%");
                }
                else{
                    t=("Verifique que haya ecrito bien el puntaje, operacion no valida");
                }
            }
        }        
            else if(edad<=25){

                
            if(pfam<=sal){

                if(score<80){
    
                    t=("No aplicas para beca");
                }
                else if(score<86){
                    t=("El porcentaje de descuento de la baca es del ")+(e3+if1+p1)+("%");
                }
                else if(score<91){
                    t=("El porcentaje de descuento de la baca es del ")+(e3+if1+p2)+("%");
                }
                else if(score<96){
                    t=("El porcentaje de descuento de la baca es del ")+(e3+if1+p3)+("%");
                }
                else if(score<=100){
                    t=("El porcentaje de descuento de la baca es del ")+(e3+if1+p4)+("%");
                }
                else{
                    t=("Verifique que haya ecrito bien el puntaje, operacion no valida");
                }
            }
    
            
            else if(pfam<=(sal*2)){
    
                if(score<80){
    
                    t=("No aplicas para beca");
                }
                else if(score<86){
                    t=("El porcentaje de descuento de la baca es del ")+(e3+if2+p1)+("%");
                }
                else if(score<91){
                    t=("El porcentaje de descuento de la baca es del ")+(e3+if2+p2)+("%");
                }
                else if(score<96){
                    t=("El porcentaje de descuento de la baca es del ")+(e3+if2+p3)+("%");
                }
                else if(score<=100){
                    t=("El porcentaje de descuento de la baca es del ")+(e3+if2+p4)+("%");
                }
                else{
                    t=("Verifique que haya ecrito bien el puntaje, operacion no valida");
                }
            }
            
            else if(pfam<=(sal*3)){
    
                if(score<80){
    
                    t=("No aplicas para beca");
                }
                else if(score<86){
                    t=("El porcentaje de descuento de la baca es del ")+(e3+if3+p1)+("%");
                }
                else if(score<91){
                    t=("El porcentaje de descuento de la baca es del ")+(e3+if3+p2)+("%");
                }
                else if(score<96){
                    t=("El porcentaje de descuento de la baca es del ")+(e3+if3+p3)+("%");
                }
                else if(score<=100){
                    t=("El porcentaje de descuento de la baca es del ")+(e3+if3+p4)+("%");
                }
                else{
                    t=("Verifique que haya ecrito bien el puntaje, operacion no valida");
                }
            }
        
            else if(pfam<=(sal*4)){
    
                if(score<80){
    
                    t=("No aplicas para beca");
                }
                else if(score<86){
                    t=("El porcentaje de descuento de la baca es del ")+(e3+if4+p1)+("%");
                }
                else if(score<91){
                    t=("El porcentaje de descuento de la baca es del ")+(e3+if4+p2)+("%");
                }
                else if(score<96){
                    t=("El porcentaje de descuento de la baca es del ")+(e3+if4+p3)+("%");
                }
                else if(score<=100){
                    t=("El porcentaje de descuento de la baca es del ")+(e3+if4+p4)+("%");
                }
                else{
                    t=("Verifique que haya ecrito bien el puntaje, operacion no valida");
                }
            }
            }

            else{
                t=("La edad no es valida para recibir una beca");
            }

            return t

}



exports.universidad = universidad