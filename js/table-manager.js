// let table = [

// ];

// function initialize() {
//   const TABLE_GPU = document.getElementById("gpu-form")
//   TABLE_GPU.addEventListener("submit", addGpu);
// }

// function showGpu() {
//   let bodyTable = document.getElementById("gpu-table");
//   let tableFull = "";

//   for (let i = 0; i < table.length; i++) {
//     tableFull += `<tr><td> ${table[i].brand} </td><td> ${table[i].series} </td><td> ${table[i].model} </td><td> ${table[i].vram} <button class="fs-6 m-0.7 btn btn-danger rounded-pill border border-dark" onclick="deleteGpu(${i})">Delete</button><button class="fs-6 m-0.7 btn btn-success rounded-pill border border-dark" onclick="updateGpu(${i})">Update</button></td></tr>`;
//   }

//   bodyTable.innerHTML = tableFull;
// }

// function addGpu(event) {
//   event.preventDefault();

//   let brandIntroducedByUser = document.getElementById("brand").value;
//   let seriesIntroducedByUser = document.getElementById("series").value;
//   let modelIntroducedByUser = document.getElementById("model").value;
//   let vramIntroducedByUser = document.getElementById("vram").value;

//   if (brandIntroducedByUser == "" || seriesIntroducedByUser == "" || modelIntroducedByUser == "" || vramIntroducedByUser == "") {

//   } else {
//     let newGpu = { brand: brandIntroducedByUser, series: seriesIntroducedByUser, model: modelIntroducedByUser, vram: vramIntroducedByUser };
//     table.push(newGpu)
//   }

//   showGpu();
// }

// function deleteGpu(tableId) {
//   table.splice(tableId, 1);

//   showGpu();
// }

// function updateGpu(tableId) {
//   for (var i = 0; i < table.length; ++i) {
//     if (tableId == i){
//       if (document.getElementById("brand").value != ""){
//         table[i].brand = document.getElementById("brand").value;
//       }
//       if (document.getElementById("series").value != ""){
//         table[i].series = document.getElementById("series").value;
//       }
//       if (document.getElementById("model").value != ""){
//         table[i].model = document.getElementById("model").value;
//       }
//       if (document.getElementById("vram").value != ""){
//         table[i].vram = document.getElementById("vram").value;
//       }
//     }
//   }

//   showGpu();
// }

// initialize();

function validateForm(){
  let brand = document.getElementById('brand').value;
  let series = document.getElementById('series').value;
  let model = document.getElementById('model').value;
  let vram = document.getElementById('vram').value;

  if (brand == "") {
    document.getElementById("error-brand-required").style.display = "block";
    console.log("* error: Please enter a brand");
    return false;
  }
  else {
    document.getElementById("error-brand-required").style.display = "none";
  }

  if (series == "") {
    document.getElementById("error-series-required").style.display = "block";
    console.log("* error: Please enter a series");
    return false;
  } else {
    document.getElementById("error-series-required").style.display = "none";
  }

  if (model == "") {
    document.getElementById("error-model-required").style.display = "block";
    console.log("* error: Please enter a model");
    return false;
  } else {
    document.getElementById("error-model-required").style.display = "none";
  }

  if (vram == "") {
    document.getElementById("error-vram-required").style.display = "block";
    console.log("* error: Please enter a vram");
    return false;
  } else {
    document.getElementById("error-vram-required").style.display = "none";
  }

  return true;
}

function readData() {
  let listGpu;

  if (localStorage.getItem('listGpu') == null){
    listGpu = [];
  }else {
    listGpu = JSON.parse(localStorage.getItem('listGpu'));
  }

  let html = "";

  listGpu.forEach(function(element, index) {
    html += "<tr>";
    html += "<td>"+ element.brand +"</td>";
    html += "<td>"+ element.series +"</td>";
    html += "<td>"+ element.model +"</td>";
    html += "<td>"+ element.vram +"</td>";
    html += '<td><button class="fs-6 m-0.7 btn btn-danger rounded-pill border border-dark" onclick="deleteGpu('+ index +')">Delete</button><button class="fs-6 m-0.7 btn btn-success rounded-pill border border-dark" onclick="editGpu('+ index +')">Edit</button></td>'
    html += "<tr/>";
  })

  document.querySelector('#tableData').innerHTML = html;
}

document.onload = readData();

function addGpu() {
  if (validateForm() == true){
    let brand = document.getElementById('brand').value;
    let series = document.getElementById('series').value;
    let model = document.getElementById('model').value;
    let vram = document.getElementById('vram').value;

    let listGpu;

    if (localStorage.getItem('listGpu') == null) {
      listGpu = [];
    }else {
      listGpu = JSON.parse(localStorage.getItem('listGpu'));
    }

    listGpu.push({
      brand: brand,
      series: series,
      model: model,
      vram: vram
    })

    localStorage.setItem('listGpu', JSON.stringify(listGpu));

    readData();

    document.getElementById('brand').value= "";
    document.getElementById('series').value= "";
    document.getElementById('model').value= "";
    document.getElementById('vram').value= "";
  }
}

function deleteGpu(index) {
  let listGpu;

  if (localStorage.getItem('listGpu') == null){
    listGpu = [];
  }else {
    listGpu = JSON.parse(localStorage.getItem('listGpu'));
  }

  listGpu.splice(index, 1);
  localStorage.setItem('listGpu', JSON.stringify(listGpu));

  readData();
}

function editGpu(index) {
  document.getElementById('submit-button').style.display = 'none'
  document.getElementById('update-button').style.display = 'block'

  let listGpu;

  if (localStorage.getItem('listGpu') == null){
    listGpu = [];
  }else {
    listGpu = JSON.parse(localStorage.getItem('listGpu'));
  }

  document.getElementById('brand').value = listGpu[index].brand;
  document.getElementById('series').value = listGpu[index].series;
  document.getElementById('model').value = listGpu[index].model;
  document.getElementById('vram').value = listGpu[index].vram;

  document.querySelector('#update-button').onclick = function () {
    if (validateForm() == true) {
      listGpu[index].brand = document.getElementById('brand').value;
      listGpu[index].series = document.getElementById('series').value;
      listGpu[index].model = document.getElementById('model').value;
      listGpu[index].vram = document.getElementById('vram').value;

      localStorage.setItem('listGpu', JSON.stringify(listGpu));
      readData();

      document.getElementById('brand').value = "";
      document.getElementById('series').value = "";
      document.getElementById('model').value = "";
      document.getElementById('vram').value = "";

      document.getElementById('submit-button').style.display = 'block';
      document.getElementById('update-button').style.display = 'none';
    }
  }
}