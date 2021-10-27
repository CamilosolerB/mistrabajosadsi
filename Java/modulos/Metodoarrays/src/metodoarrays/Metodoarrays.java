
package metodoarrays;

import java.util.ArrayList;
import javax.swing.JOptionPane;


public class Metodoarrays {

    public static void main(String[] args) {
        
        /*int des=2;
        datos dat = new datos();
        
        switch(des){
        
            case 1:
         
        ArrayList<String> list = new ArrayList<>();
        list=dat.listadatos();
        for(int i=0;i<list.size();i++){
            //JOptionPane.showMessageDialog(null, lista.get(i));
            System.out.println(list.get(i));
    }
        break;
           case 2:
                ArrayList<Integer> conteo = new ArrayList<>();
                conteo=dat.colecta();
        for(int i=0;i<conteo.size();i++){
            System.out.println(conteo.get(i));
        }
            break;*/
        
        int d=100;
        
        String u="pepe",c="123",r="Cliente", e = "Activo";
        usuario us= new usuario(d, u, c, r, e);
        int res;
        res=us.getdoc();
        JOptionPane.showMessageDialog(null, res);
        String nom,cla,rol,est;
        nom=us.getnom();
        cla=us.getcla();
        rol=us.getrol();
        est=us.getest();
        JOptionPane.showMessageDialog(null, nom+"\n"+cla+"\n"+rol+"\n"+est);
    }   
    }
    
