import java.util.Scanner;

public class parqueadero{
public static void main(String[]arg){
int H,M,Th,T;
Scanner imp = new Scanner(System.in);
System.out.println("PARQUEADERO");
System.out.println("Indique el tiempo que va a estar en horas");
H=imp.nextInt();
System.out.println("Ahora indiquela en minutos");  
M=imp.nextInt();
	if (M>=1){
            Th=H+1;
            T=Th*1500;
            System.out.println("El coste por el estacionamiento es de: $"+T);
            }
        else{
             T=H*1500;
             System.out.println("El coste por el estacionamiento es de: $"+T);
        }
}
}