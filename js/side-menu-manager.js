function initialize() {
  const HEADER_MENU_ICON = document.getElementById("menu-icon");
  HEADER_MENU_ICON.addEventListener("click", openSideMenu);

  const HEADER_SIDE_MENU_ICON = document.getElementById("side-menu-icon");
  HEADER_SIDE_MENU_ICON.addEventListener("click", hideSideMenu);
}

function openSideMenu() {
  const SIDE_MENU = document.getElementById("side-menu");
  SIDE_MENU.style.left = "0vw";
}

function hideSideMenu() {
  const SIDE_MENU = document.getElementById("side-menu");
  SIDE_MENU.style.left = "-90vw";
}

initialize(); 