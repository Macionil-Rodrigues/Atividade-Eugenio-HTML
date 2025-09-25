const nomeInput           = document.getElementById('idNome');
const contaInput          = document.getElementById('idConta');
const saldoSemestralInput = document.getElementById('idSaldoSemestral');
const btnCalcular         = document.getElementById('bntCalcularTarifa');
const resultadoValidado   = document.getElementById('idOnResultado');

function calcularTarifaBanco() {
  const nome = nomeInput.value;          
  const numeroconta = contaInput.value;  

  const bruto = String(saldoSemestralInput.value).replace(/\./g, '').replace(',', '.');
  const saldoSemestral = Number(bruto);
  const saldoMedio = saldoSemestral / 6;
  let tarifa = 0;
  if (saldoMedio <= 1000) {
    tarifa = 25.00;
} else if (saldoMedio >= 1000 && saldoMedio < 2000) {
    tarifa = 20.00;
} else if (saldoMedio >= 2000 && saldoMedio <= 3500) {
    tarifa = 13.00;
} else if (saldoMedio > 3500) {
    tarifa = 0;
}

 
  resultadoValidado.innerText =
    "Cliente: " + nome +
    ". Conta: " + numeroconta +
    ". Tarifa bancária: " + tarifa.toFixed(2);
}

