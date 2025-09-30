const valorCarroEl = document.getElementById('idVCarro');
const arCondEl = document.getElementById('idArCond');
const pinturaEl = document.getElementById('idPinturaMet');
const vidroEl = document.getElementById('idVidroEl');
const direcaoEl = document.getElementById('idDirecaoHid');
const resultadoEl = document.getElementById('idOnResultado');

function calcularValorCarro(valorBase) {
    let total = valorBase;


    const selecionados = [];
    if (arCondEl.checked) selecionados.push('ar');
    if (pinturaEl.checked) selecionados.push('pintura');
    if (vidroEl.checked) selecionados.push('vidro');
    if (direcaoEl.checked) selecionados.push('direcao');


    for (const item of selecionados) {
        switch (item) {
            case 'ar':
                total += 1700;
                break;
            case 'pintura':
                total += 800;
                break;
            case 'vidro':
                total += 1200;
                break;
            case 'direcao':
                total += 2000;
                break;
            default:
                break;
        }
    }

    return "O valor do carro é: R$ " + total.toFixed(2);
}

function eventoBntExecutar() {
    const base = Number(valorCarroEl.value);
    const saida = calcularValorCarro(base);
    resultadoEl.innerText = saida;
}