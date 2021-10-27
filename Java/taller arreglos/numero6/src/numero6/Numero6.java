
package numero6;

import java.util.Scanner;


public class Numero6 {

    public static void main(String[] args) {
        Scanner sc = new Scanner (System.in);
        int array[]= new int [10],count;
        for(int i=0;i<array.length;i++){
            System.out.println("Escriba el numero para el arreglo");
            count=sc.nextInt();
            array[i]=count;
        }
        System.out.println("Estos son los numeros pares encontrados");
        for(int i=0;i<array.length;i++){
            if(array[i]%2==0){
                System.out.println(array[i]);
            }
        }
    }
    
}
