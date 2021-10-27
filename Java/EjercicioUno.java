import java.util.Scanner;


public class EjercicioUno{

public static void main(String[]arg){
int d;
float fl;
double nf,r;

Scanner sc =new Scanner(System.in);
System.out.println("Digite un numero");
d=sc.nextInt();

System.out.print("Digite un numero decimal");
fl=sc.nextFloat();

System.out.print("Digite el numero decimal grande");
nf=sc.nextDouble();
r=d+fl+nf;
System.out.print("El resultado es "+r+" mi rey");


System.out.print("Hello this is my firts program");

}
}