import java.util.Scanner;

public class punto5c {
    public static void main(String[] args) {
        Scanner sc= new Scanner(System.in);
        int Z,X=2035;
        double Ra=0,Pt,Ca,Rb;
        System.out.println("Lectura de promedios");
        System.out.println("Por favor indique el año actual");
        Z=sc.nextInt();
        while(Z<=X){
            Pt=750;
            Ca=Pt*0.12;
            Rb=Pt+Ca;
            Ra=Ra+Rb;
            Z=Z+1;
            System.out.println("El crecimiento en el año "+Z+" es de "+Ra);
        }
        System.out.println("Su promedio total es de "+Ra+" estudiantes.");
    }
}
