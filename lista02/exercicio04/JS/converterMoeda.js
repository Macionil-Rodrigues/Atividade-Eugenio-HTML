const campoReal  = document.getElementById("idValorReal");
const resultado  = document.getElementById("idOnResultado");

function converter(real, taxa) {
  return real / taxa;
}

function moedaSelecionada() {
  return document.querySelector('input[name="moeda"]:checked');
}

function eventoBntMoedaSelecionada() {
  
  const real = Number(campoReal.value);
  const sel = moedaSelecionada();

  if (!sel) {
    resultado.innerText = "Escolha uma moeda para converter.";
    return;
  }

  const codigo = sel.value; 
  let taxa = 0;
  let sigla = codigo;

  
  switch (codigo) {
    case "USD":
      taxa = 5.65;
      break;
    case "EUR":
      taxa = 6.10;
      break;
    case "GBP":
      taxa = 7.25;
      break;
    case "ARS":
      taxa = 0.020;
      break;
    default:
      resultado.innerText = "Moeda inválida.";
      return;
  }

  const convertido = converter(real, taxa);

  resultado.innerText =
    "R$ " + real.toFixed(2) +
    " equivalem a " + sigla + " " + convertido.toFixed(2) +
    " (câmbio: " + taxa + ").";
}
