import codigoSecreto from "./Vaca_Toro.js"

describe("CODIGO SECRETO", () => {
  //Alfred
  it("Cuando jugador A ingrese un codigo secreto vacio, deberia devolver codigo vacio ", () => {
    expect(codigoSecreto("")).toEqual("Codigo Vacio");
  });
  it("Cuando jugador A ingrese un codigo secreto de 4 digitos, deberia devolver dicho codigo ", () => {
    expect(codigoSecreto(1206)).toEqual(1206);
  });
  it("Cuando jugador A ingrese un codigo secreto de 5 digitos, deberia devolver dicho codigo ", () => {
    expect(codigoSecreto(45782)).toEqual(45782);
  });
  it("Cuando jugador A ingrese un codigo secreto de 6 digitos, deberia devolver dicho codigo ", () => {
    expect(codigoSecreto(123456)).toEqual(123456);
  });
  
  //Marcelo
  it("Cuando jugador B ingrese un codigo secreto vacio, deberia devolver codigo vacio ", () => {
    expect(codigoSecreto("")).toEqual("Codigo Vacio");
  });
  it("Cuando jugador B ingrese un codigo secreto de 4 digitos, deberia devolver dicho codigo ", () => {
    expect(codigoSecreto(2344)).toEqual(2344);
  });

});
