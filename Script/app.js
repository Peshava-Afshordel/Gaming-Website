const toggle = document.querySelectorAll(".toggle-btn");
const header = document.querySelector("header");
const pupularPhotos = document.querySelectorAll(".pupular__photo__wrapper");
const heroImg = document.querySelectorAll(".pupular__photo__wrapper");
const filterNumber = document.querySelector("#filter__number");
const filterNumber1 = document.querySelector("#filter__number1");
const rangeInput = document.querySelectorAll("#range");
const searchBtn = document.querySelector(".nav__search-btn img");
const navSearch = document.querySelector(".nav__search-btn");
const filterGame = document.querySelectorAll(".filter__game-box");
let gameTitle = document.querySelector(".game__title");
let gameScores = document.querySelector(".scores h1");
let gameCreate = document.querySelector(".date p");
let gameCaption = document.querySelector(".game__caption");
const toggleMenu = document.querySelector(".menu__toggle");
const mobileMenu = document.querySelector(".menu__mobile");
const accordionFaq = document.querySelectorAll(".FAQ__item");

const loading = document.querySelector(".loading");

window.addEventListener("DOMContentLoaded", function () {
  loading.style.display = "none";
});

//   change hero


function addActiveClass(name, activeClass) {
  name.classList.toggle(activeClass);
}

function remoActiveClass(name, activeClass) {
  name.classList.toggle(activeClass);
}

// Hero Slide
heroImg.forEach((hero) => {
  hero.addEventListener("click", function (e) {
    let heroNumber = e.target.dataset.hero;
    changeHero(heroNumber);
  });
});

searchBtn.addEventListener("click", function () {
  navSearch.classList.toggle("nav__search-btn--active");
});

toggleMenu.addEventListener("click", function () {
  addActiveClass(mobileMenu, "menu--open");
  addActiveClass(toggleMenu, "menu--open");
  document.querySelector("body").classList.toggle("no-scroll");
});

filterGame.forEach((FG) => {
  FG.addEventListener("click", function () {
    FG.classList.toggle("filter__game-box--active");
  });
});

rangeInput.forEach((i) => {
  i.addEventListener("input", function (e) {
    if (e.target.dataset.set === "0") {
      filterNumber.innerText = e.target.value;
    } else if (e.target.dataset.set === "1") {
      filterNumber1.innerText = e.target.value;
    }
  });
});

toggle.forEach((t) => {
  t.addEventListener("click", function () {
    t.classList.toggle("toggle-btn--active");
  });
});
pupularPhotos.forEach((p) => {
  p.addEventListener("click", function () {
    document
      .querySelector(".pupular__photo__wrapper--active")
      .classList.remove("pupular__photo__wrapper--active");
    this.classList.add("pupular__photo__wrapper--active");
  });
});

accordionFaq.forEach((f) => {
  f.addEventListener("click", function () {
    this.classList.toggle("FAQ__item--active");
  });
});
