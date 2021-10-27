let N1,N2,N3,N4,NP,N,G;
N1=parseInt(prompt("Digite la nota 1"));
N2=parseInt(prompt("Digite la nota 2"));
N3=parseInt(prompt("Digite la nota 3"));
N4=parseInt(prompt("Digite la nota 4"));
NP=N1+N2+N3+N4;
N=NP/4;
G=parseInt(prompt("Indique el curso en el que esta actualmente"));
if(N<=1){
    alert("No ha sido promovido y sigue en el curso "+G+" Su desempeño fue D");
}
    else if(N<=2.9){
        alert("No ha sido promovido y sigue en el curso "+G+" Su desempeño fue I");
    }
        else if(N<=3.4){
            alert("No ha sido promovido y sigue en el curso "+G+" Su desempeño fue A");
        }
            else if(N<=3.8){
                switch(G){
                    case 0:
                        alert("Felicidades ha sido promovido a primero y su  desempeño fue A");
                    break
                    case 1:
                        alert("Felicidades ha sido promovido a segundo y su  desempeño fue A");
                    break
                    case 2:
                        alert("Felicidades ha sido promovido a tercero y su  desempeño fue A");
                    break
                    case 3:
                        alert("Felicidades ha sido promovido a cuarto y su  desempeño fue A");
                    break
                    case 4:
                        alert("Felicidades ha sido promovido a quinto y su  desempeño fue A");
                    break
                    case 5:
                        alert("Felicidades ha sido promovido a sexto y su  desempeño fue A");
                    break
                    case 6:
                        alert("Felicidades ha sido promovido a septimo y su  desempeño fue A");
                    break
                    case 7:
                        alert("Felicidades ha sido promovido a octavo y su  desempeño fue A");
                    break
                    case 8:
                        alert("Felicidades ha sido promovido a noveno y su  desempeño fue A");
                    break
                    case 9:
                        alert("Felicidades ha sido promovido a decimo y su  desempeño fue A");
                    break
                    case 10:
                        alert("Felicidades ha sido promovido a once y su  desempeño fue A");
                    break
                    case 11:
                        alert("Felicidades, se puede graduar pues su  desempeño fue A");
                    break
                }
            }
            else if(N<=4.6){
                switch(G){
                    case 0:
                        alert("Felicidades ha sido promovido a primero y su  desempeño fue S");
                    break
                    case 1:
                        alert("Felicidades ha sido promovido a segundo y su  desempeño fue S");
                    break
                    case 2:
                        alert("Felicidades ha sido promovido a tercero y su  desempeño fue S");
                    break
                    case 3:
                        alert("Felicidades ha sido promovido a cuarto y su  desempeño fue S");
                    break
                    case 4:
                        alert("Felicidades ha sido promovido a quinto y su  desempeño fue S");
                    break
                    case 5:
                        alert("Felicidades ha sido promovido a sexto y su  desempeño fue S");
                    break
                    case 6:
                        alert("Felicidades ha sido promovido a septimo y su  desempeño fue S");
                    break
                    case 7:
                        alert("Felicidades ha sido promovido a octavo y su  desempeño fue S");
                    break
                    case 8:
                        alert("Felicidades ha sido promovido a noveno y su  desempeño fue S");
                    break
                    case 9:
                        alert("Felicidades ha sido promovido a decimo y su  desempeño fue S");
                    break
                    case 10:
                        alert("Felicidades ha sido promovido a once y su  desempeño fue S");
                    break
                    case 11:
                        alert("Felicidades, se puede graduar pues su  desempeño fue S");
                    break
                }

            }
                    else if(N<=5){
                        switch(G){
                            case 0:
                                alert("Felicidades ha sido promovido a primero y su  desempeño fue E");
                            break
                            case 1:
                                alert("Felicidades ha sido promovido a segundo y su  desempeño fue E");
                            break
                            case 2:
                                alert("Felicidades ha sido promovido a tercero y su  desempeño fue E");
                            break
                            case 3:
                                alert("Felicidades ha sido promovido a cuarto y su  desempeño fue E");
                            break
                            case 4:
                                alert("Felicidades ha sido promovido a quinto y su  desempeño fue E");
                            break
                            case 5:
                                alert("Felicidades ha sido promovido a sexto y su  desempeño fue E");
                            break
                            case 6:
                                alert("Felicidades ha sido promovido a septimo y su  desempeño fue E");
                            break
                            case 7:
                                alert("Felicidades ha sido promovido a octavo y su  desempeño fue E");
                            break
                            case 8:
                                alert("Felicidades ha sido promovido a noveno y su  desempeño fue E");
                            break
                            case 9:
                                alert("Felicidades ha sido promovido a decimo y su  desempeño fue E");
                            break
                            case 10:
                                alert("Felicidades ha sido promovido a once y su  desempeño fue E");
                            break
                            case 11:
                                alert("Felicidades, se puede graduar pues su  desempeño fue E");
                            break
                        }

                    }