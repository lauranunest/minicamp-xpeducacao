function start() {
  console.log(calculateImc(94, 1.73));
  var buttonCalculateImc = document.querySelector('#button-calculate-imc');
  buttonCalculateImc.addEventListener('click', handleButtonClick);
}

function calculateImc(weight, height) {
  return weight / (height * height);
}

function handleButtonClick() {
  console.log('cliquei');
}

start();
