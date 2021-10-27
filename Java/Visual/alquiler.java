import java.util.Scanner;

public class alquiler{
public static void main(String[]arg){            
String V,So,A="BMW",B="megane",C="mercedes",E="Twingo",F="chevrolet",decide="si";
double Desc,Rt,Des,D,R;

Scanner sc = new Scanner(System.in);
System.out.println("alquiler de vehiculos");
System.out.println("Escoje entre algunos vehiculos, estas son las opciones BMW $ 650000\n MEGANE $ 120000\n MERCEDES $ 700000\n TWINGO $ 100000\n CHEVROLET AVEO $ 150000");
System.out.println("Por favor indique el nombre del vehiculo a comprar");
V=sc.next();
System.out.println("Cuantos dias desea alquilarlo");
D=sc.nextInt();
System.out.println("Desea adquirir el seguro todo riesgo");
So=sc.next();
if(D<=2){
    if(V.equalsIgnoreCase(A)){
        R=650000;
            if(So.equalsIgnoreCase(decide)){
                Desc=R*5;
                Desc=Desc/100;
                Rt=R+Desc;
                System.out.println("Por "+D+" no hay descuento, pero se suma el seguro todo riesgo del 5% lo cual seria un total de "+Rt);
                }
            else{
                System.out.println("Por "+D+" dias no hay descuento, entonces el valor a pagar es de"+R);
                }
	    }
		else if(V.equalsIgnoreCase(B)){
                    R=120000;
                      if(So.equalsIgnoreCase(decide)){
                                    Desc=R*5;
                                    Desc=Desc/100;
                                    Rt=R+Desc;
                                    System.out.println("Por "+D+" no hay descuento, pero se suma el seguro todo riesgo del 5% lo cual seria un total de"+Rt);
                                    }
                                    else{
                                        System.out.println("Por "+D+" dias no hay descuento, entonces el valor a pagar es de"+R);
                                    }
			}
                                    else if(V.equalsIgnoreCase(C)){
                                        R=700000;
                                        if(So.equalsIgnoreCase(decide)){
                                            Desc=R*5;
                                            Desc=Desc/100;
                                            Rt=R+Desc;
                                            System.out.println("Por "+D+" no hay descuento, pero se suma el seguro todo riesgo del 5% lo cual seria un total de"+Rt);
                                            }
                                            else{
                                                System.out.println("Por "+D+" dias no hay descuento, entonces el valor a pagar es de"+R);
                                            }
					}
                                         else if(V.equalsIgnoreCase(E)){
                                                
                                                R=100000;
                                                if(So.equalsIgnoreCase(decide)){
                                                    Desc=R*5;
                                                    Desc=Desc/100;
                                                    Rt=R+Desc;
                                                    System.out.println("Por "+D+" no hay descuento, pero se suma el seguro todo riesgo del 5% lo cual seria un total de"+Rt);
                                                    }
                                                    else{
                                                        System.out.println("Por "+D+" dias no hay descuento, entonces el valor a pagar es de"+R);
                                                    }
                                                    }
                                                    else if(V.equalsIgnoreCase(F)){
                                                        
                                                        R=150000;
                                                        if(So.equalsIgnoreCase(decide)){
                                                            Desc=R*5;
                                                            Desc=Desc/100;
                                                            Rt=R+Desc;
                                                            System.out.println("Por "+D+" no hay descuento, pero se suma el seguro todo riesgo del 5% lo cual seria un total de"+Rt);
                                                            }
                                                            else{
                                                                System.out.println("Por "+D+" dias no hay descuento, entonces el valor a pagar es de"+R);
                                                            }
                                                    }
                                                    else{ 
							System.out.println("Verifique que haya escrito bien el texto");
							} 

}
else if(D<=5){
    if(V.equalsIgnoreCase(A)){
        R=650000;
        Des=R*0.1;
        R=R-Des;
            if(So.equalsIgnoreCase(decide)){
                Desc=R*5;
                Desc=Desc/100;
                Rt=R+Desc;
                System.out.println("Por "+D+" dias hay descuento del 10%, pero se suma el seguro todo riesgo del 5% lo cual seria un total de"+Rt);
                }
            else{
                System.out.println("Por "+D+" dias hay descuento de 10%, entonces el valor a pagar es de"+R);
                }
	    }
		else if(V.equalsIgnoreCase(B)){
                    R=120000;
                    Des=R*0.1;
                    R=R-Des;
                      if(So.equalsIgnoreCase(decide)){
                                    Desc=R*5;
                                    Desc=Desc/100;
                                    Rt=R+Desc;
                                    System.out.println("Por "+D+" dias hay descuento del 10%, pero se suma el seguro todo riesgo del 5% lo cual seria un total de"+Rt);
                                    }
                                    else{
                                        System.out.println("Por "+D+" dias hay descuento de 10%, entonces el valor a pagar es de"+R);
                                    }
			}
                                    else if(V.equalsIgnoreCase(C)){
                                        R=700000;
                            		Des=R*0.1;
                            		R=R-Des;
                                        if(So.equalsIgnoreCase(decide)){
                                            Desc=R*5;
                                            Desc=Desc/100;
                                            Rt=R+Desc;
                                            System.out.println("Por "+D+" dias no hay descuento, pero se suma el seguro todo riesgo del 5% lo cual seria un total de"+Rt);
                                            }
                                            else{
                                                System.out.println("Por "+D+" dias hay descuento de 10%, entonces el valor a pagar es de"+R);
                                            }
					}
                                         else if(V.equalsIgnoreCase(E)){
                                                
                                                R=100000;
                            			Des=R*0.1;
                            			R=R-Des;
                                                if(So.equalsIgnoreCase(decide)){
                                                    Desc=R*5;
                                                    Desc=Desc/100;
                                                    Rt=R+Desc;
                                                    System.out.println("Por "+D+" dias hay descuento del 10%, pero se suma el seguro todo riesgo del 5% lo cual seria un total de"+Rt);
                                                    }
                                                    else{
                                                        System.out.println("Por "+D+" dias hay descuento de 10%, entonces el valor a pagar es de"+R);
                                                    }
                                                    }
                                                    else if(V.equalsIgnoreCase(F)){
                                                        
                                                        R=150000;
                            				Des=R*0.1;
                            				R=R-Des;
                                                        if(So.equalsIgnoreCase(decide)){
                                                            Desc=R*5;
                                                            Desc=Desc/100;
                                                            Rt=R+Desc;
                                                            System.out.println("Por "+D+" dias hay descuento del 10%, pero se suma el seguro todo riesgo del 5% lo cual seria un total de"+Rt);
                                                            }
                                                            else{
                                                                System.out.println("Por "+D+" dias hay descuento de 10%, entonces el valor a pagar es de"+R);
                                                            }
                                                    }
                                                    else{ 
							System.out.println("Verifique que haya escrito bien el texto");
							} 

}
else if(D<=10){
    if(V.equalsIgnoreCase(A)){
        R=650000;
        Des=R*0.15;
        R=R-Des;
            if(So.equalsIgnoreCase(decide)){
                Desc=R*5;
                Desc=Desc/100;
                Rt=R+Desc;
                System.out.println("Por "+D+" dias hay descuento del 15%, pero se suma el seguro todo riesgo del 5% lo cual seria un total de"+Rt);
                }
            else{
                System.out.println("Por "+D+" dias hay descuento de 15%, entonces el valor a pagar es de"+R);
                }
	    }
		else if(V.equalsIgnoreCase(B)){
                    R=120000;
                    Des=R*0.15;
                    R=R-Des;
                      if(So.equalsIgnoreCase(decide)){
                                    Desc=R*5;
                                    Desc=Desc/100;
                                    Rt=R+Desc;
                                    System.out.println("Por "+D+" dias hay descuento del 15%, pero se suma el seguro todo riesgo del 5% lo cual seria un total de"+Rt);
                                    }
                                    else{
                                        System.out.println("Por "+D+" dias hay descuento de 15%, entonces el valor a pagar es de"+R);
                                    }
			}
                                    else if(V.equalsIgnoreCase(C)){
                                        R=700000;
                            		Des=R*0.15;
                            		R=R-Des;
                                        if(So.equalsIgnoreCase(decide)){
                                            Desc=R*5;
                                            Desc=Desc/100;
                                            Rt=R+Desc;
                                            System.out.println("Por "+D+" dias hay descuento del 15%, pero se suma el seguro todo riesgo del 5% lo cual seria un total de"+Rt);
                                            }
                                            else{
                                                System.out.println("Por "+D+" dias hay descuento de 15%, entonces el valor a pagar es de"+R);
                                            }
					}
                                         else if(V.equalsIgnoreCase(E)){
                                                
                                                R=100000;
                            			Des=R*0.15;
                            			R=R-Des;
                                                if(So.equalsIgnoreCase(decide)){
                                                    Desc=R*5;
                                                    Desc=Desc/100;
                                                    Rt=R+Desc;
                                                    System.out.println("Por "+D+" dias hay descuento del 15%, pero se suma el seguro todo riesgo del 5% lo cual seria un total de"+Rt);
                                                    }
                                                    else{
                                                        System.out.println("Por "+D+" dias hay descuento de 15%, entonces el valor a pagar es de"+R);
                                                    }
                                                    }
                                                    else if(V.equalsIgnoreCase(F)){
                                                        
                                                        R=150000;
                            				Des=R*0.15;
                            				R=R-Des;
                                                        if(So.equalsIgnoreCase(decide)){
                                                            Desc=R*5;
                                                            Desc=Desc/100;
                                                            Rt=R+Desc;
                                                            System.out.println("Por "+D+" dias hay descuento del 15%, pero se suma el seguro todo riesgo del 5% lo cual seria un total de"+Rt);
                                                            }
                                                            else{
                                                                System.out.println("Por "+D+" dias hay descuento de 15%, entonces el valor a pagar es de"+R);
                                                            }
                                                    }
                                                    else{ 
							System.out.println("Verifique que haya escrito bien el texto");
							} 
}
else if(D>10){
    if(V.equalsIgnoreCase(A)){
        R=650000;
        Des=R*0.2;
        R=R-Des;
            if(So.equalsIgnoreCase(decide)){
                Desc=R*5;
                Desc=Desc/100;
                Rt=R+Desc;
                System.out.println("Por "+D+" dias hay descuento del 20%, pero se suma el seguro todo riesgo del 5% lo cual seria un total de"+Rt);
                }
            else{
                System.out.println("Por "+D+" dias hay descuento de 20%, entonces el valor a pagar es de"+R);
                }
	    }
		else if(V.equalsIgnoreCase(B)){
                    R=120000;
                    Des=R*0.2;
                    R=R-Des;
                      if(So.equalsIgnoreCase(decide)){
                                    Desc=R*5;
                                    Desc=Desc/100;
                                    Rt=R+Desc;
                                    System.out.println("Por "+D+" dias hay descuento del 20%, pero se suma el seguro todo riesgo del 5% lo cual seria un total de"+Rt);
                                    }
                                    else{
                                        System.out.println("Por "+D+" dias hay descuento de 20%, entonces el valor a pagar es de"+R);
                                    }
			}
                                    else if(V.equalsIgnoreCase(C)){
                                        R=700000;
                            		Des=R*0.2;
                            		R=R-Des;
                                        if(So.equalsIgnoreCase(decide)){
                                            Desc=R*5;
                                            Desc=Desc/100;
                                            Rt=R+Desc;
                                            System.out.println("Por "+D+" dias hay descuento del 20%, pero se suma el seguro todo riesgo del 5% lo cual seria un total de"+Rt);
                                            }
                                            else{
                                                System.out.println("Por "+D+" dias hay descuento de 20%, entonces el valor a pagar es de"+R);
                                            }
					}
                                         else if(V.equalsIgnoreCase(E)){
                                                
                                                R=100000;
                            			Des=R*0.2;
                            			R=R-Des;
                                                if(So.equalsIgnoreCase(decide)){
                                                    Desc=R*5;
                                                    Desc=Desc/100;
                                                    Rt=R+Desc;
                                                    System.out.println("Por "+D+" dias hay descuento del 20%, pero se suma el seguro todo riesgo del 5% lo cual seria un total de"+Rt);
                                                    }
                                                    else{
                                                        System.out.println("Por "+D+" dias hay descuento de 20%, entonces el valor a pagar es de"+R);
                                                    }
                                                    }
                                                    else if(V.equalsIgnoreCase(F)){
                                                        
                                                        R=150000;
                            				Des=R*0.2;
                            				R=R-Des;
                                                        if(So.equalsIgnoreCase(decide)){
                                                            Desc=R*5;
                                                            Desc=Desc/100;
                                                            Rt=R+Desc;
                                                            System.out.println("Por "+D+" dias hay descuento del 20%, pero se suma el seguro todo riesgo del 5% lo cual seria un total de"+Rt);
                                                            }
                                                            else{
                                                                System.out.println("Por "+D+" dias hay descuento de 20%, entonces el valor a pagar es de"+R);
                                                            }
                                                    }
                                                    else{ 
							System.out.println("Verifique que haya escrito bien el texto");
							} 
}
else{
	System.out.println("El dia digitado no es valido mi rey");
}
}
}