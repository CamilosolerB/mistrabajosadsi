//traingulo de asteriscos
let numPisos;
numPisos=parseInt(prompt("Digite el numero de asteriscos en su base"));
function pyramid(numPisos) {
  for (let i = 0; i < numPisos; i++) {
    let piso = '';
    for (let j = 0; j < i + 1; j++) {
      piso = piso + '*';
    }
    console.log(piso)
  }
}

pyramid(numPisos); 