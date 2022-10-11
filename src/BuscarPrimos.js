Busca_Primos(codigo) {

    const codVec1 = this.separarCodigo(codigo);
    let resp = "";
    for(var i=0; i<codVec1.length; i++) {
        if(this.Primo(codVec1[i])){
            resp = "%"
        }
    }   
    return resp;
}

Primo(num) {

    for (var i=2; i<num; i++) {
      if (num % i === 0) {
        return false;
      }
    }
    return num !== 1;
}

export default Busca_Primos;
