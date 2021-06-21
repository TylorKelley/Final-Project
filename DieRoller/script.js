var $die = $(".die"),
  sides = 20,
  initialSide = 1,
  lastFace,
  timeoutId,
  transitionDuration = 500,
  animationDuration = 3000;

$("ul > li > a").click(function () {
  reset();
  rollTo($(this).attr("href"));

  return false;
});

function randomFace() {
  var face = Math.floor(Math.random() * sides) + initialSide;
  lastFace = face == lastFace ? randomFace() : face;
  return face;
}

function rollTo(face) {
  clearTimeout(timeoutId);

  $("ul > li > a").removeClass("active");
  $("[href=" + face + "]").addClass("active");

  $die.attr("data-face", face);
}

function reset() {
  $die.attr("data-face", null).removeClass("rolling");
}

$(".randomize, .die").click(function () {
  $die.addClass("rolling");
  clearTimeout(timeoutId);

  timeoutId = setTimeout(function () {
    $die.removeClass("rolling");

    rollTo(randomFace());
  }, animationDuration);

  return false;
});

function showMenuCharacters() {
  document.getElementById("characters-dropdown").classList.add("show");
  document.getElementById("faelyn-map-dropdown").classList.remove("show");
  document.getElementById("monsters-dropdown").classList.remove("show");
}
function showMenuFaelynMap() {
  document.getElementById("faelyn-map-dropdown").classList.add("show");
  document.getElementById("characters-dropdown").classList.remove("show");
  document.getElementById("monsters-dropdown").classList.remove("show");
}

function showMenuMonsters() {
  document.getElementById("monsters-dropdown").classList.add("show");
  document.getElementById("faelyn-map-dropdown").classList.remove("show");
  document.getElementById("characters-dropdown").classList.remove("show");
}

function menuDisappearMap() {
  document.getElementById("faelyn-map-dropdown").classList.remove("show");
}
function menuDisappearCharacters() {
  document.getElementById("characters-dropdown").classList.remove("show");
}
function menuDisappearMonsters() {
  document.getElementById("monsters-dropdown").classList.remove("show");
}

document
  .getElementById("characters")
  .addEventListener("mouseover", showMenuCharacters);
document
  .getElementById("faelyn-map")
  .addEventListener("mouseover", showMenuFaelynMap);
document
  .getElementById("monsters")
  .addEventListener("mouseover", showMenuMonsters);

document
  .getElementById("characters-dropdown")
  .addEventListener("mouseleave", menuDisappearCharacters);
document
  .getElementById("faelyn-map-dropdown")
  .addEventListener("mouseleave", menuDisappearMap);
document
  .getElementById("monsters-dropdown")
  .addEventListener("mouseleave", menuDisappearMonsters);

// SIDE MENU

let hamburger = document.querySelector(".hamburger-menu");
let menu = document.querySelector(".side-menu-position");
let overlay = document.querySelector(".side-nav-overlay");
let bod = document.querySelector("body");

hamburger.addEventListener("click", function () {
  hamburger.classList.toggle("isactive");
  menu.classList.toggle("show");
  overlay.classList.toggle("show");
  bod.classList.toggle("hidden");
  event.preventDefault();
});

// SIDE MENU SUB LIST

let sideCharacters = document.querySelector(".side-characters");
let subMenuCharacters = document.querySelector(".sub-list-characters");
let sideMap = document.querySelector(".side-map");
let subMenuMap = document.querySelector(".sub-list-map");
let sideMonsters = document.querySelector(".side-monsters");
let subMenuMonsters = document.querySelector(".sub-list-monsters");

sideCharacters.addEventListener("click", function () {
  subMenuCharacters.classList.toggle("show");
  event.preventDefault();
});
sideMap.addEventListener("click", function () {
  subMenuMap.classList.toggle("show");
  event.preventDefault();
});

sideMonsters.addEventListener("click", function () {
  subMenuMonsters.classList.toggle("show");
  event.preventDefault();
});

// MOBILE SEARCH

let mobileSearchIcon = document.querySelector(".mobile-search-icon");
let mobileSearchBar = document.querySelector(".mobile-input-box");

mobileSearchIcon.addEventListener("click", function () {
  mobileSearchBar.classList.toggle("show");
});