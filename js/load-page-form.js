function initialize() {
  const HOME_LINK = document.getElementById("home-link");
  HOME_LINK.addEventListener("click", waitToLoadHome);

  const HOME_LINK_SIDE_MENU = document.getElementById("home-link-side-menu");
  HOME_LINK_SIDE_MENU.addEventListener("click", waitToLoadHome);

  const STORAGE_LINK = document.getElementById("storage-link");
  STORAGE_LINK.addEventListener("click", waitToLoadStorage);

  const STORAGE_LINK_SIDE_MENU = document.getElementById("storage-link-side-menu");
  STORAGE_LINK_SIDE_MENU.addEventListener("click", waitToLoadStorage);
}

function waitToLoadHome() {
  setTimeout(() => {
    window.location = 'https://gpufire.web.app/index.html'
  }, 1000);
}

function waitToLoadStorage() {
  setTimeout(() => {
    window.location = 'https://gpufire.web.app/local-storage.html'
  }, 1000);
}

initialize();