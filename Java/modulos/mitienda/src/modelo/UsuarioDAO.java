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
}
