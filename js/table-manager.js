let table = [

];

function initialize() {
  const TABLE_GPU = document.getElementById("gpu-form")
  TABLE_GPU.addEventListener("submit", addGpu);
}

function showGpu() {
  let bodyTable = document.getElementById("gpu-table");
  let tableFull = "";

  for (let i = 0; i < table.length; i++) {
    tableFull += `<tr><td> ${table[i].brand} </td><td> ${table[i].series} </td><td> ${table[i].model} </td><td> ${table[i].vram} <button class="fs-6 m-0.7 btn btn-danger rounded-pill border border-dark" onclick="deleteGpu(${i})">Delete</button><button class="fs-6 m-0.7 btn btn-success rounded-pill border border-dark" onclick="updateGpu(${i})">Update</button></td></tr>`;
  }

  bodyTable.innerHTML = tableFull;
}

function addGpu(event) {
  event.preventDefault();

  let brandIntroducedByUser = document.getElementById("brand").value;
  let seriesIntroducedByUser = document.getElementById("series").value;
  let modelIntroducedByUser = document.getElementById("model").value;
  let vramIntroducedByUser = document.getElementById("vram").value;

  if (brandIntroducedByUser == "" || seriesIntroducedByUser == "" || modelIntroducedByUser == "" || vramIntroducedByUser == "") {

  } else {
    let newGpu = { brand: brandIntroducedByUser, series: seriesIntroducedByUser, model: modelIntroducedByUser, vram: vramIntroducedByUser };
    table.push(newGpu)
  }

  showGpu();
}

function deleteGpu(tableId) {
  table.splice(tableId, 1);

  showGpu();
}

function updateGpu(tableId) {
  for (var i = 0; i < table.length; ++i) {
    if (tableId == i){
      if (document.getElementById("brand").value != ""){
        table[i].brand = document.getElementById("brand").value;
      }
      if (document.getElementById("series").value != ""){
        table[i].series = document.getElementById("series").value;
      }
      if (document.getElementById("model").value != ""){
        table[i].model = document.getElementById("model").value;
      }
      if (document.getElementById("vram").value != ""){
        table[i].vram = document.getElementById("vram").value;
      }
    }
  }

  showGpu();
}

initialize();