Verificar que el campo **Teléfono** solo acepte números y rechace cualquier otro carácter.

---

## Casos de Prueba

| ID | Descripción | Datos de entrada | Resultado esperado | Estado |
|----|--------------|------------------|--------------------|---------|
| CP-001 | Ingresar un teléfono válido | `123456789` | ok
| CP-002 | Ingresar letras en el teléfono | `abc123` | Error
| CP-003 | Dejar el teléfono vacío | *(vacío)* | Error
| CP-004 | Ingresar caracteres especiales | `123-456` | Error

---

## Resultado
Todas las pruebas fueron exitosas.  
El sistema valida correctamente que el campo **Teléfono** contenga solo números.