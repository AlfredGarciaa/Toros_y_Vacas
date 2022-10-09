import Vaca_Toro from "./Vaca_Toro.js"

describe("CODIGO SECRETO", () => {
    it("Cuando jugador A ingrese un codigo secreto vacio deberia devolver codigo vacio ", () => {
      let juego = new Vaca_Toro();
      expect(juego.Validar_Codigo("")).toEqual("Codigo Vacio");
    });
});