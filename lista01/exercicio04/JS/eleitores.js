const idadeInserida = document.getElementById("idIdade");
const bntValidar = document.getElementById("bntValidarEleitor");
const resultadoValidado = document.getElementById("idOnResultado");

function eventoBntValidar() {
  const idade = Number(idadeInserida.value);

  if (idade < 16) {
    resultadoValidado.innerText = "Não eleitor";
  }
  if (idade >= 18 && idade <= 65) {
    resultadoValidado.innerText = "Eleitor Obrigatorio";
  }
if ((idade >= 16 && idade < 18) || idade > 65) {
  resultadoValidado.innerText = "Eleitor Facultativo";
}
}