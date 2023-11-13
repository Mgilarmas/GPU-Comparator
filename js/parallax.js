function initialize() {
    window.addEventListener("scroll", moveImagesWhenUserScrolls);
  }
  
  function moveImagesWhenUserScrolls(){
  const SCROLL_POSITION = window.scrollY;
  
    const RTX = document.getElementById("electronic-background");
    RTX.style.left = SCROLL_POSITION + "px";
  }
  
  initialize();