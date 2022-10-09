import Vaca_Toro from "./Vaca_Toro.js";

class Juego{

    constructor(codigoSecreto, intentos) {

        const codigoSecreto = codigoSecreto
        let intentos = intentos;    
        let vacaToro = new vacaToro();    
    }

    Jugar(codigoIngresado) { 

        let val2 = Vaca_Toro.Validar_Codigo(codigoIngresado);
        let resultado = Vaca_Toro.Comparar_Codigo(codigoSecreto,val2);  
        intentos--

        if(intentos == 0) {     

            div.innerHTML = "<p>" + "Perdiste el juego por falta de intentos. " +" El codigo secreto era: "+ secreto +"</p>";
        }
        else {
            div.innerHTML = "<p>" + resultado + " Te quedan: " + intentos + " intentos" + "</p>";
        }
    }
}

export default Juego;
