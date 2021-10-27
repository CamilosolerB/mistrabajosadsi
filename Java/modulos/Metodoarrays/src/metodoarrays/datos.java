
package metodoarrays;

import java.util.ArrayList;
import javax.swing.JOptionPane;

public class datos {
    
    public ArrayList<String> listadatos(){
    
       ArrayList<String>lista= new ArrayList<>();
        String documento="100";
        String n="pepe";
        String a="perez";
        
        lista.add(documento);
        lista.add(n);
        lista.add(a);
        
        return lista;
        

    
    }
    
    public ArrayList<Integer> colecta(){
    
        int cont;
        ArrayList<Integer> conteo = new ArrayList<>();
       for(int i=0;i<10;i++){
          cont=Integer.parseInt(JOptionPane.showInputDialog("Escriba el numero "+(i+1)));
          conteo.add(cont);
       }
    return conteo;
    }
    
}
