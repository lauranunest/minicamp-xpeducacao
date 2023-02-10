// pegar os dados do HTML
let soma = document.getElementById('soma');
let subtracaoA = document.getElementById('subtracaoA');
let subtracaoB = document.getElementById('subtracaoB');
let multiplicacao = document.getElementById('multiplicacao');
let divisaoA = document.getElementById('divisaoA');
let divisaoB = document.getElementById('divisaoB');
let potenciaA = document.getElementById('potenciaA');
let potenciaB = document.getElementById('potenciaB');
let raizA = document.getElementById('raizA');
let raizB = document.getElementById('raizB');
let fatorialA = document.getElementById('fatorialA');
let fatorialB = document.getElementById('fatorialB');
let porcentagemA = document.getElementById('porcentagemA');
let porcentagemB = document.getElementById('porcentagemB');
let media = document.getElementById('media');

soma.innerHTML = 0;
subtracaoA.innerHTML = 0;
subtracaoB.innerHTML = 0;
multiplicacao.innerHTML = 0;
divisaoA.innerHTML = 0;
divisaoB.innerHTML = 0;
potenciaA.innerHTML = 0;
potenciaB.innerHTML = 0;
raizA.innerHTML = 0;
raizB.innerHTML = 0;
fatorialA.innerHTML = 0;
fatorialB.innerHTML = 0;
porcentagemA.innerHTML = 0;
porcentagemB.innerHTML = 0;
media.innerHTML = 0;

// fazer os cálculos
function somar(a, b) {
  return a + b;
}

const substrairA = (a, b) => a - b;

const substrairB = (a, b) => b - a;

const multiplicar = (a, b) => a * b;

const dividirA = (a, b) => (a / b).toFixed(2);

const dividirB = (a, b) => (b / a).toFixed(2);

const potenciarA = (a, b) => a ** b;

const potenciarB = (a, b) => b ** a;

const raizDeA = (a) => (Math.sqrt(a)).toFixed(2);

const raizDeB = (b) => (Math.sqrt(b)).toFixed(2);

function fatorA(a) {
  if (a === 0 || a === 1)
    return 1;
  for (var i = a - 1; i >= 1; i--) {
    a *= i;
  }
  return a;
}

function fatorB(b) {
  if (b === 0 || b === 1)
    return 1;
  for (var i = b - 1; i >= 1; i--) {
    b *= i;
  }
  return b;
}

const porcentagemDeA = (a, b) => (b * 100 / a).toFixed(0);

const porcentagemDeB = (a, b) => a * 100 / b;

const mediaAB = (a, b) => (a + b) / 2;

// criar uma função ao clicar no botão calcular
const calcular = () => {
  let inputA = document.getElementById('primeiroNumero').value;
  let inputB = document.getElementById('segundoNumero').value;

  let a = parseFloat(inputA);
  let b = parseFloat(inputB);

  soma.innerHTML = somar(a, b);
  subtracaoA.innerHTML = substrairA(a, b);
  subtracaoB.innerHTML = substrairB(a, b);
  multiplicacao.innerHTML = multiplicar(a, b);
  divisaoA.innerHTML = dividirA(a, b);
  divisaoB.innerHTML = dividirB(a, b);
  potenciaA.innerHTML = potenciarA(a, b);
  potenciaB.innerHTML = potenciarB(a, b);
  raizA.innerHTML = raizDeA(a);
  raizB.innerHTML = raizDeB(b);
  fatorialA.innerHTML = fatorA(a);
  fatorialB.innerHTML = fatorB(b);
  porcentagemA.innerHTML = porcentagemDeA(a, b);
  porcentagemB.innerHTML = porcentagemDeB(a, b);
  media.innerHTML = mediaAB(a, b);
};

function start() {
  var botao = document.querySelector('#botaoCalcular');

  botao.addEventListener('click', calcular);
}

start();
