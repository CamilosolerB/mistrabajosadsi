
package numero1;

import java.util.Scanner;

public class Numero1 {

    public static void main(String[] args) {
        Scanner sc = new Scanner (System.in);
        
        int capturador,result=0;
        
        int arreglo[] = new int [10];
        
        arreglo[0] = 1;
        arreglo[1] = 2;
        arreglo[2] = 3;
        arreglo[3] = 4;
        arreglo[4] = 5;
        arreglo[5] = 6;
        arreglo[6] = 7;
        arreglo[7] = 8;
        arreglo[8] = 9;
        arreglo[9] = 1;
        
        System.out.println("Por favor escriba el numero que desea mirar su repeticion");
        capturador = sc.nextInt();
        for(int i = 0;i < 10; i++){
            if(capturador==arreglo[i]){
                result=result+1;
            }    
        }
        System.out.println("El numero "+capturador+" se repite un total de "+result+" veces");
        
    }
    
}
