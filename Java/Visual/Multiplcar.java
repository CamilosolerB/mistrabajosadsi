
import java.util.Scanner;

public class Multiplcar{

    public static void main(String[] args) {
 
        Scanner sc = new Scanner(System.in);
        int tabla,n,finali,res;
        System.out.println("¿Que tabla desea usar");                                                         
        tabla = sc.nextInt();
        System.out.println("Desde que factor desea iniciar");                                                         
        n = sc.nextInt();
        System.out.println("Hasta que factor desea  multiplicar");                                                         
        finali = sc.nextInt();
        for(int i = n; i<=finali; i++){
            res=tabla*i;
             System.out.println(tabla + " * " + i + " = " + res); 
                                                              
        }
    }
}
