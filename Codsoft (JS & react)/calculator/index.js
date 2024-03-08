let displayText = "0";

updateDisplay();

function updateDisplay() {
  document.getElementById("display").innerText = displayText;
}

function addText(button) {
  if (displayText === "0") {
    if (button.innerText === ".") {
      displayText = "0.";
      updateDisplay();
      return;
    }
    displayText = "";
  }
  displayText += button.innerText;
  updateDisplay();
}

function calculate() {
  displayText = Function(`'use strict'; return (${displayText})`)();
  updateDisplay();
}

function allClear() {
  displayText = "0";
  updateDisplay();
}
