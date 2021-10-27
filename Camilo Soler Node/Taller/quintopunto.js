

const fibonachi=()=>{

    let end=8;
    let Myarray=[0,1];

    for(let i=2;i<=end;i++){
        Myarray[i]= Myarray[ i - 1 ] + Myarray[i - 2]
    }


    return Myarray;

    //para cambiar el limite de la serie tiene que cambiar el limit
}


exports.fibonachi = fibonachi