// ===== feature-agregar-contacto =====
function agregarContacto(evento) {
  evento.preventDefault();

  const nombre = document.getElementById("nombre").value.trim();
  const telefono = document.getElementById("telefono").value.replace(/\s/g, "");
  const correo = document.getElementById("correo").value.trim();

  // --- Validaciones ---
  if (nombre.length < 3) {
    mostrarMensaje(
      "mensajeForm",
      "El nombre debe tener al menos 3 caracteres.",
      false,
    );
    return;
  }
  if (!/^\+?[0-9]{7,15}$/.test(telefono)) {
    mostrarMensaje(
      "mensajeForm",
      "Ingresa un teléfono válido (7 a 15 dígitos).",
      false,
    );
    return;
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(correo)) {
    mostrarMensaje(
      "mensajeForm",
      "Ingresa un correo electrónico válido.",
      false,
    );
    return;
  }
  if (contactos.some((c) => c.telefono === telefono)) {
    mostrarMensaje(
      "mensajeForm",
      "Ya existe un contacto con ese teléfono.",
      false,
    );
    return;
  }

  // --- Registro ---
  contactos.push({ id: generarId(), nombre, telefono, correo });
  guardarContactos();

  document.getElementById("formContacto").reset();
  mostrarMensaje(
    "mensajeForm",
    'Contacto "' + nombre + '" registrado correctamente.',
    true,
  );
  renderizarContactos();
}
