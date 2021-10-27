
package javaapplication14;


import java.util.Scanner;


public class tallermetodos {
    Scanner sc = new Scanner(System.in);
    public void primerpunto(){
            String nom,ape;
        float edad,pune,nsm,valmat,e1=0.25f,e2=0.15f,e3=0.1f,va=0f,v1=0.3f,v2=0.35f,v3=0.4f,v4=0.45f,c1=0.3f,c2=0.2f,c3=0.1f,c4=0.05f,con,vf;

        

    System.out.println("Bienvenido al programa de becas de la universidad");
    System.out.println("Para poder participar en este programa debe cumplir"
            + " alguno de los siguientes criterios");
    System.out.println("1. Ser mayor de 15 años y menor de 25 \n2. Tener"
            + " ingresos maximo de 4 salarios minimos legales vigentes \n3. "
            + "Sacar un putnaje mayor de 80");
    System.out.println("Recuerda que estos valores se iran concatenando entre si,"
            + " asi que entre mas requisitos cumplas mejor");
    System.out.println("Por favor indique su nombre");
    nom=sc.next();
    System.out.println("Ahora indique su apellido");
    ape=sc.next();
    System.out.println("Indique el valor de la matricula");
    valmat=sc.nextFloat();
    System.out.println("Por favor indique su edad");
    edad=sc.nextFloat();
    System.out.println("Indique el puntaje obtenido");
    pune=sc.nextFloat();
    System.out.println("Por ultimo indique el numero de ingreso de salarios"
            + " minimos en su familia. Puede usar decimales");
    nsm=sc.nextFloat();

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
    System.out.println("Señor(a)"+nom+" "+ape+" tenga en cuenta la tabla de "
            + "valores que se proporciono al inicio del ejercicio");
    System.out.println("Por lo tanto el total de porcentaje de descuento "
            + "que usted recibira es de "+con+"% y validando que su matricula "
                    + "es de "+valmat+" el valor a pagar es de "+vf);
    }
    public void punto2(){
        float maximo[]= new float[15];
        float minimo[]= new float[15];

        float max=1,min=1,prom,colect1=0,colect2=0;
        int i=1,f1=0,fn=0,ft=0,contador=0,reg=0,regtot=0,pred=0;
    System.out.println("Bienvenido a la plataforma de registro de la excursion"
            + "de campo");
        
    while(max!=0 && min!=0){
        int cont=i-1;
        pred=pred+1;
        System.out.println("Indique la temperatura maxima del dia "+i);
        max=sc.nextFloat();
        System.out.println("Indique la temperatura minima del dia "+i);
        min=sc.nextFloat();
        if(max==0 && min==0){
            pred=pred-1;
        }
        maximo[cont]=max;
        minimo[cont]=min;
        i++;
        
    }
        
            float fmaximo[]= new float[pred];
            float fminimo[]= new float[pred];
    for(int c=0;c<=i;c++){
    
        if(maximo[c]>35 && minimo[c]<5){
            ft=ft+1;
        }
        else if (minimo[c]<5){
            fn=fn+1;
        }

        else if(maximo[c]>35){
            f1=f1+1;
        }
        
        else{
            fmaximo[contador]=maximo[c];
            fminimo[contador]=minimo[c];
            contador=contador+1;
            regtot=regtot+1;
        }
        
    }
    
    for(int c=0;c<fmaximo.length;c++){
        colect1=fmaximo[c]+colect1;
    }
        for(int c=0;c<fminimo.length;c++){
        colect2=fminimo[c]+colect2;
    }
    
    colect1=colect1/regtot;
    colect2=colect2/regtot;
    
        prom=pred-regtot;
        prom=(prom/pred)*100;
        
        
        System.out.println("Total dias contados "+pred);
        System.out.println("total dias sin error "+regtot);
        System.out.println("Promedio temperatura maxima "+colect1);
        System.out.println("Promedio temperatura minima "+colect2);
        System.out.println("promedio de error en total "+prom+"%");
        System.out.println("Dias en que hubo error total en el clima "+ft);
        System.out.println("Dias en los que hubo error en la temperatura maxima "+f1);
        System.out.println("Dias en los que hubo error en la temperatura minima "+fn);
        

    }
    
    public void punto3(float sal, float hor){
    
        double vh,par=0.09,vf,pri=0.0833,ces=0.0833,intc=0.01,vac=0.0417,salud=0.04,pen=0.04,res,difres;
        
        if(hor>40){
            
            res=hor-40;
            difres=(res*0.015)+res;
            vh=(int)40+difres;
            System.out.println(difres);
            vh=vh*sal;
            System.out.println("Su salario bruto es de: "+vh);
            par=vh*par;
            vf=vh-par;
            System.out.println("El descuento de paraficales es de "+par);
            pri=vh*pri;
            ces=vh*ces;
            intc=vh*intc;
            vac=vh*vac;
            salud=vh*salud;        
            pen=vh*pen;        
            vf=vf-pri-ces-intc-vac-salud-pen;
            System.out.println("Junto a los otros descuentos  como lo es: ");
            System.out.println("Prima de servicios "+pri);
            System.out.println("Cesanctias "+ces);
            System.out.println("Interes de cesantias "+intc);
            System.out.println("Vacaciones "+vac);
            System.out.println("Salud "+pen);
            System.out.println("El saldo final con todos los descuentos aplicados"
                    + "es de $"+vf);
            
        }
        else{
            vh=sal*hor;
            System.out.println("Su salario bruto es de: "+vh);
            par=vh*par;
            vf=vh-par;
            System.out.println("El descuento de paraficales es de "+par);
            pri=vh*pri;
            ces=vh*ces;
            intc=vh*intc;
            vac=vh*vac;
            salud=vh*salud;        
            pen=vh*pen;        
            vf=vf-pri-ces-intc-vac-salud-pen;
            System.out.println("Junto a los otros descuentos  como lo es: ");
            System.out.println("Prima de servicios "+pri);
            System.out.println("Cesanctias "+ces);
            System.out.println("Interes de cesantias "+intc);
            System.out.println("Vacaciones "+vac);
            System.out.println("Salud "+salud);
            System.out.println("Pension "+pen);
            System.out.println("El saldo final con todos los descuentos aplicados"
                    + "es de $"+vf);
        }
    }

}



































































