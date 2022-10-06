import codigoSecreto from "./JugadorA.js"
import recibirCodigoB from "./JugadorB.js"
import separarCodigo from "./Separador.js"
//import buscarVacayToro from "./Vaca_Toro.js"
import { buscarToro, buscarVaca } from "./Vaca_Toro.js"

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
    expect(buscarVaca(codVec1,codVec2)).toEqual("*");
  });
  it("Si jugador A ingresa numero 8125 y el B ingresa 4065 deberia retornar ! ", () => {
    const codVec1 = separarCodigo(8125);
    const codVec2 = separarCodigo(4065);
    expect(buscarToro(codVec1,codVec2)).toEqual("!");
  });
  it("Si jugador A ingresa numero 1234 y el B ingresa 1530 deberia retornar !! ", () => {
    const codVec1 = separarCodigo(1234);
    const codVec2 = separarCodigo(1530);
    expect(buscarToro(codVec1,codVec2)).toEqual("!!");
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
  /*it("Si jugador A ingresa numero 1234 y el B ingresa 1567 deberia retornar ! ", () => {
    const codVec1 = separarCodigo(1234);
    const codVec2 = separarCodigo(1567);
    expect(buscarVacayToro(codVec1,codVec2)).toEqual("!");
  });
  it("Si jugador A ingresa numero 44789 y el B ingresa 44123 deberia retornar *! ", () => {
    const codVec1 = separarCodigo(44789);
    const codVec2 = separarCodigo(44123);
    expect(buscarVacayToro(codVec1,codVec2)).toEqual("!!");
  });*/
});
