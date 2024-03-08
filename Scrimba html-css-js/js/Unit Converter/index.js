const lenEl = document.getElementById("len-el");
const volEl = document.getElementById("vol-el");
const massEl = document.getElementById("mass-el");
const inputEl = document.getElementById("input-el");
const convertBtn = document.getElementById("convert-btn");
inputEl.value = 0;
let num = 0;

convertBtn.addEventListener("click", function () {
  console.log("clicked");
  num = inputEl.value;
  display();
});

function display() {
  lenEl.textContent = `${num} meters = ${conversion(
    3.281 // 1 meter = 3.281 feet
  ).toFixed(3)} feet | ${num} feet = ${conversion(1 / 3.281).toFixed(
    3
  )} meters`;
  volEl.textContent = `${num} liters = ${conversion(
    0.264 // 1 liter = 0.264 gallon
  ).toFixed(3)} gallons | ${num} gallons = ${conversion(1 / 0.264).toFixed(
    3
  )} liters`;
  massEl.textContent = `${num} kilos = ${conversion(
    2.204 //1 kilogram = 2.204 pound
  ).toFixed(3)} pounds | ${num} pounds = ${conversion(1 / 2.204).toFixed(
    3
  )} kilos`;
}

function conversion(conv) {
  return num * conv;
}
