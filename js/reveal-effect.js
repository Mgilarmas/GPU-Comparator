function showContainer() {
  var revealsContainer = document.querySelectorAll(".container");

  for (var i = 0; i < revealsContainer.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = revealsContainer[i].getBoundingClientRect().top;
    var elementVisible = 150;

    if (elementTop < windowHeight - elementVisible) {
      revealsContainer[i].classList.add("active");
    } else {
      revealsContainer[i].classList.remove("active");
    }
  }
}

window.addEventListener("scroll", showContainer);

function showTariffs() {
  var revealsTariffs = document.querySelectorAll(".tariffs");

  for (var i = 0; i < revealsTariffs.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = revealsTariffs[i].getBoundingClientRect().top;
    var elementVisible = 150;

    if (elementTop < windowHeight - elementVisible) {
      revealsTariffs[i].classList.add("active");
    } else {
      revealsTariffs[i].classList.remove("active");
    }
  }
}

window.addEventListener("scroll", showTariffs);

function showImg() {
  var revealsImg = document.querySelectorAll(".container-img");

  for (var i = 0; i < revealsImg.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = revealsImg[i].getBoundingClientRect().top;
    var elementVisible = 150;

    if (elementTop < windowHeight - elementVisible) {
      revealsImg[i].classList.add("active");
    } else {
      revealsImg[i].classList.remove("active");
    }
  }
}

window.addEventListener("scroll", showImg);

function showMethod() {
  var revealsMethod = document.querySelectorAll(".method");

  for (var i = 0; i < revealsMethod.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = revealsMethod[i].getBoundingClientRect().top;
    var elementVisible = 150;

    if (elementTop < windowHeight - elementVisible) {
      revealsMethod[i].classList.add("active");
    } else {
      revealsMethod[i].classList.remove("active");
    }
  }
}

window.addEventListener("scroll", showMethod);