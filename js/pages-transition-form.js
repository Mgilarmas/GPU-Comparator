function initialize() {
  const LINK_HOME = document.getElementById("home-link");
  LINK_HOME.addEventListener("click", showEffect);

  const LINK_HOME_SIDE_MENU = document.getElementById("home-link-side-menu");
  LINK_HOME_SIDE_MENU.addEventListener("click", showEffect);

  const STORAGE_FORM = document.getElementById("storage-link");
  STORAGE_FORM.addEventListener("click", showEffect);

  const STORAGE_FORM_SIDE_MENU = document.getElementById("storage-link-side-menu");
  STORAGE_FORM_SIDE_MENU.addEventListener("click", showEffect);
}

function showEffect() {
  const CIRCLE_EFFECT = document.getElementById("html-transition-form");
  CIRCLE_EFFECT.style.visibility = "visible";
  CIRCLE_EFFECT.style.width += "100vw";
  CIRCLE_EFFECT.style.height += "100vh";
  CIRCLE_EFFECT.style.borderRadius = "0%";
}

// function hideEffect() {
//   const CIRCLE_EFFECT_OUT = document.getElementById("html-transition-out");
//   CIRCLE_EFFECT_OUT.style.width = "0vw";
//   CIRCLE_EFFECT_OUT.style.height = "0vh";
//   CIRCLE_EFFECT_OUT.style.borderRadius = "100%";
// }

initialize();