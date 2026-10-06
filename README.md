# Agenda de Contactos

Aplicación web de **Agenda de Contactos** desarrollada con HTML, CSS y JavaScript
(Guía 07 - Ejercicio propuesto 02), usando Git y GitHub con una rama por funcionalidad.

## Funcionalidades

- Registrar un nuevo contacto (nombre, teléfono y correo) con validaciones.
- Mostrar la lista de contactos en tarjetas, con contador y buscador.
- Visualizar la información de cada contacto.
- Eliminar contactos con confirmación.
- Los datos se guardan en el navegador (`localStorage`).

## Ramas de trabajo

| Rama                        | Funcionalidad                          |
| --------------------------- | -------------------------------------- |
| `feature-agregar-contacto`  | Registro y validación de contactos     |
| `feature-listar-contactos`  | Lista en tarjetas, buscador y contador |
| `feature-ver-contacto`      | Detalle del contacto seleccionado      |
| `feature-eliminar-contacto` | Eliminación con confirmación           |

## Estructura

```
index.html
css/styles.css
js/datos.js      -> datos, localStorage y mensajes
js/agregar.js    -> feature-agregar-contacto
js/listar.js     -> feature-listar-contactos
js/ver.js        -> feature-ver-contacto
js/eliminar.js   -> feature-eliminar-contacto
js/main.js       -> eventos (submit, input, click)
```

## Cómo ejecutarlo

1. Descargar o clonar el repositorio.
2. Abrir `index.html` en el navegador.
