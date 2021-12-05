/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package controlador;

import modelo.ClienteDTO;
import modelo.UsuarioDAO;
import vista.Ventas;
import modelo.VentasDTO;
import vista.viscli;




public class ventas {
    Ventas vent;
    long nit;
    VentasDTO us;
    UsuarioDAO usdao;
    VentasDTO ust;
    long ce;
    ClienteDTO cli;
    ClienteDTO clio;
    
    public ventas (Ventas vent){
        this.vent = vent;
    }
    
    public void consultar(){
        String dir,ema,nom,tel;
        ce=Long.parseLong(vent.getCedula1().getText());
        cli= new ClienteDTO(ce);
        usdao= new UsuarioDAO();
        clio=usdao.consultacliente(cli);
        nom=clio.getNombre();
        vent.getNombre().setText(String.valueOf(nom));
       
    
}
    public void consultaproductos(){
        long cod1,cod2,cod3;
        
    }
            
}
