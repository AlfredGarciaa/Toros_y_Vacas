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
function buscarToro(vec1,vec2){
    let resp2=[];
  for(var j = 0;j<vec1.length;j++){
    {
      for(var k = 0;k<vec2.length;k++){
        if(j!=k && vec1[j]==vec2[k]){

          resp2 += "!";
        }
        else{
          resp2 += "";
        }
      }
      
    }
  }
  return resp2;
}
function buscarVacayToro(vec1,vec2){
  var res1=[],res2=[],ResTotal=[];
  res1+=buscarVaca(vec1,vec2);
  res2+=buscarToro(vec1,vec2);
  ResTotal=res1.concat(res2);
  return ResTotal;

}

export default buscarVacayToro;
