function showContainer() {
  let revealsContainer = document.querySelectorAll(".container");

  for (let i = 0; i < revealsContainer.length; i++) {
    let windowHeight = window.innerHeight;
    let elementTop = revealsContainer[i].getBoundingClientRect().top;
    let elementVisible = 150;

    if (elementTop < windowHeight - elementVisible) {
      revealsContainer[i].classList.add("active");
    } else {
      revealsContainer[i].classList.remove("active");
    }
  }
}

window.addEventListener("scroll", showContainer);

function showTariffs() {
  let revealsTariffs = document.querySelectorAll(".tariffs");

  for (let i = 0; i < revealsTariffs.length; i++) {
    let windowHeight = window.innerHeight;
    let elementTop = revealsTariffs[i].getBoundingClientRect().top;
    let elementVisible = 150;

    if (elementTop < windowHeight - elementVisible) {
      revealsTariffs[i].classList.add("active");
    } else {
      revealsTariffs[i].classList.remove("active");
    }
  }
}

window.addEventListener("scroll", showTariffs);

function showImg() {
  let revealsImg = document.querySelectorAll(".container-img");

  for (let i = 0; i < revealsImg.length; i++) {
    let windowHeight = window.innerHeight;
    let elementTop = revealsImg[i].getBoundingClientRect().top;
    let elementVisible = 150;

    if (elementTop < windowHeight - elementVisible) {
      revealsImg[i].classList.add("active");
    } else {
      revealsImg[i].classList.remove("active");
    }
  }
}

window.addEventListener("scroll", showImg);

function showMethod() {
  let revealsMethod = document.querySelectorAll(".method");

  for (let i = 0; i < revealsMethod.length; i++) {
    let windowHeight = window.innerHeight;
    let elementTop = revealsMethod[i].getBoundingClientRect().top;
    let elementVisible = 150;

    if (elementTop < windowHeight - elementVisible) {
      revealsMethod[i].classList.add("active");
    } else {
      revealsMethod[i].classList.remove("active");
    }
  }
}

window.addEventListener("scroll", showMethod);