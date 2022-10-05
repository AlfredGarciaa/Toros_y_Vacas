function buscarVacayToro(vec1,vec2) {

  let resp="";
  let resp2="";
  let resptotal="";

  for(var i = 0;i<vec1.length;i++) {
    if(vec1.includes(vec2[i])) {
      resp = resp + "*";
    }
  }
  for(var j = 0;j<vec1.length;j++){
    {
      for(var k = 0;k<vec2.length;k++){
        if(j!=k && vec1[j]==vec2[j]){

          resp2 = resp2 + "!";
        }
      }
      
    }
  }
  return resptotal=resp+resp2;
}

export default buscarVacayToro;
