window.onload = initialize;

function initialize() {
  const FORM_GPU = document.getElementById("gpu-form")
  FORM_GPU.addEventListener("submit", validateFormGpu)
}

function validateFormGpu(event) {
  const FORM_GPU = event.target;

  const BRAND = FORM_GPU["brand"].value;
  const SERIES = FORM_GPU["series"].value;
  const MODEL = FORM_GPU["model"].value;
  const VRAM = FORM_GPU["vram"].value;

  if (!BRAND || BRAND == "") {
    event.preventDefault();
    document.getElementById("error-brand-required").style.display = "block";
    console.log("* error: Please enter a brand");
  } else {
    document.getElementById("error-brand-required").style.display = "none";
  }

  if (!SERIES || SERIES == "") {
    event.preventDefault();
    document.getElementById("error-series-required").style.display = "block";
    console.log("* error: Please enter a series");
  } else {
    document.getElementById("error-series-required").style.display = "none";
  }

  if (!MODEL || MODEL == "") {
    event.preventDefault();
    document.getElementById("error-model-required").style.display = "block";
    console.log("* error: Please enter a model");
  } else {
    document.getElementById("error-model-required").style.display = "none";
  }

  if (!VRAM || VRAM == "") {
    event.preventDefault();
    document.getElementById("error-vram-required").style.display = "block";
    console.log("* error: Please enter a vram");
  } else {
    document.getElementById("error-vram-required").style.display = "none";
  }
}

