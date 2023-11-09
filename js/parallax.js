function initialize() {
    window.addEventListener("scroll", moveImagesWhenUserScrolls);
  }
  
  function moveImagesWhenUserScrolls(){
  const SCROLL_POSITION = window.scrollY;
  
    const RTX = document.getElementById("rtx-2080");
    RTX.style.left = SCROLL_POSITION + "px";
  }
  
  initialize();