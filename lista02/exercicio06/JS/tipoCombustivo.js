const valorEmLitros = document.getElementById("idValor");
const resultado = document.getElementById("idOnResultado");

function calcularValor(litros, precoPorLitro) {
    return litros * precoPorLitro;
}

function EventoBntValidar() {
    const litros = Number(String(valorEmLitros.value).replace(",", "."));
    if (isNaN(litros) || litros <= 0) {
        resultado.innerText = "Informe uma quantidade válida de litros.";
        return;
    }

    const selecionada = document.querySelector('input[name="tipoCombustivel"]:checked');
    if (!selecionada) {
        resultado.innerText = "Escolha um tipo de combustível.";
        return;
    }

    let preco = 0;
    const sigla = selecionada.dataset.sigla || "Combustível";

    // usa switch pelos IDs do seu HTML
    switch (selecionada.id) {
        case "idAlcol":
            preco = Number(selecionada.value);
            break;
        case "idDisel":
            preco = Number (selecionada.value);
            break;
        case "idGasolina":
            preco = Number (selecionada.value);
            break;
        default:
            resultado.innerText = "Tipo de combustível inválido.";
            return;
    }

    const total = calcularValor(litros, preco);
    resultado.innerText = litros + " Litros de " + sigla + " é: R$ " + total.toFixed(2);
}
