import codigoSecreto from "./JugadorA.js"
import recibirCodigoB from "./JugadorB.js"
import separarCodigo from "./Vaca_Toro.js"

describe("CODIGO SECRETO - 'JUGADOR A'", () => {
// Alfred Garcia
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
// Marcelo Salinas
});
  
describe("'JUGADOR B'", () => {
// Marcelo Salinas
  it("Cuando jugador B ingrese un codigo secreto vacio para adivinar el codigo, deberia mostrar, 'Ingresaste codigo vacio'  ", () => {    
    expect(recibirCodigoB("")).toEqual("Ingresaste codigo vacio");
  });
// Alfred Garcia
});

describe("'AMBOS JUGADORES'", () => {
// Alfred Garcia
  it("si jugador ingresa el numero 5786 este debe devolver el numero en vector [5,7,8,6]", () => {    
    expect(separarCodigo(5786)).toEqual([5,7,8,6]);
  });
  it("si jugador ingresa numero 457896 este debe devolver el numero en vector [4,5,7,8,9,6]", () => {    
    expect(separarCodigo(457896)).toEqual([4,5,7,8,9,6]);
  });
});
