/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package modelo;

import com.mysql.cj.xdevapi.PreparableStatement;
import controlador.conexion;
import java.sql.*;
import java.util.logging.Level;
import java.util.logging.Logger;
import javax.swing.JOptionPane;

/**
 *
 * @author caans
 */
public class UsuarioDAO {
    conexion con = new conexion();
    Connection cnn = con.connectdb();
    PreparedStatement ps;
    ResultSet rs;
    UsuarioDTO uss;

    public boolean insertarusuario(UsuarioDTO dto){
        
        boolean dat=false;
        try {
            ps=cnn.prepareStatement("INSERT INTO usuarios VALUES(?,?,?,?,?)");
        ps.setLong(1, dto.getCedula());
        ps.setString(2, dto.getEmail());
        ps.setString(3, dto.getNombre());
        ps.setString(4, dto.getPassword());
        ps.setString(5, dto.getUsuario());
        if(ps.executeUpdate()>0){
            dat=true;
        }
        } catch (SQLException ex) {
            JOptionPane.showMessageDialog(null,"Error en la insersion "+ex);
        }
        return dat;
    }
    
    public boolean insertarcliente(ClienteDTO cto){
        
        boolean req=false;
        
        try {
            ps=cnn.prepareStatement("INSERT INTO clientes VALUES(?,?,?,?,?)");
            ps.setLong(1, cto.getCedula());
            ps.setString(2, cto.getDireccion());
            ps.setString(3, cto.getEmail());
            ps.setString(4, cto.getNombre());
            ps.setString(5, cto.getTelefono());
            if(ps.executeUpdate()>0){
                req=true;
            }
        } catch (SQLException ex) {
            JOptionPane.showMessageDialog(null, "Error en la insersion : "+ex);
        }
     return req;
    }
    
    public boolean insertarproveedor(ProveedorDTO pdto){
    
    boolean res=false;
    
        try {
            ps=cnn.prepareStatement("INSERT INTO proveedores VALUES(?,?,?,?,?)");
            ps.setLong(1, pdto.getNit());
            ps.setString(2, pdto.getCiudad());
            ps.setString(3, pdto.getDireccion());
            ps.setString(4, pdto.getNombre());
            ps.setString(5, pdto.getTelefono());
            
            if(ps.executeUpdate()>0){
                res=true;
            }
        } catch (SQLException ex) {
            JOptionPane.showMessageDialog(null, "Error en la insersion :"+ex);
        }
    
    
    return res;
        
    }
    
    public boolean actualizarusu(UsuarioDTO udto){
    
        boolean y=false;
        
        try {
            ps=cnn.prepareStatement("UPDATE usuarios SET email_usuario=?,nombre_usuario=?,"
                    + "password=?,usuario=? WHERE cedula_usuarios=?");
                    ps.setString(1, udto.getEmail());
                    ps.setString(2, udto.getNombre());
                    ps.setString(3, udto.getPassword());
                    ps.setString(4, udto.getUsuario());
                    ps.setLong(5, udto.getCedula());
                    
                if(ps.executeUpdate()>0){
                    y=true;
                }
        } catch (SQLException ex) {
            JOptionPane.showMessageDialog(null, "Error en la insersion "+ex);
            
        }
        
        return y;
    
    }
    public boolean deleteusu (UsuarioDTO udto) {
        
        boolean x=false;
        
                try {
            ps=cnn.prepareStatement("DELETE FROM usuarios WHERE cedula_usuarios=?");
                    ps.setLong(1, udto.getCedula());
                    
                if(ps.executeUpdate()>0){
                    x=true;
                }
        } catch (SQLException ex) {
            JOptionPane.showMessageDialog(null, "Error en la eliminacion: "+ex);
            
        }
        
        return x;
    }
    
    public UsuarioDTO consultausuario ( UsuarioDTO udto){
        try {
            ps=cnn.prepareStatement("SELECT * FROM usuarios WHERE cedula_usuarios=?");
            ps.setLong(1, udto.getCedula());
            rs=ps.executeQuery();
            
            if(rs.next()){
                uss= new UsuarioDTO(rs.getLong(1), rs.getString(2), rs.getString(3), rs.getString(4), rs.getString(5));
            }
        } catch (SQLException e) {
            JOptionPane.showMessageDialog(null, "error"+ e);
        }
        
        System.out.println("dtro       "+uss);
        return uss;
    }
}
