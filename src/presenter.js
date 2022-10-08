import Vaca_Toro from "./Vaca_Toro.js";

const codigoSecreto = document.querySelector("#codigo-secreto");
const intent = document.querySelector("#intento");
const form = document.querySelector("#inicio-form");
const form2 = document.querySelector("#intento-form");
const div = document.querySelector("#resultado-div");

let aux;

form.addEventListener("submit", (event) => {
  event.preventDefault();
  div.innerHTML = "<p>" + aux + "</p>";
});

form2.addEventListener("submit", (event) => {
  event.preventDefault();
  const firstNumber = Number.parseInt(intent.value);
  let juego = new Vaca_Toro();
  aux = Number.parseInt(codigoSecreto.value);
  let resultado = juego.Comparar_Codigo(aux,firstNumber);
  div.innerHTML = "<p>" + resultado + "</p>";
});
