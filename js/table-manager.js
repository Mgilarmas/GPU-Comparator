let table = [
    
];

function initialize(){
    const TABLE_GPU = document.getElementById("gpu-form")
    TABLE_GPU.addEventListener("submit", addGpu);
}

function showGpu() {
    let bodyTable = document.getElementById("gpu-table");
    let tableFull = "";

    for (let i = 0; i < table.length; i++) {
        tableFull += "<tr><td>" + table[i].brand + "</td><td>" + table[i].series + "</td><td>" + table[i].model + "</td><td>" + table[i].vram + "</td></tr>";
    }

    bodyTable.innerHTML = tableFull;
}

function addGpu(event){
    event.preventDefault();

    let brandIntroducedByUser = document.getElementById("brand").value;
    let seriesIntroducedByUser = document.getElementById("series").value;
    let modelIntroducedByUser = document.getElementById("model").value;
    let vramIntroducedByUser = document.getElementById("vram").value;

    if (brandIntroducedByUser == "" || seriesIntroducedByUser == "" || modelIntroducedByUser == "" || vramIntroducedByUser == ""){
        
    } else{
        let newGpu = {brand: brandIntroducedByUser, series: seriesIntroducedByUser, model: modelIntroducedByUser, vram: vramIntroducedByUser};
        table.push(newGpu)
    }  
    showGpu();
}

function deleteGpu(tableId) {
    table.splice(tableId, 1);

    showGpu();
}

initialize();