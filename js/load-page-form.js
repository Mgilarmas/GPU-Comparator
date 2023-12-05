function initialize(){
   const HOME_LINK = document.getElementById("home-link");
    HOME_LINK.addEventListener("click", waitToLoadHome);

    const HOME_LINK_SIDE_MENU = document.getElementById("home-link-side-menu");
    HOME_LINK_SIDE_MENU.addEventListener("click", waitToLoadHome);
}

function waitToLoadHome() {
  setTimeout(() => {
    window.location = 'https://gpufire.web.app/index.html'
  }, 1000);
}

initialize();