const valorA  = document.getElementById('idA');
const valorB  = document.getElementById('idB');
const valorC  = document.getElementById('idC');
const saida = document.getElementById('idOnResultado');


function calcularRaizes(a, b, c) {
  const delta = b*b - 4*a*c;

  if (delta < 0) {
    return 'RAÍZES IMAGINÁRIAS';
  }
  if (delta === 0) {
    const x = (-b) / (2*a);
    return 'RAIZ ÚNICA: x = ' + x;
  }

  const sqrtDelta = Math.sqrt(delta);
  const x1 = (-b + sqrtDelta) / (2*a);
  const x2 = (-b - sqrtDelta) / (2*a);
  return 'RAÍZES DISTINTAS: x1 = ' + x1 + ' e x2 = ' + x2;
}


function eventoBntCalcularRaizes() {
  
  const a = Number(valorA.value);
  const b = Number(valorB.value);
  const c = Number(valorC.value);

  saida.innerText = calcularRaizes(a, b, c);
}