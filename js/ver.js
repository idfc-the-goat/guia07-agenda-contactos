// ===== feature-ver-contacto =====
function crearFilaDetalle(etiqueta, valor) {
  const fila = document.createElement("div");
  fila.className = "detalle-fila";
  const titulo = document.createElement("span");
  titulo.textContent = etiqueta;
  const contenido = document.createElement("strong");
  contenido.textContent = valor;
  fila.appendChild(titulo);
  fila.appendChild(contenido);
  return fila;
}

function verContacto(id) {
  const detalle = document.getElementById("detalle");
  const contacto = contactos.find((c) => c.id === id);

  detalle.innerHTML = "";

  if (!contacto) {
    detalle.innerHTML = '<p class="vacio">Contacto no encontrado.</p>';
    return;
  }

  detalle.dataset.id = contacto.id;
  detalle.appendChild(crearFilaDetalle("Nombre", contacto.nombre));
  detalle.appendChild(crearFilaDetalle("Teléfono", contacto.telefono));
  detalle.appendChild(crearFilaDetalle("Correo electrónico", contacto.correo));
}
