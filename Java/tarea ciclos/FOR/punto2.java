import java.util.Scanner;

public class punto2 {
    public static void main(String[] args) {
        int i;
        float y=0,prom,t=0;
        Scanner sc = new Scanner(System.in);
        System.out.println("LECTURA DE PROMEDIOS");
        for(i=1;i<=10;i++){
            System.out.println("POR FAVOR DIGITE EL PROMEDIO "+i);
            prom=sc.nextFloat();
            y=y+prom;
            t=y/10;
        }
        System.out.println("Su promedio total es de "+t);
    }
}
