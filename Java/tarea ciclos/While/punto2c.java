import java.util.Scanner;

public class punto2c {
    public static void main(String[] args) {
        int i=1;
        float y=0,prom,t=0;
        Scanner sc = new Scanner(System.in);
        System.out.println("LECTURA DE PROMEDIOS");
        while(i<=10){
            System.out.println("POR FAVOR DIGITE EL PROMEDIO "+i);
            prom=sc.nextFloat();
            y=y+prom;
            t=y/10;
            i++;
        }
        System.out.println("Su promedio total es de "+t);
    }
}
