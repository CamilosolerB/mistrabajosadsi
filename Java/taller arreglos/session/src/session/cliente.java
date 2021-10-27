
package session;

import java.util.Scanner;

public class cliente {
    
    public void Cliente(String usu,String pas){
    Scanner sc = new Scanner(System.in);
    String usuv="camilo",pasv="cualquiera";

    if(usu.equals(usuv) && pas.equals(pasv)){
     System.out.println("Bienvenido al sistema");
    }
    else if(usu.equals(usuv)){
        System.out.println("Contraseña incorrecta");
    }
    else if(pas.equals(pasv)){
        System.out.println("Usuario incorrecto");
    }
    else{
        System.out.println("Datos incorrectos");
    }
   }
    public void admin(String usu,String pas){
            Scanner sc = new Scanner(System.in);
    String usuv="pablo",pasv="cualquiera";

    if(usu.equals(usuv) && pas.equals(pasv)){
     System.out.println("Bienvenido al sistema");
    }
    else if(usu.equals(usuv)){
        System.out.println("Contraseña incorrecta");
    }
    else if(pas.equals(pasv)){
        System.out.println("Usuario incorrecto");
    }
    else{
        System.out.println("Datos incorrectos");
    }
    }
    public void empl(String usu,String pas){
        Scanner sc = new Scanner(System.in);
    String usuv="andres",pasv="cualquiera";

    if(usu.equals(usuv) && pas.equals(pasv)){
     System.out.println("Bienvenido al sistema");
    }
    else if(usu.equals(usuv)){
        System.out.println("Contraseña incorrecta");
    }
    else if(pas.equals(pasv)){
        System.out.println("Usuario incorrecto");
    }
    else{
        System.out.println("Datos incorrectos");
    }
    }
    }

