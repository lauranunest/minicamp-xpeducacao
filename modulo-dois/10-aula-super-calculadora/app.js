// pegar os dados do HTML
let soma = document.getElementById('soma');
let subtracaoA = document.getElementById('subtracaoA');
let subtracaoB = document.getElementById('subtracaoB');

soma.innerHTML = 0;
subtracaoA.innerHTML = 0;
subtracaoB.innerHTML = 0;

// fazer os cálculos
function somar(a, b) {
  return a + b;
}

const substrairA = (a, b) => a - b;

const substrairB = (a, b) => b - a;

// criar uma função ao clicar no botão calcular
const calcular = () => {
  let inputA = document.getElementById('primeiroNumero').value;
  let inputB = document.getElementById('segundoNumero').value;

  let a = parseFloat(inputA);
  let b = parseFloat(inputB);

  soma.innerHTML = somar(a, b);
  subtracaoA.innerHTML = substrairA(a, b);
  subtracaoB.innerHTML = substrairB(a, b);
};

function start() {
  var botao = document.querySelector('#botaoCalcular');

  botao.addEventListener('click', calcular);
}

start();
