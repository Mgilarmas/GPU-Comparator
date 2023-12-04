function initialize() {
  const FOOTER_DISCOVER_ICON_UP = document.getElementById("up-1");
  FOOTER_DISCOVER_ICON_UP.addEventListener("click", openListDiscover);

  const FOOTER_DISCOVER_ICON_DOWN = document.getElementById("down-1");
  FOOTER_DISCOVER_ICON_DOWN.addEventListener("click", hideListDiscover);

  const FOOTER_LICENSE_ICON_UP = document.getElementById("up-2");
  FOOTER_LICENSE_ICON_UP.addEventListener("click", openListLicense);

  const FOOTER_LICENSE_ICON_DOWN = document.getElementById("down-2");
  FOOTER_LICENSE_ICON_DOWN.addEventListener("click", hideListLicense);
}

function openListDiscover() {
  const DISCOVER_DIV = document.getElementById("discover");
  DISCOVER_DIV.style.height = "10vh";

  const FOOTER_ICON_UP_1 = document.getElementById("up-1");
  FOOTER_ICON_UP_1.style.visibility = "hidden"

  const FOOTER_ICON_DOWN_1 = document.getElementById("down-1");
  FOOTER_ICON_DOWN_1.style.visibility = "visible"
}

function hideListDiscover() {
  const DISCOVER_DIV = document.getElementById("discover");
  DISCOVER_DIV.style.height = "0vh";

  const FOOTER_ICON_UP_1 = document.getElementById("up-1");
  FOOTER_ICON_UP_1.style.visibility = "visible"

  const FOOTER_ICON_DOWN_1 = document.getElementById("down-1");
  FOOTER_ICON_DOWN_1.style.visibility = "hidden"
}

function openListLicense() {
  const LICENSE_DIV = document.getElementById("license");
  LICENSE_DIV.style.height = "10vh";

  const FOOTER_ICON_UP_2 = document.getElementById("up-2");
  FOOTER_ICON_UP_2.style.visibility = "hidden"

  const FOOTER_ICON_DOWN_2 = document.getElementById("down-2");
  FOOTER_ICON_DOWN_2.style.visibility = "visible"
}

function hideListLicense() {
  const LICENSE_DIV = document.getElementById("license");
  LICENSE_DIV.style.height = "0vh";

  const FOOTER_ICON_UP_2 = document.getElementById("up-2");
  FOOTER_ICON_UP_2.style.visibility = "visible"

  const FOOTER_ICON_DOWN_2 = document.getElementById("down-2");
  FOOTER_ICON_DOWN_2.style.visibility = "hidden"
}

initialize(); 