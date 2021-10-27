//Preguntas
alert("Si fallas la pregunta, automaticamente estas fuera, !!!CONCENTRATE!!!");
let R1,R2,R3;
R1=prompt("Primera, ¿Colon descubrió América? Si o No");
if(R1=="no" || R1=="NO" || R1=="No"){
   alert("Fin del juego, obtuvo 0 puntos");
}
else if(R1!=="no" || R1!=="NO" || R1!=="No"){
   R2=prompt("Segunda, ¿La independencia de México fue en el año 1810? falso o verdadero");
}
   else if(R2=="verdadero"|| R2=="VERDADERO"|| R2=="Verdadero"){
   alert("Fin del juego ha obtenido 1 Punto");
      }
      else if(R2!=="verdadero"|| R2!=="VERDADERO"|| R2!=="Verdadero"){
         R3=prompt("Tercera y ultima, ¿The Doors fue un grupo de rock Americano? si o no");
      }
      else if(R3=="si"|| R3=="SI" || R3=="Si"){
         alert("Fin del juego, solo ha obtenido 2 puntos");
}

         else if(R3!=="Si"){
            alert("Felicidades ha pasado el juego con 3 puntos");
}
