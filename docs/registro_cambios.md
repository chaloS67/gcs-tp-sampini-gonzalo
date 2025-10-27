| ID | Tipo | Ruta / Identificador | Descripción |
|----|------|----------------------|-------------|
| ECS-001 | Código | `src/index.html` | Estructura HTML principal con formulario de cliente. |
| ECS-002 | Código | `src/script.js` | Script base con manejo del envío del formulario. |
| ECS-003 | Prueba | `tests/test_validacion.js` | Archivo inicial de pruebas (placeholder). |
| ECS-004 | Doc | `docs/README.md` | Descripción general del proyecto. |
| ECS-005 | Doc | `docs/manual_usuario.md` | Manual del usuario, explica cómo usar el formulario. |
| ECS-006 | Doc | `docs/manual_tecnico.md` | Detalles técnicos y estructura del sistema. |
| ECS-007 | Doc | `docs/plan_pruebas.md` | Plan de pruebas y casos a ejecutar. |
| ECS-008 | Doc | `docs/registro_cambios.md` | Registro de versiones y ECS. |
| ECS-009 | Config | `.gitignore` | Archivo de configuración que excluye elementos no versionables. |



###  Evento de creación

- **EV-0001** — Creación de repositorio y versión inicial.  
  - *Commit:* `feat: versión inicial - línea base v1.0`  
  - *Tag:* `v1.0`
  - *Responsable:* Gonzalo Sampini  
  - *Estado:* Aprobado como línea base inicial

--------------------------------------------------------------------------------------------------------
 ## Version v1.1
 **fecha** 27/10/2025
 **Descripcion**  Se implementa validacion para el campo telefono para aceptar solo numeros
 **Ticket relacionado** (#101)

 | ID | Tipo | Ruta / Identificador | Descripción del cambio |
|----|------|----------------------|-------------------------|
| ECS-002 | Código | `src/script.js` | Se agrega función validarTelefono() y control en envío del formulario. |
| ECS-003 | Prueba | `test/test_validacion.test.js` | Se agrega test para validar solo números en teléfono. |
| ECS-008 | Doc | `docs/registro_cambios.md` | Se actualiza con la versión v1.1. |
