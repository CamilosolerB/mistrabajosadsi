
package tallerreturn;

import java.util.ArrayList;
import java.util.Scanner;
import javax.swing.JOptionPane;


public class Tallerreturn {


    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        objetos ob = new objetos();
        
                int des;
        
        des = Integer.parseInt(JOptionPane.showInputDialog("Escriba el ejercicio al cual desea acceder\n1.Descuentos\n2.Excursion\n3.Nomina"));
        
        switch(des){
            
            case 1:
                ArrayList<String> resultado1 = new ArrayList<>();
                resultado1 = ob.primerpunto();
                String resultado[] = new String [8];
                    for(int i=0;i<resultado1.size();i++){
                        resultado[i]=resultado1.get(i);
                    }
                
                JOptionPane.showMessageDialog(null ,"Señor(a)"+resultado[0]+" "+resultado[1]+" tenga en cuenta la tabla de valores que se proporciono al inicio del ejercicio.\nPor lo tanto el total de porcentaje de descuento "
                + "que usted recibira es de "+resultado[7]+"% y validando que su matricula "
                + "es de "+resultado[2]+" el valor a pagar es de "+resultado[6]);
            break;
            
            case 2:

                
             break;
             
            case 3:
                
                float sal,hor;
                
                JOptionPane.showMessageDialog(null, "Bienvenido al sistema de pago de la"
                        + " universidad del Bosque");
                hor=Float.parseFloat(JOptionPane.showInputDialog("Ahora escriba el numero de horas que trabajo"));
                sal=Float.parseFloat(JOptionPane.showInputDialog("Escribe el valor que gana por hora"));

                
                //tallermetodos p3 = new tallermetodos();
                //p3.punto3(sal,hor);
                
                ArrayList<Double> resultado3 = new ArrayList<>();
                resultado3=ob.punto3(sal, hor);
                double resultados[]= new double [9];
                
                for(int i=0;i<resultado3.size();i++){
                    resultados[i]=resultado3.get(i);
                }
            JOptionPane.showMessageDialog(null, "Su salario bruto es de: "+resultados[0]+
       "\nEl descuento de paraficales es de "+resultados[1]+"\nJunto a los "
               + "otros descuentos  como lo es: ");
            JOptionPane.showMessageDialog(null, "Prima de servicios "+resultados[2]+"\n"
            + "Cesantias "+resultados[3]+"\nInteres de cesantias "+resultados[4]
            +"\nVacaciones "+resultados[5]+"\nSalud "+resultados[6]+"\nPension "+resultados[7]);
            JOptionPane.showMessageDialog(null, "El saldo final con todos los descuentos aplicados"
                    + "es de $"+resultados[8]);
                
                
            break;
            
            default:
                System.out.println("Esta pagina no existe");
            break;

    }
    
}
}
