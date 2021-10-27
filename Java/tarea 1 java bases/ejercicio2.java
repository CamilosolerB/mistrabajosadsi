import java.util.Scanner;

public class ejercicio2{
    public static void main(String[] args) {
        int day;
        float min,max;
        Scanner sc = new Scanner(System.in);

        System.out.println("Indique el numero de dias que se hizo la medicion");
        day=sc.nextInt();

        for(int i=1;i<=day;i++){
            System.out.println("Indique la temperatura minima del dia "+i);
            min=sc.nextFloat();
            System.out.println("Indique la temperatura maxima del dia "+i);
            max=sc.nextFloat();

        }
    }
}