const primos=()=>{
    let total;
    let Myarray=[ 1 , 2 , 3 , 11 , 5 , 6 , 7 , 8 , 13 , 23, 15];
    total=Myarray.length
    console.log(total)
for(I=0;I<=total;I++){

    let improt=Myarray[I]

    if(improt % 2==!0 && improt % 3==!0  || improt ==5 || improt==7 || improt ==2 || improt ==3 && improt==!1 ){
        
        console.log(improt+" es un numero primo");
        
    }
    else{
        console.log(improt+" no es numero primo")
    }
 }
}

    exports.primos = primos;