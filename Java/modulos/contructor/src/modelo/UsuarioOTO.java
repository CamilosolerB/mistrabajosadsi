/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package modelo;

/**
 *
 * @author caans
 */
public class UsuarioOTO {
    private String usuario;
    private String clave;
    
    
    public UsuarioOTO(String u,String c){
        usuario=u;
        clave=c;
    }
    
    public String getusuario(){
        return usuario;
    }
    
    public String getclave(){
        return clave;
    }
}
