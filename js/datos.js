// ===== Módulo de datos y utilidades =====
// Aquí vive la lista de contactos y su guardado en localStorage.

let contactos = [];

function cargarContactos() {
  try {
    const guardados = localStorage.getItem("agenda_contactos");
    contactos = guardados ? JSON.parse(guardados) : [];
  } catch (error) {
    contactos = [];
  }
}

function guardarContactos() {
  try {
    localStorage.setItem("agenda_contactos", JSON.stringify(contactos));
  } catch (error) {
    console.error("No se pudo guardar en localStorage:", error);
  }
}

function generarId() {
  return Date.now().toString(36) + Math.random().toString(36).slice(2, 6);
}

// Muestra un mensaje de validación/confirmación (verde = ok, rojo = error)
let temporizadorMensaje = null;
function mostrarMensaje(id, texto, esValido) {
  const elemento = document.getElementById(id);
  elemento.innerText = texto;
  elemento.className = esValido ? "mensaje ok" : "mensaje error";

  clearTimeout(temporizadorMensaje);
  temporizadorMensaje = setTimeout(() => {
    elemento.innerText = "";
    elemento.className = "mensaje";
  }, 3500);
}
