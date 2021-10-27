$(document).ready(function(){

    $("#btn").on("click",function(){
            var SB,HED,HEN,HEF,HEDD,DNT,SB1,HED1,HEN1,HEF1,HEDD1,DNT1,Totalingresos,Totalegresos,Totalfinal,Ti,Te,Tf,THE,TSyP,TDNT;
            
            SB=document.getElementById("SB")
            console.log(SB)
            HED= document.getElementById("HED")
            console.log(HED)
            HEN=document.getElementById("HEN")
            HEF=document.getElementById("HEF")
            HEDD=document.getElementById("HEDD")
            DNT=document.getElementById("DNT")

            SB1=document.getElementById("SB").value
            console.log(SB1)
            HED1= document.getElementById("HED").value
            
            HEN1=document.getElementById("HEN").value
            HEF1=document.getElementById("HEF").value
            HEDD1=document.getElementById("HEDD").value
            DNT1=document.getElementById("DNT").value
            Totalingresos=document.getElementById("Totalingresos")
            Totalegresos=document.getElementById("Totalegresos")
            Totalfinal=document.getElementById("Totalfinal")



            SD=SB1/30;
            SH=SD/8;
            HHED=SH*0.25+SH;
            console.log(HHED)
            HHEN=SH*0.35+SH;
            HHEF=SH*0.75+SH;
            HHEDD=SH+SH
            HED=HHEDD*HED1;
            HEN=HHEN*HEN1;
            HEF=HHEF*HEF1;
            HEDD=HHEDD*HEDD1;
            THE=HED+HEN+HEF+HEDD;
            console.log(THE)
            TDNT=SD*DNT1;
            console.log(TDNT)
            DESC=SB1-TDNT
            TB=DESC+THE;
            TSyP=TB*0.08
            TF=TB-TSyP
            Ti=THE+parseInt(SB1)
            Te=TSyP
            console.log(Totalingresos)
            Totalingresos.innerHTML+=("El total de ingresos se obtiene del salario basico equivalente a "+SB1+" y el total de las horas extras que es "+THE+". Dando un total de "+Ti)
            Totalingresos.style.backgroundColor=("#00f")

            Totalegresos.innerHTML+=("Los egresos provienen de los dias no trabajados que en su caso fueron "+DNT1+" descontando de su salario $"+TDNT+" ademas de su aporte a la salud y pension que es en total el 8% de su salario, siendo "+TSyP)
            Totalegresos.style.backgroundColor=("#f00")

            Totalfinal.innerHTML+=("Con todo lo anterior su salario final equivale a "+TF)
            //alert('Su salario basico es de: $'+DESC+', debido a que usted fallo '+DNT+'dias, el total de ingresos por horas extras es de $'+THE+',por salud se le descuenta 4% y por pension 4% dando un descuento de: $'+TSyP+' ,dando un salario total de: $'+TF+' pesos')
            

})

})
