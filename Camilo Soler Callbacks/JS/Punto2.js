

function Par_e_impar(){
    var age;
    age=parseInt(prompt("Por favor indique el año que desea consultar"))
    if(age% 4==0 && age%100!==0 || age%400==0){
        alert(age+" Es año bisiesto")
    }
    else{
        alert(age+" No es un año bisiesto")
    }
}


function callback(){
    Par_e_impar()
}

callback(Par_e_impar)