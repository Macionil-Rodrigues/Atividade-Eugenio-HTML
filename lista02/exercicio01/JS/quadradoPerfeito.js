const numero = document.getElementById('idNumero');
const bntValidar = document.getElementById('idOnVerificar');
const resultado = document.getElementById('idOnResultado');

function calcularQuadradoP(numero) {
    const raiz = Math.sqrt(numero);
    if (numero == Math.pow(Math.trunc(raiz), 2)) {
        return "É um quadrado perfeito "
    } else {
        return "Não é um quadrado perfeito"
    }
}
function eventoBntVerificar() {
const numeroValidado = Number(numero.value);
const quadradoPerfeito = calcularQuadradoP(numero.value);
const saida = "O numero "+numeroValidado+" "+quadradoPerfeito;
resultado.innerText = saida;
}
