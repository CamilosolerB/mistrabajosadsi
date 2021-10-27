package numero2;

import java.util.Scanner;

public class Numero2 {

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int x,max,min;
        System.out.println("Escriba el numero de numero para comprobar");
        x=sc.nextInt();
        int array[]= new int[x];
        for(int i = 0; i < array.length ; i++){
            System.out.println("Escriba el numero "+(i+1)+" este numero debe estar en el rango 0-1000");
            array[i]=sc.nextInt();
            if(array[i]>=1000){
                System.out.println("Numero no valido, pruebe con otro");
                i=i-1;
            }
        }
            max = min = array[0];
        for(int i = 0; i< array.length; i++){
            if (array[i]>max){
                  max=array[i];
            }
            else if(array[i]<min){
                min = array[i];
            }
        }
        System.out.println("El numero mayor es "+max+" y el numero menor es "+min);
    }
    
}
