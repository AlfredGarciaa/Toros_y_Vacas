import Separar_Codigo from "./Separador.js"
import Recibir_Codigo from "./Jugador_A.js"

class Vaca_Toro {

  Mensaje_Felicidades() {

    return "Felicidades Adivinaste El codigo";
  }

  Buscar_Vaca_Toro(codigoSecreto,codigoIngresado) { 

    let coonf = false;
    const codVec1 = Separar_Codigo(codigoSecreto);
    const codVec2 = Separar_Codigo(codigoIngresado);
    let output = "";

    for(var i=0; i<codVec1.length; i++) {
      if(codVec1[i] == codVec2[i]) {
        output += "!";
        coonf = true;
      }
      else {
        if(codVec1.includes(codVec2[i])) {
          output += "*";
          coonf = true;
        }                                    
      }    
    }    
    if(coonf == false) {
      output = "Codigo imcompatible";
    }                  
    return output;
  }

  Unir(cod) {

    let output="";

    for(var i=0; i<cod.length; i++) {
      output += cod[i];
    }
    return output;
  }   

  Comparar_Codigo(codigoSecreto, codigoIngresado) {

    let output = Recibir_Codigo(codigoIngresado)

    if(codigoSecreto == codigoIngresado) {
      output = this.Mensaje_Felicidades();
    }
    if(output != "Codigo Vacio" && codigoSecreto!=codigoIngresado) {
      output = this.Buscar_Vaca_Toro(codigoSecreto,codigoIngresado);            
      if(output != "Codigo imcompatible") {                
        output = this.Unir(Separar_Codigo(output).sort()) 
      }
    }
    return output;
  }
}

export default Vaca_Toro;
