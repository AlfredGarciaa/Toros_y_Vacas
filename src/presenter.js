import Vaca_Toro from "./Vaca_Toro.js";

const numIntentos = document.querySelector("#intentos");
const codigoSecreto = document.querySelector("#codigo-secreto");
const intent = document.querySelector("#intento");

const form = document.querySelector("#inicio-form");
const form2 = document.querySelector("#intento-form");
const form3 = document.querySelector("#aleatorio-form");
const div = document.querySelector("#resultado-div");

let secreto;
let intentos;

form.addEventListener("submit", (event) => {

  event.preventDefault();
  secreto = codigoSecreto.value;
  intentos = Number.parseInt(numIntentos.value);
  form.reset();
});

form2.addEventListener("submit", (event) => {

  event.preventDefault();
  const firstNumber = intent.value;
  let juego = new Vaca_Toro();
  let resultado = juego.Comparar_Codigo(secreto,firstNumber);
  intentos--

  if(intentos == 0) {

    div.innerHTML = "<p>" + " Perdiste :( " + " El codigo secreto era: " + secreto + "</p>";
  }
  else {

    div.innerHTML = "<p>" + resultado + " Te quedan: " + intentos + " intentos" + "</p>";
  }
});

form3.addEventListener("submit", (event) => {

  event.preventDefault();
  secreto = Codigo_Secreto_Random();
  intentos = Number.parseInt(numIntentos.value);
  form.reset();
});
