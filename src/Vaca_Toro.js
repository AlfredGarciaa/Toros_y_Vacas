class Vaca_Toro {

      // FUNCION PARA BUSCAR BISONTE (Buscador de numeros primos) \\
      Busca_Primos(codigo) {

        const codVec1 = this.Separar_Codigo(codigo);
        let resp = "";
        for(var i=0; i<codVec1.length; i++) {
            if(this.Primo(codVec1[i])){
                resp += "%";
            }
        }   
        return resp;
      }

      // Verifica si es numero primo \\
      Primo(num) {

        for (var i=2; i<num; i++) {
          if (num % i === 0) {
            return false;
          }
        }
        return num !== 1;
      }

  // Mensaje cuando adivinas \\
  Mensaje_Felicidades() {

    return "Felicidades Adivinaste El codigo";
  }
  
  Buscar_Vaca_Toro_Ternera(codigoSecreto,codigoIngresado) {  

    // Para codigo incompatible \\
    let coonf = false;

    const codVec1 = this.Separar_Codigo(codigoSecreto);
    const codVec2 = this.Separar_Codigo(codigoIngresado);
    let output = "";

    for(var i=0; i<codVec1.length; i++) {
      if(codVec1[i] == codVec2[i]){
        output += "!";
        coonf = true;
      }
      else {
        if(codVec1.includes(codVec2[i])) {
          output += "*";
          coonf = true;
        }                                    
      }

          // FUNCION PARA BUSCAR TERNERA \\
          if((codVec1[i]+1 == codVec2[i]) || (codVec1[i]-1 == codVec2[i])) {

            output += "#";
            coonf = true;
          }    
      
    }    
    if(coonf == false) {
      output = "Codigo imcompatible";
    }                
    return output;
  }

  // Adjuntar codigo incompleto para tratar de volver a comparar \\
  Unir(cod) {

    let output = "";

    for(var i=0; i<cod.length; i++) {
      output += cod[i];
    }
    return output;
  }    

  // !!! FUNCION PRINCIPAL !!! el cual tiene la funcion segun la logica de direccionar a las demas funciones \\
  Comparar_Codigo(codigoSecreto, codigoIngresado) {

    let output = this.Validar_Codigo(codigoIngresado)

    if(codigoSecreto == codigoIngresado) {
      output = this.Mensaje_Felicidades();
    }
    if(output != "Codigo Vacio" && codigoSecreto!=codigoIngresado) {
      output = this.Buscar_Vaca_Toro_Ternera(codigoSecreto,codigoIngresado);            
      if(output != "Codigo imcompatible") {              
        output = this.Unir(this.Separar_Codigo(output).sort()) 
      }
    }

    return output;
  }

  // Dividir la cadena de numeros o letras en posiciones de un Vector, para su futura comparacion por elemento. \\
  Separar_Codigo(codigoSecreto) {

    let numString = String(codigoSecreto);
    const array = []    

    for(var i=0; i<numString.length; i++) {
      let valInsert = numString.charAt(i);
      array.push(valInsert);        
    }
    return array;
  }

  // Acepta si no se ingreso ningun codigo \\
  Validar_Codigo(codigo) {

    if(codigo == "") {
      return "Codigo Vacio";    
    }
    return codigo;
  }

  // Generar un codigo numeral aleatorio, INCOMPLETO \\
  Codigo_Secreto_Random() {

    let codigoSecreto;

    codigoSecreto = Math.floor(Math.random()*(100000-1000+1)+1000);
    
    return codigoSecreto;
  }
}

export default Vaca_Toro;
