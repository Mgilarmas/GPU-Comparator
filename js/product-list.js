const TABLE = [
  {Brand: "Nvidia", Series: "RTX", Model: "3060", VRam: "12GB" },
  {Brand: "Nvidia", Series: "GTX", Model: "1060", VRam: "6GB" },
  {Brand: "Nvidia", Series: "GTX", Model: "1080", VRam: "8GB" },
  {Brand: "Nvidia", Series: "GTX", Model: "1050", VRam: "4GB" }
];

window.onload = initialize();

function initialize(){
  document.getElementById("submit-button").addEventListener("click", addToTable);
}

function addToTable(){
  event.preventDefault();
  const TABLE_BODY = document.getElementById("gpu-table");
  const FULL_TABLE = "";

  for (let i = 0; i < TABLE.length; i++){

  }

  TABLE_BODY.innerHTML = FULL_TABLE;
}


// "<tr><td>" + TABLE[3].Brand + "</td><td>" + TABLE[3].Series + "</td><td>" + TABLE[3].Model + "</td><td>" + TABLE[3].VRam + "</td></tr>";