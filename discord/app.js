


// Obteniedno los datos del formulario
let formulario = document.getElementById('formulario');

window.onload = () => {
    imprimir();
}

// Limpia los text
function reset () {
    document.getElementById('marca').value = "";
    document.getElementById('modelo').value = "";
    document.getElementById('matricula').value = "";
    document.getElementById('precio').value = "";
    document.getElementById('imagen').value = "";
}

//Manejo de LocalStorage
function obtenerLS (llave) {
    return JSON.parse(localStorage.getItem(llave));
}

function ponerLS (llave, val) {
    localStorage.setItem(llave, JSON.stringify(val));
}

//funcion para obtener los datos del onsubmit e imprimirlos
function imprimir () {
    let carros = obtenerLS('carros');
    let carrosDiv = document.getElementById("seccion");
    carrosDiv.innerHTML = '';

    if(carros) {

        // Recorriendo el arreglo
        carros.forEach(it => {

            let carroMarca = document.createElement('h1');
            carroMarca.innerHTML = it.marca;

            let carroModelo = document.createElement('h2');
            carroModelo.classList('modelo')
            carroModelo.innerHTML = `Modelo: ${it.modelo}`;

            let carroMatricula = document.createElement('h2');
            carroMatricula.innerHTML = `Placa: ${it.matricula}`;

            let carroImg = document.createElement('img');
            carroImg.src = it.img;

            let carroPrecio = document.createElement('h2');
            carroPrecio.innerHTML = `$ ${it.precio}`;

            let div = document.createElement('div');
            div.classList = "item";
            div.appendChild(carroMarca);
            div.appendChild(carroModelo);
            div.appendChild(carroMatricula);
            div.appendChild(carroImg);
            div.appendChild(carroPrecio);

            carrosDiv.appendChild(div);
        })
    }
}



// Obteniendo los datos ingresados en el formulario y validando 
formulario.onsubmit = (event) => {
    
    event.preventDefault();

    let marca = document.getElementById('marca').value;
    let modelo = document.getElementById('modelo').value;
    let matricula = document.getElementById('matricula').value;
    let precio = document.getElementById('precio').value;
    let img = document.getElementById('imagen').value;

    if( !marca || !modelo || !matricula || !precio || !img )
        return alert('Ingrese los campos completos');
    
    // Llenan los datos en el LocalStorage
    let actualLS = obtenerLS('carros');
    let nuevoVal = [];

    if(!actualLS) {
        nuevoVal.push({marca, modelo, matricula, precio, img});
    } else {
        nuevoVal = [...actualLS, {marca, modelo, matricula, precio, img}];
    }

    ponerLS('carros', nuevoVal);

    // Funcion para actualizar despues de ingresar los datos
    imprimir();
    reset();
}
    //traer la informacion del filtro

    let valorfiltro = document.getElementById('buscar').value;
    let tabla = document.getElementById("seccion").value;
    const doc = document;
    searchFilters(valorfiltro,tabla)

    function searchFilters(input,selector){
        doc.addEventListener("keyup",(e) =>{
                doc.querySelectorAll(selector).forEach(el =>
                    el.textContent.toLowerCase().includes(e.target.value)
                )
        })
    }
