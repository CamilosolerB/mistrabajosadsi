
package numero7;

import java.util.Scanner;

public class Numero7 {

    public static void main(String[] args) {
        Scanner sc = new Scanner (System.in);
        float array[]= new float [5],prom=0,rec;
        for(int i = 0;i < array.length; i++){
            System.out.println("Escriba el numero "+(i+1));
            rec=sc.nextInt();
            array[i]=rec;
        }
        
        for(int i = 0;i < array.length; i++){
            prom=array[i]+prom;
        }
        prom=prom/5;
        System.out.println("El promedio final es de: "+prom);
    }
    
}
