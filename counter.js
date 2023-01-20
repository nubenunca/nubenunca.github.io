let counterElement = document.getElementById("counter");

let buttonTechnology = document.getElementsByTagName("button")[0];

let sum = 0;

function counter() {
  sum++;
  counterElement.innerHTML = sum;
}

buttonTechnology.addEventListener("click", counter);

let restartButton = document.getElementById("restart");
restartButton.addEventListener("click", restart);

function restart() {
  counterElement.innerHTML = 0;
}

let hundredButton = document.getElementById("hundred");
function initializedAt100() {
  counterElement.innerHTML = 100;
}
hundredButton.addEventListener("click", initializedAt100);
