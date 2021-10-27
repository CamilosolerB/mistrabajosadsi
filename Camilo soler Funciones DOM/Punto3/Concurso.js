$(document).ready(function(){

    $("#btn").on("click",function(){
alert("concurso nacional de perros");
var V,P1,P2,P3,V2,V3,WinPit,WinRot,WinBuly,WinLab,WinGold,WinDob,WinDog;

P1=document.getElementById("P1").value
console.log(P1)
P2=document.getElementById("P2").value
console.log(P2)
P3=document.getElementById("P3").value
console.log(P3)
WinPit=document.getElementById("WinPit")
WinBuly=document.getElementById("WinBuly")
WinRot=document.getElementById("WinRot")
WinLab=document.getElementById("WinLab")
WinGold=document.getElementById("WinGold")
WinDob=document.getElementById("WinDob")
WinDog=document.getElementById("WinDog")
V2=800000;
V3=200000;
switch(P1){
    case "Pitbull":
        
    V=6000000*2
    WinPit.innerHTML=("El "+P1+" gana "+V)
    WinPit.style.background=("#F1C40F")
    break

    case "Buly":
    
    V=6500000*2
    WinBuly.innerHTML=("El "+P1+" gana "+V)
    WinBuly.style.background=("#F1C40F")
    break
    case "Rottwhiller":
        
    V=4000000*2
    WinRot.innerHTML=("El "+P1+" gana "+V)
    WinRot.style.background=("#F1C40F")
    break
    case "Labrador retriever":
       
    V=3500000*2
    WinLab.innerHTML=("El "+P1+" gana "+V)
    WinLab.style.background=("#F1C40F")
    break
    case "Golden retriever":
        ;
    V=3500000*2
    WinGold.innerHTML=("El "+P1+" gana "+V)
    WinGold.style.background=("#F1C40F")
    break

    case "Doberman":
        
    V=5000000*2
    WinDob.innerHTML=("El "+P1+" gana "+V)
    WinDob.style.background=("#F1C40F")
    break

    case "Dogo argentino":
        
    V=5500000*2
    WinDog.innerHTML=("El "+P1+" gana "+V)
    WinDog.style.background=("#F1C40F")
    break
}
        switch(P2){
            case "Pitbull":
        
                V=6000000+V2
                WinPit.innerHTML=("El "+P2+" gana "+V)
                WinPit.style.background=("#EC7063")
                break
            
                case "Buly":
                
                V=6500000+V2
                WinBuly.innerHTML=("El "+P2+" gana "+V)
                WinBuly.style.background=("#EC7063 ")
                break
                case "Rottwhiller":
                    
                V=4000000+V2
                WinRot.innerHTML=("El "+P2+" gana "+V)
                WinRot.style.background=("#EC7063 ")
                break
                case "Labrador retriever":
                   
                V=3500000+V2
                WinLab.innerHTML=("El "+P2+" gana "+V)
                WinLab.style.background=("#EC7063")
                break
                case "Golden retriever":
                    ;
                V=3500000+V2
                WinGold.innerHTML=("El "+P2+" gana "+V)
                WinGold.style.background=("#EC7063")
                break
            
                case "Doberman":
                    
                V=5000000+V2
                WinDob.innerHTML=("El "+P2+" gana "+V)
                WinDob.style.background=("#EC7063 ")
                break
            
                case "Dogo argentino":
                    
                V=5500000+V2
                WinDog.innerHTML=("El "+P2+" gana "+V)
                WinDog.style.background=("#EC7063")
                break
        }
        switch(P3){
            case "Pitbull":
        
                V=6000000+V3
                WinPit.innerHTML=("El "+P3+" gana "+V)
                WinPit.style.background=("#2874A6")
                break
            
                case "Buly":
                
                V=6500000+V3
                WinBuly.innerHTML=("El "+P3+" gana "+V)
                WinBuly.style.background=("#2874A6")
                break
                case "Rottwhiller":
                    
                V=4000000+V3
                WinRot.innerHTML=("El "+P3+" gana "+V)
                WinRot.style.background=("#2874A6")
                break
                case "Labrador retriever":
                   
                V=3500000+V3
                WinLab.innerHTML=("El "+P3+" gana "+V)
                WinLab.style.background=("#2874A6")
                break
                case "Golden retriever":
                    ;
                V=3500000+V3
                WinGold.innerHTML=("El "+P3+" gana "+V)
                WinGold.style.background=("#2874A6")
                break
            
                case "Doberman":
                    
                V=5000000+V3
                WinDob.innerHTML=("El "+P3+" gana "+V)
                WinDob.style.background=("#2874A6")
                break
            
                case "Dogo argentino":
                    
                V=5500000+V3
                WinDog.innerHTML=("El "+P3+" gana "+V)
                WinDog.style.background=("#2874A6")
                break
        }

    })
})