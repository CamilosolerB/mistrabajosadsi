/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package controlador;

import java.util.ArrayList;
import modelo.ClienteDTO;
import modelo.UsuarioDAO;
import modelo.productosDTO;
import vista.Ventas;
import modelo.VentasDTO;
import vista.viscli;





public class ventas {
    Ventas vent;
    long nit,ce;
    VentasDTO us;
    UsuarioDAO usdao;
    VentasDTO ust;
    ClienteDTO cli;
    ClienteDTO clio;
    productosDTO pto;
    productosDTO ptoo;
    
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
    public void consultaproducto1(){
        String nomb;
        double val,iva;
        long cod1;
        cod1=Long.parseLong(vent.getCodigo1().getText());
        pto= new productosDTO(cod1);
        usdao = new UsuarioDAO();
        ptoo=usdao.consultaproductos(pto);
        nomb=ptoo.getNombre();
        val=ptoo.getPreciov();
        iva=ptoo.getIva();
        vent.getIva1().setText(String.valueOf(iva));
        vent.getNombre1().setText(String.valueOf(nomb));
        vent.getTotal4().setText(String.valueOf(val));
         
    }
    
    public void consultaproducto2(){
        String nomb;
        double val,iva;
        long cod1;
        cod1=Long.parseLong(vent.getCodigo2().getText());
        pto= new productosDTO(cod1);
        usdao = new UsuarioDAO();
        ptoo=usdao.consultaproductos(pto);
        nomb=ptoo.getNombre();
        val=ptoo.getPreciov();
        iva=ptoo.getIva();
        vent.getIva2().setText(String.valueOf(iva));
        vent.getNombre2().setText(String.valueOf(nomb));
        vent.getTotal2().setText(String.valueOf(val));
         
    }
    public void consultaproducto3(){
        String nomb;
        double val,iva;
        long cod1;
        cod1=Long.parseLong(vent.getCodigo3().getText());
        pto= new productosDTO(cod1);
        usdao = new UsuarioDAO();
        ptoo=usdao.consultaproductos(pto);
        nomb=ptoo.getNombre();
        val=ptoo.getPreciov();
        iva=ptoo.getIva();
        vent.getIva3().setText(String.valueOf(iva));
        vent.getNombre3().setText(String.valueOf(nomb));
        vent.getTotal1().setText(String.valueOf(val));
         
    }
    
    public void insertarventa(){
        long codigo,cedula;
        double ivat,tovt,valvt,codpro1,iva1,tov1,valv1,codpro2,iva2,tov2,valv2,codpro3,iva3,tov3,valv3;
        int cant1,cant2,cant3;
    
    
    }
            
}
