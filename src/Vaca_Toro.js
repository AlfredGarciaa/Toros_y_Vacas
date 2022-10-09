class Vaca_Toro {

  Mensaje_Felicidades() {

    return "Felicidades Adivinaste El codigo";
  }
  
  Buscar_Vaca_Toro(codigoSecreto,codigoIngresado) {  

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
    }    
    if(coonf == false) {
      output = "Codigo imcompatible";
    }                
    return output;
  }

  Unir(cod) {

    let output = "";

    for(var i=0; i<cod.length; i++) {
      output += cod[i];
    }
    return output;
  }    

  Comparar_Codigo(codigoSecreto, codigoIngresado) {

    let output = this.Validar_Codigo(codigoIngresado)

    if(codigoSecreto == codigoIngresado) {
      output = this.Mensaje_Felicidades();
    }
    if(output != "Codigo Vacio" && codigoSecreto!=codigoIngresado) {
      output = this.Buscar_Vaca_Toro(codigoSecreto,codigoIngresado);            
      if(output != "Codigo imcompatible") {              
        output = this.Unir(this.Separar_Codigo(output).sort()) 
      }
    }
    return output;
  }

  Separar_Codigo(codigoSecreto) {

    let numString = String(codigoSecreto);
    const array = []    

    for(var i=0; i<numString.length; i++) {
      let valInsert = numString.charAt(i);
      array.push(valInsert);        
    }
    return array;
  }

  Validar_Codigo(codigo) {

    if(codigo == "") {
      return "Codigo Vacio";    
    }
    return codigo;
  }
}

export default Vaca_Toro;
