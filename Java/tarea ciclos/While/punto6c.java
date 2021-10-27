import java.util.Scanner;

public class punto6c{
    public static void main(String[] args) {
    
    Scanner sc= new Scanner(System.in);

    int N,H,Z,N1;

    System.out.println("Calcule el manor y el menor de este conjunto de numeros");
    System.out.println("Por favor escriba el numero de digitos que va a escribir");
    N=sc.nextInt();
    System.out.println("Por favor anote el numero 1");
    H=sc.nextInt();
    N=N-1;
    Z=1;
    N1=0;
    H=0;
    while(Z<=N){
        
        Z=Z+1;
        System.out.println("Por favor escriba el numero "+ Z)
        N1=sc.nextInt()
            if(N1>=H){
                H=N1
            }
                else{
                    N1=N1
                }
    
    }
    alert('El mayor es '+H);
    H=parseInt(prompt('Por favor anote el numero 1, AHORA CALCULAREMOS EL MENOR.'));
    N=N-1;
    Z=1;
    N1=0;
        while(Z<=N){
            Z=Z+1;
            N1=parseInt(prompt("Por favor escriba el numero "+ Z));
                if(N1<=H){
                    H=N1
                }
                    else{
                        N1=N1
                    }
        }
        alert('El menor es ',H);
    }
}