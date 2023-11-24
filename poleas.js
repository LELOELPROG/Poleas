
const boton = document.querySelector("#boton");

boton.addEventListener("click", formula);

function formula() {
    let b = parseFloat(document.getElementById("b").value);
    let c = parseFloat(document.getElementById("c").value);
    let x = parseFloat(document.getElementById("x").value);
    let spanResultado = document.getElementById("formula")


    // Calcular la fórmula
    let resultado = (c * b + x) / (2 * b);

    /*if(b == 0){
        resultado = c * b + x;
        spanResultado.innerHTML = resultado;
    } else{
        let resultado = (c * b + x) / (2 * b);
        spanResultado.innerHTML = resultado;
    } */
    spanResultado.innerHTML = resultado;
}
