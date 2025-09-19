const numero = document.getElementById("idInNumero");
const bntVerificar = document.getElementById("bntVerificarNumero");
const resultado = document.getElementById("idOnResultado");

function calcularImparPar(numero) {
    const numeroN = Number(numero);
    const resto = numeroN % 2;
    if (resto == 0) return "Par"; 
    if (resto != 0) return "Impar";
}

function eventoBtnValidarNumero() {
 const numeroI = Number(numero.value);
 const parImpar = calcularImparPar(numero);
 const saida = "O numero "+ numeroI.value+"é "+ parImpar;
 resultado.innerText = saida;
}