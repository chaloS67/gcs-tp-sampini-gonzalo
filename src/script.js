// Validar campo Teléfono
function validarTelefono(tel) {
  return /^[0-9]+$/.test(tel); // Solo números del 0 al 9
}

if (typeof module !== "undefined" && module.exports) {
  module.exports = { validarTelefono };
}
