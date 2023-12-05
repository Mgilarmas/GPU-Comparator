function initialize(){
  const FORM_LINK = document.getElementById("form-link");
  FORM_LINK.addEventListener("click", waitToLoadForm);

  const FORM_LINK_SIDE_MENU = document.getElementById("form-link-side-menu");
  FORM_LINK_SIDE_MENU.addEventListener("click", waitToLoadForm);

  const STORAGE_LINK = document.getElementById("home-link");
  STORAGE_LINK.addEventListener("click", waitToLoadHome);

  const STORAGE_LINK_SIDE_MENU = document.getElementById("home-link-side-menu");
  STORAGE_LINK_SIDE_MENU.addEventListener("click", waitToLoadHome);
}

function waitToLoadForm() {
  setTimeout(() => {
    window.location = 'https://gpufire.web.app/graphic-cards-form.html'
  }, 1000);
}

function waitToLoadHome() {
  setTimeout(() => {
    window.location = 'https://gpufire.web.app/index.html'
  }, 1000);
}

initialize();