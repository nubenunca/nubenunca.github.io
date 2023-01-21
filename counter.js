let counterElement = document.getElementById("counter");

let buttonTechnology = document.getElementsByTagName("button")[0];

let sum = 0;

function counter() {
  sum++;
  counterElement.innerHTML = parseInt(sum);
}

buttonTechnology.addEventListener("click", counter);

let restartButton = document.getElementById("restart");
restartButton.addEventListener("click", restart);

function restart() {
  sum = 0;
  counterElement.innerHTML = parseInt(0);
}

let hundredButton = document.getElementById("hundred");
function initializedAt100() {
  sum = 100;
  counterElement.innerHTML = parseInt(100);
}
hundredButton.addEventListener("click", initializedAt100);

let decreaseButton = document.getElementById("decrease");
function decrease() {
  sum--;
  counterElement.innerHTML = parseInt(sum);
}

decreaseButton.addEventListener("click", decrease);

let initializerInput = document.getElementById("initializer");
console.log(initializerInput);

function initialize(event) {
  sum = parseInt(event.target.value);
  counterElement.innerHTML = parseInt(sum);
  initializerInput.value = null;
}

initializerInput.addEventListener("change", initialize);
