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
  setTimeout(() => {
    loading.style.display = "none";
  }, 4000);
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

function changeHero(heroNumber) {
  if (heroNumber == 1) {
    header.style.background = `url("./Assets/image/Hero.jfif")`;
    header.style.backgroundPosition = "60% .5rem";
    header.style.backgroundSize = "cover";
    header.style.backgroundRepeat = "no-repeat";
    header.style.height = "62rem";
    gameTitle.innerText = "The Witcher 3";
    gameCaption.innerText = `The Witcher 3: Wild Hunt" is an open-world RPG where players follow Geralt of Rivia, a monster hunter, in his quest to find his adopted daughter, Ciri. Set in a richly detailed and expansive world, the game offers a deep narrative and complex choices that affect the game's outcome.`;
    gameCreate.innerText = `May 19, 2015`;
    gameScores.innerHTML = `   <h1>93<span>/100</span></h1>`;
  } else if (heroNumber == 2) {
    header.style.background = `url("./Assets/image/Property 1=RDR.png")`;
    header.style.height = "62rem";
    header.style.backgroundRepeat = "no-repeat";

    header.style.backgroundPosition = "center";
    header.style.backgroundSize = "cover";
    gameTitle.innerText = "Red Dead Redemtion II";
    gameCaption.innerText = `In this open-world action-adventure game, players control Arthur Morgan, an outlaw navigating the downfall of the Wild West. Set in a vast, immersive world, the game follows Arthur’s struggles with loyalty, survival, and morality as his gang faces opposition from law enforcement.`;
    gameScores.innerHTML = `   <h1>97<span>/100</span></h1>`;
    gameCreate.innerText = `Oct 26, 2018`;
  } else if (heroNumber == 3) {
    header.style.background = `url("./Assets/image/Property 1=TLOS.png")`;
    header.style.height = "62rem";
    header.style.backgroundRepeat = "no-repeat";

    header.style.backgroundPosition = "60% center";
    header.style.backgroundSize = "cover";
    gameTitle.innerText = "The Last Of Us II";
    gameCaption.innerText = `The Last of Us Part II continues the emotional journey of Ellie, now older and seeking revenge. Set in a post-apocalyptic world, the game combines stealth and action, forcing players to confront moral dilemmas and the harsh consequences of violence.`;
    gameScores.innerHTML = `<h1>93<span>/100</span></h1>`;
    gameCreate.innerText = `Jun 19, 2020`;
  } else if (heroNumber == 4) {
    header.style.background = `url("./Assets/image/Property 1=GOT.png")`;
    header.style.backgroundRepeat = "no-repeat";
    header.style.backgroundPosition = "center .5rem";
    header.style.backgroundSize = "cover";
    gameTitle.innerText = "Ghost Of Tushima";
    gameCaption.innerText = `Set in feudal Japan, players follow Jin Sakai, a samurai warrior defending his home from Mongol invaders. Blending stealth, swordplay, and open-world exploration, the game is a tribute to classic samurai films and the code of honor that drives its protagonist.`;
    gameScores.innerHTML = `<h1>83<span>/100</span></h1>`;
    gameCreate.innerText = `Jul 17, 2020`;
  } else if (heroNumber == 5) {
    header.style.background = `url("./Assets/image/Property 1=GOW.png")`;
    header.style.backgroundPosition = "center 1rem";
    header.style.backgroundSize = "cover";
    header.style.backgroundRepeat = "no-repeat";
    gameTitle.innerText = "God Of War: Ragnorag";
    gameCaption.innerText = `In this soft reboot, Kratos embarks on a journey with his son Atreus in the world of Norse mythology. Combining intense combat with a rich narrative, the game explores themes of fatherhood, redemption, and the gods’ power over fate honor that drives its protagonist.`;
    gameScores.innerHTML = `<h1>94<span>/100</span></h1>`;
    gameCreate.innerText = ` Apr 20, 2018`;
  }
}

function changeHeroImg(heroNumber) {
  if (heroNumber == 1) {
    document
      .querySelector(".pupular__photo__wrapper--active")
      .classList.remove("pupular__photo__wrapper--active");
    document
      .querySelector(".pupular__photo__wrapper1")
      .classList.add("pupular__photo__wrapper--active");
  } else if (heroNumber === 2) {
    document
      .querySelector(".pupular__photo__wrapper--active")
      .classList.remove("pupular__photo__wrapper--active");
    document
      .querySelector(".pupular__photo__wrapper2")
      .classList.add("pupular__photo__wrapper--active");
  } else if (heroNumber == 3) {
    document
      .querySelector(".pupular__photo__wrapper--active")
      .classList.remove("pupular__photo__wrapper--active");
    document
      .querySelector(".pupular__photo__wrapper3")
      .classList.add("pupular__photo__wrapper--active");
  } else if (heroNumber == 4) {
    document
      .querySelector(".pupular__photo__wrapper--active")
      .classList.remove("pupular__photo__wrapper--active");
    document
      .querySelector(".pupular__photo__wrapper4")
      .classList.add("pupular__photo__wrapper--active");
  } else if (heroNumber == 5) {
    document
      .querySelector(".pupular__photo__wrapper--active")
      .classList.remove("pupular__photo__wrapper--active");
    document
      .querySelector(".pupular__photo__wrapper5")
      .classList.add("pupular__photo__wrapper--active");
  }
}

function autoChangeHero() {
  let i = 1;
  window.addEventListener("DOMContentLoaded", function heroNext() {
    changeHero(i);
    changeHeroImg(i);
    i++;
    if (i > 5) {
      i = 1;
    }
    setTimeout(heroNext, 4000);
  });
  heroNext();
}

autoChangeHero();
