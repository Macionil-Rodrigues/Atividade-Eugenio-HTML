const campoReal = document.getElementById("idValorReal");
const resultado = document.getElementById("idOnResultado");

function converter(real, taxa) {
  return real / taxa;
}

function moedaSelecionada() {
  return document.querySelector('input[name="moeda"]:checked');
}


function eventoBntMoedaSelecionada() {
  const real = Number(campoReal.value);
  const selecionada = moedaSelecionada();
  const taxa = Number(selecionada.value);
  const sigla = selecionada.dataset.sigla;
  const convertido = converter(real, taxa);

  resultado.innerText = "R$" + real.toFixed(2) + " equivalem a " + sigla + " " + convertido.toFixed(2) + " câmbio: " + taxa + ".";
}