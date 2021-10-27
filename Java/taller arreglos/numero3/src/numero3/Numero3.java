
package numero3;

public class Numero3 {

    public static void main(String[] args) {
        int primos[]= new int[100];
        
        for(int i=1;i<primos.length; i++){
            primos[i]=i;
        }
        
        for(int i=1;i<primos.length; i++){
            //if((primos[i]==7) || (primos[i]==5) (primos[i]==2) || (primos[i]==3)){
            System.out.println(primos[i]);   
        //}
        if(primos[i]==1){
            System.out.println(i+" no es primo, son numeros especiales asi que no cuentan");
        }
        else if((primos[i]==2) || (primos[i]==3) || (primos[i]==5) || (primos[i]==7)){
            System.out.println("El numero "+primos[i]+" es primo");
        }
        else if(primos[i]%2!=0 && primos[i]%3!=0){
            System.out.println("El numero "+primos[i]+" es primo");
        }

            }
        System.out.println("fin del ciclo");
        }
    
    
}
