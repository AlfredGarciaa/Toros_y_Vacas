import Separar_Codigo from "./Separador.js";
import Buscar_Vaca_Toro from "./Vaca_Toro.js";

const first = document.querySelector("#codigo-secreto");
const second = document.querySelector("#codigo-adiv");
const form = document.querySelector("#JUEGO-VACASYTOROS-form");
const div = document.querySelector("#resultado-div");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const codsecr = Separar_Codigo(first.value);
  const codadiv = Separar_Codigo(second.value);

  div.innerHTML = "<p>" + Buscar_Vaca_Toro(codsecr, codadiv) + "</p>";
});
