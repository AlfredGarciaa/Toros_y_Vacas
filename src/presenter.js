import Vaca_Toro from "./Vaca_Toro.js";

const codigoSecreto = document.querySelector("codigo-secreto");
const intent = document.querySelector("#intento");
const form = document.querySelector("#inicio-form");
const form2 = document.querySelector("#intento-form");
const div = document.querySelector("#resultado-div");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  div.innerHTML = "<p>" + "HOLA" + "</p>";
});

form2.addEventListener("submit", (event) => {
  event.preventDefault();
  let juego = new Vaca_Toro();
  let resultado = juego.Comparar_Codigo(codigoSecreto,intent)
  div.innerHTML = "<p>" + resultado + "</p>";
});
