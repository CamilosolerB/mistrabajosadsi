$(document).ready(function(){

    $('.compara').on('click',function(){

        let r,g,b;


        r = document.getElementById('rojo').value;
        g = document.getElementById('verde').value;
        b = document.getElementById('azul').value;

        iniciar(r,g,b)

    })

})


function iniciar(red, green, blue){


    const redneuronal = new brain.NeuralNetwork();

    let gen = 255;

    let r= red/gen;
    let g = green / gen;
    let b = blue / gen;


    const datos = [
        { //naranja claro
            "input":{"R": 0.960, "G": 0.7176, "B": 0.6941},     
            "output":{"claro": 1}
        },
        { //verde claro
            "input":{"R": 0.33333, "G": 0.8901, "B": 0.1764},     
            "output":{"claro": 1}
        },
        { // azul oscuro
            "input":{"R": 0, "G": 0.1098, "B": 1},     
            "output":{"oscuro": 1}
        },
        { //rojo oscuro
            "input":{"R": 0.9803, "G": 0.003921, "B": 0.003921},     
            "output":{"oscuro": 1}
        }

    ];

    redneuronal.train(datos)

    let result = brain.likely({"R":r,"G":g, "B":b}, redneuronal)
    alert(result)
}

