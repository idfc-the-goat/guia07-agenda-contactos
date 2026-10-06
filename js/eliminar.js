// ===== feature-eliminar-contacto =====
function eliminarContacto(id) {
  const contacto = contactos.find((c) => c.id === id);
  if (!contacto) return;

  // Confirmación antes de borrar
  if (!confirm('¿Seguro que deseas eliminar a "' + contacto.nombre + '"?')) {
    return;
  }

  contactos = contactos.filter((c) => c.id !== id);
  guardarContactos();
  renderizarContactos();

  // Si el contacto eliminado estaba en el panel de detalle, se limpia
  const detalle = document.getElementById("detalle");
  if (detalle.dataset.id === id) {
    delete detalle.dataset.id;
    detalle.innerHTML =
      '<p class="vacio">Selecciona un contacto y presiona "Ver".</p>';
  }

  mostrarMensaje("mensajeForm", "Contacto eliminado correctamente.", true);
}
