
package numero8;

import java.util.Scanner;


public class Numero8 {

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int x;
        System.out.println("Escriba el numero de corredores a participar");
        x=sc.nextInt();
        float time[] = new float [x],cap;
        for(int i=0;i < time.length; i++){
        System.out.println("Escriba el tiempo del corredor "+(i+1)+" si necesita"
        + " indicar sus segundos separelos con un punto(.)");
        cap=sc.nextFloat();
        time[i]=cap;
        }
        float min=time[0];
        for(int i=0;i < time.length; i++){
            if(time[i]<min){
              min=time[i];
            }
        }
        System.out.println("El corredor que gano la carrera lo hizo en un"
                + " tiempo de "+min);
    }
    
}
