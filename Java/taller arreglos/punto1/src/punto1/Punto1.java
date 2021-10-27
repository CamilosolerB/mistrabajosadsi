package punto1;

import java.util.Scanner;

public class Punto1 {

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int array[] = new int[10];
        int num;
        for(int i=0; i<10;i++){
            System.out.println("Digite un numero");
            array[i]=num=sc.nextInt();
            
        }
        for(int i=0; i<10;i++){
        
        System.out.println("numero en pocision "+i+"->"+array[i]);
    }
    }
    
}
