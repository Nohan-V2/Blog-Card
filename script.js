const hover = document.getElementById("hover");
const element = document.getElementById("element");

// Événement pour le survol
hover.addEventListener("mouseenter", () => {
  element.style.boxShadow = "12px 12px 0 0 var(--black)";
});

// Événement pour le sortie du survol
hover.addEventListener("mouseleave", () => {
  element.style.boxShadow = "";
});
