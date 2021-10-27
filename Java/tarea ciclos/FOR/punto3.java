import java.util.Scanner;

public class punto3 {
    public static void main(String[] args) {
        Scanner sc= new Scanner(System.in);
        int z;
        float y=0,prom,to=0;
        System.out.println("Por favor indique el numero de resultados a promediar");
        z=sc.nextInt();
            for(int i=1;i<=z;i++){
                System.out.println("POR FAVOR DIGITE EL PROMEDIO "+i);
                prom=sc.nextFloat();
                y=y+prom;
                to=y/z;
            }
            System.out.println("Su promedio total es de "+to);
        }
}
