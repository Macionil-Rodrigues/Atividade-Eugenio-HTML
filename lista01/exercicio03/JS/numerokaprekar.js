const numeroInserido = document.getElementById("IdNumero");
const bntValidar = document.getElementById("bntValidarNumero");
const resultadoValidado = document.getElementById("idOnResultado");

function validarNumero(valor) {
  const numero = Number(valor);
  const resultado = Math.pow(Math.trunc(numero / 100) + (numero % 100), 2);

  if (numero === resultado) {
    return 'o numero ' + numero + ' é um numero Kaprekar';
  } else {
    return 'o numero ' + numero + ' não é um numero Kaprekar';
  }
}

function eventoBntValidar() {
  const saida = validarNumero(numeroInserido.value); 
  resultadoValidado.innerText = saida;               
}