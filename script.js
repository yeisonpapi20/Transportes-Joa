// Transportes Joaquim - interacciones de la página
const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");

// Abrir y cerrar el menú en dispositivos móviles.
menuToggle.addEventListener("click", () => {
  const isOpen = navMenu.classList.toggle("open");
  menuToggle.classList.toggle("active", isOpen);
  menuToggle.setAttribute("aria-expanded", String(isOpen));
  menuToggle.setAttribute("aria-label", isOpen ? "Cerrar menú" : "Abrir menú");
});

// Cerrar el menú después de seleccionar una sección.
navMenu.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("open");
    menuToggle.classList.remove("active");
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.setAttribute("aria-label", "Abrir menú");
  });
});

// Año automático en el pie de página.
document.getElementById("year").textContent = new Date().getFullYear();

// Formulario: prepara el mensaje y lo abre en WhatsApp.
// IMPORTANTE: reemplaza el número de ejemplo por el WhatsApp real de la empresa,
// incluyendo el indicativo del país y sin espacios, signos ni guiones.
const WHATSAPP_NUMBER = "573000000000";

document.getElementById("bookingForm").addEventListener("submit", (event) => {
  event.preventDefault();

  const form = event.currentTarget;
  if (!form.reportValidity()) return;

  const data = new FormData(form);
  const message = [
    "Hola, Transportes Joaquim. Quiero solicitar información sobre un servicio de transporte.",
    "",
    `Nombre: ${data.get("name")}`,
    `Teléfono: ${data.get("phone")}`,
    `Origen: ${data.get("origin")}`,
    `Destino: ${data.get("destination")}`,
    `Fecha: ${data.get("date")}`,
    `Número de pasajeros: ${data.get("passengers")}`,
    `Información adicional: ${data.get("message") || "No especificada"}`
  ].join("\n");

  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
  window.open(whatsappUrl, "_blank", "noopener,noreferrer");
});
