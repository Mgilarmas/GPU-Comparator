function initialize() {
    const LINK_FORM = document.getElementById("form-link");
    LINK_FORM.addEventListener("click", showEffect);

    const LINK_FORM_SIDE_MENU = document.getElementById("form-link-side-menu");
    LINK_FORM_SIDE_MENU.addEventListener("click", showEffect);
}

function showEffect() {
    const CIRCLE_EFFECT = document.getElementById("html-transition");
    CIRCLE_EFFECT.style.visibility = "visible";
    CIRCLE_EFFECT.style.width += "100vw";
    CIRCLE_EFFECT.style.height += "100vh";
    CIRCLE_EFFECT.style.borderRadius = "0%";
}


initialize();