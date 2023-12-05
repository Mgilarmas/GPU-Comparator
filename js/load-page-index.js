function initialize(){
  const FORM_LINK = document.getElementById("form-link");
  FORM_LINK.addEventListener("click", waitToLoadForm);

  const FORM_LINK_SIDE_MENU = document.getElementById("form-link-side-menu");
  FORM_LINK_SIDE_MENU.addEventListener("click", waitToLoadForm);
}

function waitToLoadForm() {
  setTimeout(() => {
    window.location = 'https://gpufire.web.app/graphic-cards-form.html'
  }, 1000);
}

initialize();