


package metodoarrays;

import java.util.ArrayList;

public class usuario {
    private int documento;
    private String nomusu;
    private String clave;
    private String rol;
    private String estado;
    
    
        public usuario(int documento,String nomusu,String clave,String rol, String estado){
    
        this.documento=documento;
        this.nomusu=nomusu;
        this.clave=clave;
        this.rol=rol;
        this.estado=estado;
    
    }



public usuario(int documento){
        this.nomusu=nomusu;
        this.documento=documento;
    }

public usuario(){

}

public int getdoc(){
    return documento;
}
public String getnom(){
    return nomusu;
}
public String getcla(){
    return clave;
}
public String getrol(){
    return rol;
}
public String getest(){
    return estado;
}

}