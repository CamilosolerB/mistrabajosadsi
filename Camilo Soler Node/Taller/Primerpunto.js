const changeposition=()=>{

    let valor,v1,v2,v3,v4,r,resultado;

    valor="5432"
    v1= valor.substr(0,1);
    v2= valor.substr(1,1);
    v3= valor.substr(2,1);
    v4= valor.substr(3,3);
    
    r=[v1,v2,v3,v4]

    resultado= r.reverse();
    return resultado;

}
    exports.changeposition = changeposition;