/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package modelo;

import java.util.ArrayList;
import javax.swing.JOptionPane;
/**
 *
 * @author caans
 */
public class UsuarioDAO {
    
    public String capturardatos(UsuarioOTO us){
        String x,u,c;
        ArrayList<UsuarioOTO> list = new ArrayList<>();
        list.add(us);
        u=us.getusuario();
        c=us.getclave();
        JOptionPane.showMessageDialog(null, u+"------>"+c);
        
        if(list.size()>0){
            x="Hay datos";
        }
        else{
            x="No hay datos";
        }
        return x;
    }
    
}
