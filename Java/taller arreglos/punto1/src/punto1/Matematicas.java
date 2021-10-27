
package punto1;

import java.util.Scanner;

public class Matematicas {
    Scanner sc = new Scanner(System.in);
    int numero1,numero2,r;
    public void suma(){
        numero1=sc.nextInt();
        numero2=sc.nextInt();
        r=numero1+numero2;
            System.out.println("El resultado: "+r );
        
    }    
    
        public void resta(){
        numero1=sc.nextInt();
        numero2=sc.nextInt();
        r=numero1-numero2;
            System.out.println("El resultado: "+r );
        
    }
            public void multiplicacion(){
        numero1=sc.nextInt();
        numero2=sc.nextInt();
        r=numero1*numero2;
            System.out.println("El resultado: "+r );
        
    }  
    public void division(){
        numero1=sc.nextInt();
        numero2=sc.nextInt();
        r=numero1/numero2;
            System.out.println("El resultado: "+r );
        
    }  
}
