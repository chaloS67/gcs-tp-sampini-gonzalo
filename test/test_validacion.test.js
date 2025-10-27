// Pruebas unitarias de validarTelefono()
const { validarTelefono } = require("../src/script.js");

describe("validarTelefono()", () => {
  test("devuelve true para números válidos", () => {
    expect(validarTelefono("123456")).toBe(true);
    expect(validarTelefono("9876543210")).toBe(true);
    expect(validarTelefono("0000")).toBe(true);
  });
});