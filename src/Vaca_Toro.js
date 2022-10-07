import Separar_Codigo from "./Separador.js"
import Recibir_Codigo from "./Jugador_A.js"

function Mensaje_Felicidades() {

  return "Felicidades Adivinaste El codigo";
}

function Buscar_Vaca_Toro(codigoSecreto,codigoIngresado) {   

    const codVec1 = Separar_Codigo(codigoSecreto);
    const codVec2 = Separar_Codigo(codigoIngresado);
    let output = "";

    for(var i = 0; i<codVec1.length; i++) {
      if(codVec1[i] == codVec2[i]) {
          output += "!";
      }
      else {
        if(codVec1.includes(codVec2[i])) {
          output += "*";
        }
      }    
    }    
    return output;
}

function Comparar_Codigo(codigoSecreto, codigoIngresado) {

    let output = Recibir_Codigo(codigoIngresado)

    if(codigoSecreto == codigoIngresado) {
      output = Mensaje_Felicidades();
    }
    if(output != "Codigo Vacio" && codigoSecreto!=codigoIngresado) {
        output = Buscar_Vaca_Toro(codigoSecreto,codigoIngresado);
    }
    return output;
}
export default Comparar_Codigo;
