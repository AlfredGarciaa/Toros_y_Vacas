function Buscar_Vaca_Toro(vec1,vec2) {

  let resp = "";

  for(var i = 0; i<vec1.length; i++) {
    if(vec1[i] == vec2[i]) {
      resp = resp + "!";
    }
    else {
      if(vec1.includes(vec2[i])) {
        resp = resp + "*";
      }
    }    
  }
  if(vec2 == "") {
    resp = "ingresaste codigo vacio";
  }
  return resp;
}

export default Buscar_Vaca_Toro;
