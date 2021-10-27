import java.util.Scanner;

public class punto3c {
    public static void main(String[] args) {
        int i=1,z;
        float y=0,prom,t=0;
        Scanner sc = new Scanner(System.in);
        System.out.println("LECTURA DE PROMEDIOS");
        System.out.println("Por favor indique el numero de resultados a promediar");
        z=sc.nextInt();
        while(i<=z){
            System.out.println("POR FAVOR DIGITE EL PROMEDIO "+i);
            prom=sc.nextFloat();
            y=y+prom;
            t=y/z;
            i++;
        }
        System.out.println("Su promedio total es de "+t);
    }
}
