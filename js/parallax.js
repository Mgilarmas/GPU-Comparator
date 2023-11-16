function initialize() {
  window.addEventListener("scroll", moveImagesWhenUserScrolls);
}

function moveImagesWhenUserScrolls() {
  const SCROLL_POSITION = window.scrollY;

  const CIRCUIT = document.getElementById("electronic-background");
  CIRCUIT.style.left = SCROLL_POSITION + "px";

  const CIRCUIT_B = document.getElementById("electronic-background-2");
  CIRCUIT_B.style.left = -SCROLL_POSITION + "px";
}

initialize();