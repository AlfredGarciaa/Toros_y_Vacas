function buscarVaca(vec1,vec2) {
  let resp=[];
  for(var i = 0;i<vec1.length;i++) {
    if(vec1.includes(vec2[i])) {
      resp = resp + "*";
    }
    else{
       resp = resp + ""
    }
  }
  return resp;
};

function buscarToro(vec1,vec2) {

  let resp="";

  for(var i = 0;i<vec1.length;i++) {
    if(vec1[i]==vec2[i])
      resp = "!";
  }
  return resp;
}

/*function buscarVacayToro(vec1,vec2) {

  var res1=[],res2=[],ResTotal=[];

  res1+=buscarVaca(vec1,vec2);
  res2+=buscarToro(vec1,vec2);
  ResTotal=res1.concat(res2);
  return ResTotal;
}*/

//export default buscarVacayToro;
export { buscarVaca, buscarToro };
