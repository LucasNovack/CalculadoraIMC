let form = document.getElementById("formulario").addEventListener("submit", calculate)

function calculate(){

    window.event.preventDefault();

    let altura = document.getElementById("altura").value;
    let peso = document.getElementById("peso").value;
    let resultado = parseFloat(peso / Math.pow(altura,2));
    let areaResultado = document.getElementById("imc");
    areaResultado.innerText = resultado.toFixed(2);
    
    document.getElementById("formulario").reset();
    
    
}
