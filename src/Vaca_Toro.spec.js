import Vaca_Toro from "./Vaca_Toro.js"

describe("CODIGO SECRETO - 'JUGADOR A'", () => {
// Alfred Garcia
  it("Cuando jugador A ingrese un codigo secreto vacio, deberia devolver codigo vacio ", () => {
    let juego = new Vaca_Toro();
    expect(juego.Validar_Codigo("")).toEqual("Codigo Vacio");
  });
  it("Cuando jugador A ingrese un codigo secreto de 4 digitos, deberia devolver dicho codigo ", () => {
    let juego = new Vaca_Toro
    expect(juego.Validar_Codigo(1206)).toEqual(1206);
  });
  it("Cuando jugador A ingrese un codigo secreto de 5 digitos, deberia devolver dicho codigo ", () => {
    let juego = new Vaca_Toro
    expect(juego.Validar_Codigo(45782)).toEqual(45782);
  });
  it("Cuando jugador A ingrese un codigo secreto de 6 digitos, deberia devolver dicho codigo ", () => {
    let juego = new Vaca_Toro
    expect(juego.Validar_Codigo(123456)).toEqual(123456);
  });
  it("Si jugador A ingresa numero 12334  y el B ingresa 36589 deberia retornar * ", () => {    
    let juego = new Vaca_Toro();
    expect(juego.Comparar_Codigo(12334,36589)).toEqual("*");
  });
  it("Si jugador A ingresa numero 1111  y el B ingresa 1234 deberia retornar ! ", () => {    
    let juego = new Vaca_Toro();
    expect(juego.Comparar_Codigo(1111,1234)).toEqual("!");
  });
  it("Si jugador A ingresa numero 9231 y el B ingresa 1708 deberia retornar ** ", () => {    
    let juego = new Vaca_Toro();
    expect(juego.Comparar_Codigo(8231,1708)).toEqual("**");
  });
  it("Si jugador A ingresa numero 4723  y el B ingresa vacio deberia retornar ingresas codigo vacio ", () => {    
    let juego = new Vaca_Toro();
    expect(juego.Comparar_Codigo(4721,"")).toEqual("Codigo Vacio");
  }); 
  it("Si jugador A ingresa numero 32421  y el B ingresa 32421 deberia retornar ", () => {
    let juego = new Vaca_Toro();    
    expect(juego.Comparar_Codigo(32421,32421)).toEqual("Felicidades Adivinaste El codigo");
  });
  it("si jugador A ingresa numero 32421  y el B ingresa 987789 deberia retornar 'Codigo imcompatible'", () => {
    let juego = new Vaca_Toro();    
    expect(juego.Comparar_Codigo(32421,987789)).toEqual("Codigo imcompatible");
  });
  it("Si jugador A ingresa numero a2b1c  y el B ingresa a2b1c deberia retornar 'Felicidades Adivinaste El codigo'", () => {
    let juego = new Vaca_Toro();    
    expect(juego.Comparar_Codigo('12b1c','a2t1c')).toEqual("!!!");
  });
// Marcelo Salinas
  it("Si jugador A ingresa numero 1234 y el B ingresa 1530 deberia retornar !! ", () => {    
    let juego = new Vaca_Toro();
    expect(juego.Comparar_Codigo(1234,1530)).toEqual("!!");
  });
});
  
describe("'JUGADOR B'", () => {
// Marcelo Salinas
  it("Cuando jugador B ingrese un codigo secreto vacio para adivinar el codigo, deberia mostrar, 'Ingresaste codigo vacio'  ", () => {  
    let juego = new Vaca_Toro  
    expect(juego.Validar_Codigo("")).toEqual("Codigo Vacio");
  });
// Alfred Garcia
});

describe("'AMBOS JUGADORES'", () => {
// Alfred Garcia
  it("Si jugador ingresa el numero 5786 este debe devolver el numero en vector [5,7,8,6]", () => {    
    let juego = new Vaca_Toro
    expect(juego.Separar_Codigo(5786)).toEqual(["5", "7", "8", "6"]);
  });
  it("Si jugador ingresa numero 457896 este debe devolver el numero en vector [4,5,7,8,9,6]", () => {    
    let juego = new Vaca_Toro
    expect(juego.Separar_Codigo(457896)).toEqual(["4", "5", "7", "8", "9", "6"]);
  });
// Marcelo Salinas
});

describe("'FUNCION TERNERA'", () => {
  it("Si jugador A ingresa numero 9165  y el B ingresa 9053 deberia retornar '!##*'", () => {
    let juego = new Vaca_Toro();    
    expect(juego.Comparar_Codigo(9165,9053)).toEqual("!##*");
  });
  it("Si jugador A ingresa numero 3412 y el B ingresa 7604 deberia retornar #*", () => {    
    let juego = new Vaca_Toro();
    expect(juego.Comparar_Codigo(3412,7604)).toEqual("#*");
  });
  it("Si jugador A ingresa numero 8125 y el B ingresa 4065 deberia retornar !#", () => {  
    let juego = new Vaca_Toro();  
    expect(juego.Comparar_Codigo(8125,4065)).toEqual("!#");
  });
  it("(5 DIGITOS) Si jugador A ingresa numero 123 y el B ingresa 234 deberia retornar #****", () => {  
    let juego = new Vaca_Toro();  
    expect(juego.Comparar_Codigo(82945,93454)).toEqual("#****");
  });
});

describe("'FUNCION BISONTE'", () => {
  it("Si jugador A ingresa numero 67  buscando primos deberia retornar '%'", () => {    
    let juego = new Vaca_Toro(); 
    expect(juego.Busca_Primos(67)).toEqual("%");
  });
  it("(5 DIGITOS) Si jugador A ingresa numero 70687  buscando primos deberia retornar '%%%'", () => {    
    let juego = new Vaca_Toro(); 
    expect(juego.Busca_Primos(70687)).toEqual("%%%");
  });
});
