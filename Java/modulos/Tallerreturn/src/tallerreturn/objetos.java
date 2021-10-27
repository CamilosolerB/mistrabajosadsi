
package tallerreturn;

import java.util.ArrayList;
import java.util.Scanner;
import javax.swing.JOptionPane;

public class objetos {
    Scanner sc = new Scanner(System.in);
    public ArrayList<String> primerpunto (){
    
        String nom,ape;
        float edad,pune,nsm,valmat,e1=0.25f,e2=0.15f,e3=0.1f,va=0f,v1=0.3f,v2=0.35f,v3=0.4f,v4=0.45f,c1=0.3f,c2=0.2f,c3=0.1f,c4=0.05f,con,vf;

        

        JOptionPane.showMessageDialog(null ,"Bienvenido al programa de becas de la universidad");
    JOptionPane.showMessageDialog(null ,"Para poder participar en este programa debe cumplir"
            + " alguno de los siguientes criterios");
    JOptionPane.showMessageDialog(null ,"1. Ser mayor de 15 años y menor de 25 \n2. Tener"
            + " ingresos maximo de 4 salarios minimos legales vigentes \n3. "
            + "Sacar un putnaje mayor de 80");
    JOptionPane.showMessageDialog(null, "Recuerda que estos valores se iran concatenando entre si,"
            + " asi que entre mas requisitos cumplas mejor");
    nom=JOptionPane.showInputDialog("Por favor indique su nombre");
    ape=JOptionPane.showInputDialog("Ahora indique su apellido");
    valmat= Float.parseFloat(JOptionPane.showInputDialog("Indique el valor de la matricula"));
    edad= Float.parseFloat(JOptionPane.showInputDialog("Por favor indique su edad"));
    pune= Float.parseFloat(JOptionPane.showInputDialog("Indique el puntaje obtenido"));
    nsm= Float.parseFloat(JOptionPane.showInputDialog("Por ultimo indique el numero de ingreso de salarios"
            + " minimos en su familia. Puede usar decimales"));
    
        ArrayList<String> resultado1 = new ArrayList<>();
        
            if(edad>=15 && edad<=25){
        if(edad>=15 && edad<=18){
            va=va+e1;
        }
            else if(edad>=19 && edad<=21){
                va=va+e2;
            }
                else{
                    va=va+e3;
                }
    }
    else{
        System.out.println(" ");
    }

    if(pune>=80 && pune<=100){
        if(pune>=80 && pune<=85){
            va=va+v1;
        }
            else if(pune>=86 && pune<=90){
                va=va+v2;
            }
                else if(pune>=91 && pune<=95){
                    va=va+v3;
                }
                    else{
                        va=va+v4;
                    }
    }
    else{
        System.out.println(" ");
    }
    if(nsm>=0 && nsm<=4){
        if (nsm<=1){
            va=va+c1;   
        }
            else if (nsm<=2){
                va=va+c2;   
            }   
                else if (nsm<=3){
                    va=va+c3;   
                }
                    else{
                        va=va+c4;   
                    }
    }
    else{
        System.out.println(" ");
    }
    vf=valmat-(valmat*va);
    con=va*100;
    String valmat1 = Float.toString(valmat);
    String edad1 = Float.toString(edad);
    String pune1 = Float.toString(pune);
    String nsm1 = Float.toString(nsm);
    String vf1 = Float.toString(vf);
    String con1 = Float.toString(con);
    
    resultado1.add(nom);
    resultado1.add(ape);
    resultado1.add(valmat1);
    resultado1.add(edad1);
    resultado1.add(pune1);
    resultado1.add(nsm1);
    resultado1.add(vf1);
    resultado1.add(con1);
    
    return resultado1;
    
    
    }
    
    public ArrayList<Double> punto3(float sal, float hor){
    
        ArrayList<Double> resultado3 = new ArrayList<>();
        
        double vh,par=0.09,vf,pri=0.0833,ces=0.0833,intc=0.01,vac=0.0417,salud=0.04,pen=0.04,res,difres;
        
        if(hor>40){
            
            res=hor-40;
            difres=(res*0.015)+res;
            vh=(int)40+difres;
            vh=vh*sal;
            par=vh*par;
            vf=vh-par;
            pri=vh*pri;
            ces=vh*ces;
            intc=vh*intc;
            vac=vh*vac;
            salud=vh*salud;        
            pen=vh*pen;        
            vf=vf-pri-ces-intc-vac-salud-pen;
            resultado3.add(vh);
            resultado3.add(par);
            resultado3.add(pri);
            resultado3.add(ces);
            resultado3.add(intc);
            resultado3.add(vac);
            resultado3.add(salud);
            resultado3.add(pen);
            resultado3.add(vf);
        }
        else{
            vh=sal*hor;
            par=vh*par;
            vf=vh-par;
            pri=vh*pri;
            ces=vh*ces;
            intc=vh*intc;
            vac=vh*vac;
            salud=vh*salud;        
            pen=vh*pen;        
            vf=vf-pri-ces-intc-vac-salud-pen;
            resultado3.add(vh);
            resultado3.add(par);
            resultado3.add(pri);
            resultado3.add(ces);
            resultado3.add(intc);
            resultado3.add(vac);
            resultado3.add(salud);
            resultado3.add(pen);
            resultado3.add(vf);
        }
        
        return resultado3;
    }    
}