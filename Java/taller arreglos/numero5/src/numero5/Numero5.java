package numero5;

import java.util.Arrays;
import java.util.Scanner;

public class Numero5 {

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int array[]= new int [25],cap,sum=0;
        
        for(int i = 0; i < array.length; i++){
            System.out.println("Digite el numero"+(i+1));
            cap = sc.nextInt();
            array[i]=cap;
        }
        for(int i = 0; i < array.length; i++){
            sum=sum+array[i];
        }
        for(int i = 0; i < array.length; i++){
            System.out.println(array[i]);
        }
        System.out.println("la suma del arreglo da: "+sum);
    }
    
}
