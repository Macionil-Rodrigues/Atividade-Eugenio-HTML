const etiqueta = document.getElementById('idValor');
const resultado = document.getElementById('idOnResultado');

function calculaFormPagamento(valorProduto, taxa) {
    return valorProduto * taxa;
}

function EventoBntValidar() {
    
    const valorProduto = Number(etiqueta.value);

    const selecionado = document.querySelector('input[name="formaPagamento"]:checked');
    if (!selecionado) {
        resultado.innerText = "Escolha uma forma de pagamento.";
        return;
    }

    const taxa = Number(String(selecionado.value).replace(',', '.'));
    const formPagamento = selecionado.dataset.sigla;
    const total = calculaFormPagamento(valorProduto, taxa);

    let parcelas = 0;
    let saida = "";

    switch (formPagamento) {
        case "2X":
            parcelas = total / 2;
            saida = "Para pagar em: " + formPagamento +" o valor de R$ " + valorProduto.toFixed(2) +" sai por R$ " + total.toFixed(2) +" em 2X de R$ " + parcelas.toFixed(2);
            break;

        case "3X":
            parcelas = total / 3;
            saida = "Para pagar em: " + formPagamento +" o valor de R$ " + valorProduto.toFixed(2) +" sai por R$ " + total.toFixed(2) +" em 3X de R$ " + parcelas.toFixed(2);
            break;

        default:
            saida = "Para pagar " + formPagamento +" o valor de R$ " + valorProduto.toFixed(2) +" sai por R$ " + total.toFixed(2);
            break;
    }

    resultado.innerText = saida;
}