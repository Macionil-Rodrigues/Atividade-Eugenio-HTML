const valorCarro = document.getElementById('idVCarro');
const arCond = document.getElementById('idArCond');
const pintura = document.getElementById('idPinturaMet');
const vidro = document.getElementById('idVidroEl');
const direcao = document.getElementById('idDirecaoHid');
const resultado = document.getElementById('idOnResultado');

function calcularValorCarro(valorCarro) {
    const vArCond = Number(1700);
    const vPintura = Number(800);
    const vVidro = Number(1200);
    const vDirecao = Number(2000);
    
    if(arCond.checked){
    valorCarro+=vArCond;
}
if(pintura.checked){
    valorCarro+=vPintura;
}
if(vidro.checked){
    valorCarro+=vVidro;
}
if(direcao.checked){
    valorCarro+=vDirecao;

}
return " O valor do carro é: "+valorCarro
}

function eventoBntExecutar() {
   const  valorFinal =calcularValorCarro(Number(valorCarro.value));
   const saida = valorFinal;
   resultado.innerText = saida;

}