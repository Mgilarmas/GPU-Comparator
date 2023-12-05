function initialize() {
  const FORM_LINK = document.getElementById("form-link");
  FORM_LINK.addEventListener("click", waitToLoadForm);

  const FORM_LINK_SIDE_MENU = document.getElementById("form-link-side-menu");
  FORM_LINK_SIDE_MENU.addEventListener("click", waitToLoadForm);

  const STORAGE_LINK = document.getElementById("storage-link");
  STORAGE_LINK.addEventListener("click", waitToLoadStorage);

  const STORAGE_LINK_SIDE_MENU = document.getElementById("storage-link-side-menu");
  STORAGE_LINK_SIDE_MENU.addEventListener("click", waitToLoadStorage);
}

function waitToLoadForm() {
  setTimeout(() => {
    window.location = 'https://gpufire.web.app/graphic-cards-form.html'
  }, 1000);
}

function waitToLoadStorage() {
  setTimeout(() => {
    window.location = 'https://gpufire.web.app/local-storage.html'
  }, 1000);
}

initialize();