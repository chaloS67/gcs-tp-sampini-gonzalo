# Manual Técnico

## Arquitectura
- App estática (HTML + JS).
- Validación en cliente (JavaScript).

## Archivos clave
- `src/index.html`: estructura de la página/formulario.
- `src/script.js`: lógica de validación y submit.
- `tests/test_validacion.js`: pruebas sobre la función de validación.

## v1.0
- Envío básico sin validación estricta del campo **Teléfono**.

## v1.1
-# Manual Técnico - Versión 1.1

## Cambios Realizados
- Se agregó la función `validarTelefono(tel)` en `src/script.js`.
- La función usa una expresión regular para permitir solo dígitos:

```javascript
function validarTelefono(tel) {
  return 

-- Se agega el test en jest

