import java.util.Scanner;

public class Nomina{
public static void main(String[]arg){
float sal,hed,hen,hef,hedd,dnt,sd,sh,hhed,hhen,hhef,hhedd,the,tdnt,desc,tb,tsyp,tf;

Scanner sc = new Scanner(System.in);
System.out.println("Bienvenido al ejercicio de nomina");
System.out.println("En este ejercicio usted podra calcular la nomina de un empleado");
System.out.println("Escriba el salario devengado por el empleado");
sal=sc.nextInt();
System.out.println("Escriba el numero de horas extras diurnas que hizo");
hed=sc.nextInt();
System.out.println("Escriba el numero de horas extras nocturnas que hizo");
hen=sc.nextInt();
System.out.println("Escriba el numero de horas extras festivas que hizo");
hef=sc.nextInt();
System.out.println("Escriba el numero de horas extras diurnas dominicales que hizo");
hedd=sc.nextInt();
System.out.println("Escriba el numero de dias que no fue a trabajar");
dnt=sc.nextInt();
sd=sal/30;
sh=sd/8;
hhed=sh*0.25f+sh;
hhen=sh*0.35f+sh;
hhef=sh*0.75f+sh;
hhedd=sh*2;
hed=hhed*hed;
hen=hhen*hen;
hef=hhef*hef;
hedd=hhedd*hedd;
the=hed+hen+hef+hedd;
tdnt=sd*dnt;
desc=sal-tdnt;
tb=desc+the;
tsyp=tb*0.08f;
tf=tb-tsyp;
System.out.println("Su salario basico es de: $"+desc+", debido a que usted fallo "+dnt+" dias, el total de ingresos por horas extras es de $"+the+", por salud se le descuenta 4% y por pension 4% dando un descuento de: $"+tsyp+" ,dando un salario total de: $"+tf+" pesos");
}
}