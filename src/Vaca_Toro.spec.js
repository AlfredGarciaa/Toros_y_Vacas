import codigoSecreto from "./JugadorA.js"
import recibirCodigoB from "./JugadorB.js"
import separarCodigo from "./Separador.js"
import buscarVacayToro from "./Vaca_Toro.js"

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
  it("Si jugador A ingresa numero 3412 y el B ingresa 7604 deberia retornar * ", () => {
    const codVec1 = separarCodigo(3412);
    const codVec2 = separarCodigo(7604);
    expect(buscarVacayToro(codVec1,codVec2)).toEqual("*");
  });
  it("Si jugador A ingresa numero 9231 y el B ingresa 1708 deberia retornar ** ", () => {
    const codVec1 = separarCodigo(8231);
    const codVec2 = separarCodigo(1708);
    expect(buscarVacayToro(codVec1,codVec2)).toEqual("**");
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
  it("Si jugador ingresa el numero 5786 este debe devolver el numero en vector [5,7,8,6]", () => {    
    expect(separarCodigo(5786)).toEqual([5,7,8,6]);
  });
  it("Si jugador ingresa numero 457896 este debe devolver el numero en vector [4,5,7,8,9,6]", () => {    
    expect(separarCodigo(457896)).toEqual([4,5,7,8,9,6]);
  });
// Marcelo Salinas
it("Si jugador A ingresa numero 3412 y el B ingresa 7406 deberia retornar *! ", () => {
  const codVec1 = separarCodigo(3412);
  const codVec2 = separarCodigo(7406);
  expect(buscarVacayToro(codVec1,codVec2)).toEqual("*!");
});
it("Si jugador A ingresa numero 9231 y el B ingresa 7081 deberia retornar *! ", () => {
  const codVec1 = separarCodigo(8231);
  const codVec2 = separarCodigo(7081);
  expect(buscarVacayToro(codVec1,codVec2)).toEqual("*!");
});
});
