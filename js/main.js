document.addEventListener("DOMContentLoaded", () => {
  cargarContactos();
  renderizarContactos();

  // Evento submit: registrar contacto
  document
    .getElementById("formContacto")
    .addEventListener("submit", agregarContacto);

  // Evento input: filtrar la lista mientras se escribe
  document
    .getElementById("buscador")
    .addEventListener("input", renderizarContactos);

  // Evento click (delegación): botones Ver / Eliminar de cada tarjeta
  document.getElementById("listaContactos").addEventListener("click", (e) => {
    const boton = e.target.closest("button[data-accion]");
    if (!boton) return;

    const id = boton.dataset.id;
    if (boton.dataset.accion === "ver") verContacto(id);
    if (boton.dataset.accion === "eliminar") eliminarContacto(id);
  });
});
