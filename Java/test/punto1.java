import java.util.Scanner;

public class punto1{

    public static void main(String[] args) {

        Scanner sc = new Scanner(System.in);
        
        float maximo[]= new float[10];
        float minimo[]= new float[10];

        float max=1,min=1;
        int i=1,f1=0,fn=0,ft=0,contador=0;
    System.out.println("Bienvenido a la plataforma de registro de la excursion"
            + "de campo");
        
    while(max!=0 && min!=0){
        int cont=i-1;
        System.out.println("Indique la temperatura maxima del dia "+i);
        max=sc.nextFloat();
        System.out.println("Indique la temperatura minima del dia "+i);
        min=sc.nextFloat();
        maximo[cont]=max;
        minimo[cont]=min;
        i++;
    }
            float fmaximo[]= new float[10];
            float fminimo[]= new float[10];
    for(int c=0;c<=i;c++){
    
        if(maximo[c]>35 && minimo[c]<5){
            System.out.println("error total "+minimo[c]);
            ft=ft+1;
        }
        else if (minimo[c]<5){
            System.out.println(minimo[c]);
            fn=fn+1;
        }
        //else if(minimo[c]<5){
          //  System.out.println("minimo"+f2);
            //f2=f2+1;
        //}
        else if(maximo[c]>35){
            f1=f1+1;
            System.out.println("maxima"+f1);
        }

        else{
            fmaximo[contador]=maximo[c];
            fminimo[contador]=minimo[c];
            contador=contador+1;
        }
    }
        System.out.println("Dias en que hubo error total en el clima "+ft);
        System.out.println("Dias en los que hubo error en la temperatura maxima "+f1);
        System.out.println("Dias en los que hubo error en la temperatura minima "+fn);
        
        
        for(int c=0;c<10;c++){
            System.out.println(fmaximo[c]);
            System.out.println(fminimo[c]);
        }





    }
}


