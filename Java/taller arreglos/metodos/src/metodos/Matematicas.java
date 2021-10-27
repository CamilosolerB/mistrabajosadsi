/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package metodos;

import java.util.Scanner;

/**
 *
 * @author caans
 */
public class Matematicas {
    Scanner sc = new Scanner(System.in);
    int numero1,numero2,r;
    public void suma(){
        System.out.println("Indique el numero 1");
        numero1=sc.nextInt();
        System.out.println("Indique el numero 2");
        numero2=sc.nextInt();
        r=numero1+numero2;
            System.out.println("El resultado: "+r );
        
    }    
    
        public void resta(){
            System.out.println("Indique el numero 1");
        numero1=sc.nextInt();
        System.out.println("Indique el numero 2");
        numero2=sc.nextInt();
        r=numero1-numero2;
            System.out.println("El resultado: "+r );
        
    }
            public void multiplicacion(){
        System.out.println("Indique el numero 1");
        numero1=sc.nextInt();
        System.out.println("Indique el numero 2");
        numero2=sc.nextInt();
        r=numero1*numero2;
            System.out.println("El resultado: "+r );
        
    }  
    public void division(){
        System.out.println("Indique el numero 1");
        numero1=sc.nextInt();
        System.out.println("Indique el numero 2");
        numero2=sc.nextInt();
        r=numero1/numero2;
            System.out.println("El resultado: "+r );
        
    }  
}
