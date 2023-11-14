window.onload = initialize;

function initialize(){
  var formGpu = document.getElementById("gpu-form")
  formGpu.addEventListener("submit", validateFormGpu)
}

function validateFormGpu(event){
  var formGpu = event.target;

  var brand = formGpu["brand"].value;
  var series = formGpu["series"].value;
  var model = formGpu["model"].value;
  var vram = formGpu["vram"].value;

  if(!brand || brand == ""){
    event.preventDefault();
    document.getElementById("error-brand-required").style.display = "block";
    console.log("* error: Please enter a brand");
  } else{
    document.getElementById("error-brand-required").style.display = "none";
  }

  if(!series || series == ""){
    event.preventDefault();
    document.getElementById("error-series-required").style.display = "block";
    console.log("* error: Please enter a series");
  } else{
    document.getElementById("error-series-required").style.display = "none";
  }

  if(!model || model == ""){
    event.preventDefault();
    document.getElementById("error-model-required").style.display = "block";
    console.log("* error: Please enter a model");
  } else{
    document.getElementById("error-model-required").style.display = "none";
  }

  if(!vram || vram == ""){
    event.preventDefault();
    document.getElementById("error-vram-required").style.display = "block";
    console.log("* error: Please enter a vram");
  } else{
    document.getElementById("error-vram-required").style.display = "none";
  }
}