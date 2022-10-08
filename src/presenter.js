//import Vaca_Toro from "./Vaca_Toro.js";

const codigoSecreto = document.querySelector("codigo-secreto");
const intent = document.querySelector("#intento");
const form = document.querySelector("#adivinar-form");
const div = document.querySelector("#resultado-div");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  div.innerHTML = "<p>" + "HOLA" + "</p>";
});
