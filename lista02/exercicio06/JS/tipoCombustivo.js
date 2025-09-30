const valorEmLitros = document.getElementById("idValor");
const resultado = document.getElementById("idOnResultado");

function calcularValor(litroCombus, tipoCombus) {
    return litroCombus * tipoCombus;
}

function EventoBntValidar() {
    const selecionada = document.querySelector('input[name="tipoCombustivel"]:checked');
    const litroCombus = Number(valorEmLitros.value);
    const tipoCombus = Number(selecionada.value);
    const valor = calcularValor(litroCombus, tipoCombus);
    const sigla = selecionada.dataset.sigla;
    resultado.innerText = litroCombus + " Litros de " + sigla + " é: R$ " + valor.toFixed(2);
}
