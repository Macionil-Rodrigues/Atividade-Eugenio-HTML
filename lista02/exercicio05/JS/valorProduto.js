
const etiqueta = document.getElementById('idValor');
const resultado = document.getElementById('idOnResultado');

function calculaFormPagamento(valorProduto, taxa) {
    return valorProduto * taxa;
}

function EventoBntValidar() {
    const selecionado = document.querySelector('input[name="formaPagamento"]:checked');
    const valorProduto = Number(etiqueta.value);
    const taxa = Number(selecionado.value);
    const total = Number(calculaFormPagamento(valorProduto, taxa));
    const formPagamento = selecionado.dataset.sigla;
    let  parcelas = 0;
    let  saida ="";
    if (formPagamento === "2X") {
        parcelas = total / 2;
        saida = "Para pagar em " + formPagamento + " o valor de R$" + valorProduto.toFixed(2) + " sai por R$" + total.toFixed(2) + " em 2X de R$" + parcelas.toFixed(2);
    } else if (formPagamento === "3X") {
        parcelas = total / 3;
        saida = "Para pagar em " + formPagamento + " o valor de R$" + valorProduto.toFixed(2) + " sai por R$" + total.toFixed(2) + " em 3X de R$" + parcelas.toFixed(2);
    } else {
        saida = "Para pagar em " + formPagamento + " o valor de R$" + valorProduto.toFixed(2) + " sai por R$" + total.toFixed(2);
    } {

    }
 resultado.innerText= saida;
}

