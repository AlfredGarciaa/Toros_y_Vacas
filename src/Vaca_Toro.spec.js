import Codigo_Secreto from "./Jugador_A.js"
import Recibir_Codigo_B from "./Jugador_B.js"
import Separar_Codigo from "./Separador.js"
import Buscar_Vaca_Toro from "./Vaca_Toro.js"

describe("CODIGO SECRETO - 'JUGADOR A'", () => {
// Alfred Garcia
  it("Cuando jugador A ingrese un codigo secreto vacio, deberia devolver codigo vacio ", () => {
    expect(Codigo_Secreto("")).toEqual("Codigo Vacio");
  });
  it("Cuando jugador A ingrese un codigo secreto de 4 digitos, deberia devolver dicho codigo ", () => {
    expect(Codigo_Secreto(1206)).toEqual(1206);
  });
  it("Cuando jugador A ingrese un codigo secreto de 5 digitos, deberia devolver dicho codigo ", () => {
    expect(Codigo_Secreto(45782)).toEqual(45782);
  });
  it("Cuando jugador A ingrese un codigo secreto de 6 digitos, deberia devolver dicho codigo ", () => {
    expect(Codigo_Secreto(123456)).toEqual(123456);
  });
  it("Si jugador A ingresa numero 3412 y el B ingresa 7604 deberia retornar * ", () => {
    const codVec1 = Separar_Codigo(3412);
    const codVec2 = Separar_Codigo(7604);
    expect(Buscar_Vaca_Toro(codVec1,codVec2)).toEqual("*");
  });
// Marcelo Salinas
  it("Si jugador A ingresa numero 8125 y el B ingresa 4065 deberia retornar ! ", () => {
    const codVec1 = Separar_Codigo(8125);
    const codVec2 = Separar_Codigo(4065);
    expect(Buscar_Vaca_Toro(codVec1,codVec2)).toEqual("!");
  });
  it("Si jugador A ingresa numero 1234 y el B ingresa 1530 deberia retornar !! ", () => {
    const codVec1 = Separar_Codigo(1234);
    const codVec2 = Separar_Codigo(1530);
    expect(Buscar_Vaca_Toro(codVec1,codVec2)).toEqual("!!");
  });
  it("Si jugador A ingresa numero 9165 y el B ingresa 9053 deberia retornar !* ", () => {
    const codVec1 = Separar_Codigo(9165);
    const codVec2 = Separar_Codigo(9053);
    expect(Buscar_Vaca_Toro(codVec1,codVec2)).toEqual("!*");
  });
});
  
describe("'JUGADOR B'", () => {
// Marcelo Salinas
  it("Cuando jugador B ingrese un codigo secreto vacio para adivinar el codigo, deberia mostrar, 'Ingresaste codigo vacio'  ", () => {    
    expect(Recibir_Codigo_B("")).toEqual("Ingresaste codigo vacio");
  });
// Alfred Garcia
});

describe("'AMBOS JUGADORES'", () => {
// Alfred Garcia
  it("Si jugador ingresa el numero 5786 este debe devolver el numero en vector [5,7,8,6]", () => {    
    expect(Separar_Codigo(5786)).toEqual([5,7,8,6]);
  });
  it("Si jugador ingresa numero 457896 este debe devolver el numero en vector [4,5,7,8,9,6]", () => {    
    expect(Separar_Codigo(457896)).toEqual([4,5,7,8,9,6]);
  });
// Marcelo Salinas
});
