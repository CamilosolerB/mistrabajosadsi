import java.util.Scanner;

public class perros{
public static void main(String[]arg){
int V2=800000,V3=200000,V;
String P1,P2,P3,pi="Pitbull",bu="Buly",ro="Rotwhiller",la="Labrador",gr="Golden",dob="Doberman",dog="Dogo";

Scanner sc= new Scanner(System.in);
System.out.println("Consurso nacional de perros");
System.out.println("Los siguientes perros estan en concurso: \nPitbull \nBuly \nRottwhiller \nLabrador retriever \nGolden retriever \nDoberman \nDogo Argentino");
System.out.println("Indique el ganador del primer puesto");
P1=sc.next();
System.out.println("Indique el ganador del segundo puesto");
P2=sc.next();
System.out.println("Indique el ganador del tercer puesto");
P3=sc.next();
    if(P1.equalsIgnoreCase(pi)){
        V=6000000*2;
        System.out.println("El "+P1+" gana "+V);
    }    
        else if(P1.equalsIgnoreCase(bu)){
            V=6500000*2;
            System.out.println("El "+P1+" gana "+V);
        }
            else if(P1.equalsIgnoreCase(ro)){
                V=4000000*2;
                System.out.println("El "+P1+" gana "+V);
            }
                else if(P1.equalsIgnoreCase(la)){
                    V=3500000*2;
                    System.out.println("El "+P1+" gana "+V);
                }
                    else if(P1.equalsIgnoreCase(gr)){
                        V=3500000*2;
                        System.out.println("El "+P1+" gana "+V);
                    }
                        else if(P1.equalsIgnoreCase(dob)){
                            V=5000000*2;
                            System.out.println("El "+P1+" gana "+V);
                        }
                            else if(P1.equalsIgnoreCase(dog)){
                                V=5500000*2;
                                System.out.println("El "+P1+" gana "+V);
                            }
                                else{
                                    System.out.println("verifique que haya ecrito bien el nombre del perro es valido tanto en mayuscula como en minuscula");
                                }
if(P2.equalsIgnoreCase(pi)){
        V=6000000+V2;
        System.out.println("El "+P2+" gana "+V);
    }    
        else if(P2.equalsIgnoreCase(bu)){
            V=6500000+V2;
            System.out.println("El "+P2+" gana "+V);
        }
            else if(P2.equalsIgnoreCase(ro)){
                V=4000000+V2;
                System.out.println("El "+P2+" gana "+V);
            }
                else if(P2.equalsIgnoreCase(la)){
                    V=3500000+V2;
                    System.out.println("El "+P2+" gana "+V);
                }
                    else if(P2.equalsIgnoreCase(gr)){
                        V=3500000+V2;
                        System.out.println("El "+P2+" gana "+V);
                    }
                        else if(P2.equalsIgnoreCase(dob)){
                            V=5000000+V2;
                            System.out.println("El "+P2+" gana "+V);
                        }
                            else if(P2.equalsIgnoreCase(dog)){
                                V=5500000+V2;
                                System.out.println("El "+P2+" gana "+V);
                            }
                                else{
                                    System.out.println("verifique que haya ecrito bien el nombre del perro es valido tanto en mayuscula como en minuscula");
                                }
if(P3.equalsIgnoreCase(pi)){
        V=6000000+V3;
        System.out.println("El "+P3+" gana "+V);
    }    
        else if(P3.equalsIgnoreCase(bu)){
            V=6500000+V3;
            System.out.println("El "+P3+" gana "+V);
        }
            else if(P3.equalsIgnoreCase(ro)){
                V=4000000+V3;
                System.out.println("El "+P3+" gana "+V);
            }
                else if(P3.equalsIgnoreCase(la)){
                    V=3500000+V3;
                    System.out.println("El "+P3+" gana "+V);
                }
                    else if(P3.equalsIgnoreCase(gr)){
                        V=3500000+V3;
                        System.out.println("El "+P3+" gana "+V);
                    }
                        else if(P3.equalsIgnoreCase(dob)){
                            V=5000000+V3;
                            System.out.println("El "+P3+" gana "+V);
                        }
                            else if(P3.equalsIgnoreCase(dog)){
                                V=5500000+V3;
                                System.out.println("El "+P3+" gana "+V);
                            }
                                else{
                                    System.out.println("verifique que haya ecrito bien el nombre del perro es valido tanto en mayuscula como en minuscula");
                                }
                            
}
}