import java.util.Scanner;

public class ejercicio1{

    public static void main(String[] args) {
Scanner sc = new Scanner(System.in);
        String nom,ape;
        double edad,pune,nsm,valmat,e1=0.25,e2=0.15,e3=0.1,va=0,v1=0.3,v2=0.35,v3=0.4,v4=0.45,c1=0.3,c2=0.2,c3=0.1,c4=0.05,con,vf;

        

    System.out.println("Bienvenido al programa de becas de la universidad");
    System.out.println("Para poder participar en este programa debe cumplir alguno de los siguientes criterios");
    System.out.println("1. Ser mayor de 15 años y menor de 25 \n2. Tener ingresos maximo de 4 salarios minimos legales vigentes \n3. Sacar un putnaje mayor de 80");
    System.out.println("Recuerda que estos valores se iran concatenando entre si, asi que entre mas requisitos cumplas mejor");
    System.out.println("Por favor indique su nombre");
    nom=sc.next();
    System.out.println("Ahora indique su apellido");
    ape=sc.next();
    System.out.println("Indique el valor de la matricula");
    valmat=sc.nextDouble();
    System.out.println("Por favor indique su edad");
    edad=sc.nextDouble();
    System.out.println("Indique el puntaje obtenido");
    pune=sc.nextDouble();
    System.out.println("Por ultimo indique el numero de ingreso de salarios minimos en su familia. Puede usar decimales");
    nsm=sc.nextDouble();

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
    System.out.println("Señor(a)"+nom+" "+ape+" tenga en cuenta la tabla de valores que se proporciono al inicio del ejercicio");
    System.out.println("Por lo tanto el total de porcentaje de descuento que usted recibira es de "+con+"% y validando que su matricula es de "+valmat+" el valor a pagar es de "+vf);
    }
}