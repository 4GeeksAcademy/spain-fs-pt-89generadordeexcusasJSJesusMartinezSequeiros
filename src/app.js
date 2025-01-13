/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

let who = ["El perro", "Mi abuela", "El cartero", "Mi pájaro"];
let action = ["se comió", "orinó en", "aplastó", "rompió"];
let what = ["mi tarea", "mi teléfono", "el coche", "las llaves"];
let when = [
  "antes de la clase",
  "mientras dormía",
  "mientras hacía ejercicio",
  "durante mi almuerzo",
  "mientras rezaba"
];

function generateExcuse() {
  let whoIndex = Math.floor(Math.random() * who.length);
  let actionIndex = Math.floor(Math.random() * action.length);
  let whatIndex = Math.floor(Math.random() * what.length);
  let whenIndex = Math.floor(Math.random() * when.length);

  return (
    who[whoIndex] +
    " " +
    action[actionIndex] +
    " " +
    what[whatIndex] +
    " " +
    when[whenIndex]
  );
}
window.onload = function() {
  let excuseElement = document.getElementById("excuse");
  excuseElement.innerHTML = generateExcuse();

  let button = document.getElementById("generateBtn");
  button.addEventListener("click", function() {
    excuseElement.innerHTML = generateExcuse();
  });
};
