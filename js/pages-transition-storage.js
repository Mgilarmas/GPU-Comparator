function initialize() {
  const LINK_HOME = document.getElementById("home-link");
  LINK_HOME.addEventListener("click", showEffect);

  const LINK_HOME_SIDE_MENU = document.getElementById("home-link-side-menu");
  LINK_HOME_SIDE_MENU.addEventListener("click", showEffect);

  const LINK_FORM = document.getElementById("form-link");
  LINK_FORM.addEventListener("click", showEffect);

  const LINK_FORM_SIDE_MENU = document.getElementById("form-link-side-menu");
  LINK_FORM_SIDE_MENU.addEventListener("click", showEffect);
}

function showEffect() {
  const CIRCLE_EFFECT = document.getElementById("html-transition-storage");
  CIRCLE_EFFECT.style.visibility = "visible";
  CIRCLE_EFFECT.style.width += "100vw";
  CIRCLE_EFFECT.style.height += "1000vh";
  CIRCLE_EFFECT.style.borderRadius = "0%";
}

initialize();