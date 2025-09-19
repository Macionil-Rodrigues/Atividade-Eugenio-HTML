const salarioC = document.getElementById("idInSalario");
const bntCalcular = document.getElementById("bntCalcularReajuste");
const resultado = document.getElementById("idOnResultado");

function calcularReajuste(salario) {
    if (salario <= 1412) {
        let salarioAjuste = (salario * (1 + 0.50)).toFixed(2);
        return " Reajustado é: R$" + salarioAjuste;
    } if (salario > 1412) {
        let salarioAjuste = (salario * (1 + 0.40)).toFixed(2);
        return " reajustado é: R$" + salarioAjuste;
    }
}
function eventoBntCalcularReajuste() {
    const salariob = Number(salarioC.value);
    const reajuste = calcularReajuste(salariob);
    const saida = reajuste;
    resultado.innerText = saida;
}