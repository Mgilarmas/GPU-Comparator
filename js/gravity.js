function initialize() {
  const COST_IMAGES = document.getElementById("method-1");
  COST_IMAGES.addEventListener("click", activateGravity);
}

function activateGravity() {
  const METHOD = Document.getElementById("method-1");
  METHOD.style.bottom += "1vh";
}

initialize();