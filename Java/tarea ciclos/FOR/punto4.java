import java.util.Scanner;

public class punto4 {
    public static void main(String[] args) {
        Scanner sc=new Scanner(System.in);
        
        String name="paco",nom,password="1234",pas;
        int res=3;
        
        System.out.println("Indique su usuario");
            nom=sc.next();
        System.out.println("Digite la contraseña");
            pas=sc.next();
            if(nom.equals(name) && pas.equals(password)){
                //System.out.println("Bienvenido");
                res=0;
            }
            else{
                for(int z=3;z!=0;z--){
            
                    System.out.println("Tiene "+res+" intentos o sino su cuenta sera bloqueada");
                    System.out.println("Indique su usuario");
                    nom=sc.next();
                System.out.println("Digite la contraseña");
                    pas=sc.next();
                    if(nom.equals(name) && pas.equals(password)){
                        //System.out.println("Bienvenido");
                        res=0;
                    }
                        else{
                            res=res-1;
                        }
                    
                }
            }
            if(nom.equals(name) && pas.equals(password)){
                System.out.println("Bienvenido");
            }
            else{
            System.out.println("Usuario bloqueado");
            }
    }
}
