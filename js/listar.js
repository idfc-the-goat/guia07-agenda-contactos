// ===== feature-listar-contactos =====
function renderizarContactos() {
  const lista = document.getElementById("listaContactos");
  const texto = document.getElementById("buscador").value.trim().toLowerCase();

  // Contador de contactos totales
  document.getElementById("contador").innerText = contactos.length;

  // Filtro por nombre o teléfono
  const filtrados = contactos.filter(
    (c) => c.nombre.toLowerCase().includes(texto) || c.telefono.includes(texto),
  );

  lista.innerHTML = "";

  if (filtrados.length === 0) {
    const vacio = document.createElement("p");
    vacio.className = "vacio";
    vacio.innerText =
      contactos.length === 0
        ? "Aún no hay contactos registrados."
        : "No se encontraron resultados.";
    lista.appendChild(vacio);
    return;
  }

  // Una tarjeta por contacto (se usa textContent para evitar inyección de HTML)
  filtrados.forEach((c) => {
    const tarjeta = document.createElement("article");
    tarjeta.className = "tarjeta-contacto";

    const info = document.createElement("div");
    info.className = "info";
    const nombre = document.createElement("strong");
    nombre.textContent = c.nombre;
    const telefono = document.createElement("span");
    telefono.textContent = c.telefono;
    info.appendChild(nombre);
    info.appendChild(telefono);

    const acciones = document.createElement("div");
    acciones.className = "acciones";
    acciones.innerHTML =
      '<button class="btn btn-secundario" data-accion="ver" data-id="' +
      c.id +
      '">Ver</button>' +
      '<button class="btn btn-peligro" data-accion="eliminar" data-id="' +
      c.id +
      '">Eliminar</button>';

    tarjeta.appendChild(info);
    tarjeta.appendChild(acciones);
    lista.appendChild(tarjeta);
  });
}
