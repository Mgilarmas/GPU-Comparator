function validateForm() {
  let brand = document.getElementById('brand').value;
  let series = document.getElementById('series').value;
  let model = document.getElementById('model').value;
  let vram = document.getElementById('vram').value;

  if (brand == "") {
    return false;
  }

  if (series == "") {
    return false;
  }

  if (model == "") {
    return false;
  }

  if (vram == "") {
    return false;
  }

  return true;
}

function readData() {
  let listGpu;

  if (localStorage.getItem('listGpu') == null) {
    listGpu = [];
  } else {
    listGpu = JSON.parse(localStorage.getItem('listGpu'));
  }

  let html = "";

  listGpu.forEach(function (element, index) {
    html += "<tr>";
    html += "<td>" + element.brand + "</td>";
    html += "<td>" + element.series + "</td>";
    html += "<td>" + element.model + "</td>";
    html += "<td>" + element.vram + "</td>";
    html += '<td><button class="fs-6 m-0.7 btn btn-danger rounded-pill border border-dark" onclick="deleteGpu(' + index + ')">Delete</button><button class="fs-6 m-0.7 btn btn-success rounded-pill border border-dark" onclick="editGpu(' + index + ')">Edit</button></td>'
    html += "<tr/>";
  });

  document.querySelector('#table-data').innerHTML = html;
}

document.onload = readData();

function addGpu() {
  if (validateForm() == true) {
    let brand = document.getElementById('brand').value;
    let series = document.getElementById('series').value;
    let model = document.getElementById('model').value;
    let vram = document.getElementById('vram').value;

    let listGpu;

    if (localStorage.getItem('listGpu') == null) {
      listGpu = [];
    } else {
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

    document.getElementById('brand').value = "";
    document.getElementById('series').value = "";
    document.getElementById('model').value = "";
    document.getElementById('vram').value = "";
  }
}

function deleteGpu(index) {
  let listGpu;

  if (localStorage.getItem('listGpu') == null) {
    listGpu = [];
  } else {
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

  if (localStorage.getItem('listGpu') == null) {
    listGpu = [];
  } else {
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