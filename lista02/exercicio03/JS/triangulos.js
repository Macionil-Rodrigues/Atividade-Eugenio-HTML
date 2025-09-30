const valorA = document.getElementById('idA');
const valorB = document.getElementById('idB');
const valorC = document.getElementById('idC');
const resultado = document.getElementById('idOnResultado');

function validandoTriangulo(valorA,valorB,valorC) {
    if(valorA+valorB>valorC && valorA+valorC>valorB && valorB+valorC>valorA){
if(valorA==valorB && valorB==valorC){
    return "Esse triangulo é  Equilátero";
}else if(valorA == valorB||valorA==valorC||valorB==valorC){
    return "Esse triangulo é isósceles";
}else{
  return"Esse triangulo é isósceles";
 }
}else{
    return "Os numeros não formam um Triangulo";
}
}

function eventoBntValidar() {
    const lado1= Number(valorA.value);
    const lado2= Number(valorB.value);
    const lado3= Number(valorC.value)
    const numeroValidado = validandoTriangulo(lado1,lado2,lado3);
    const saida = numeroValidado;
    resultado.innerText= saida;
}