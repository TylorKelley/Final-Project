// MAIN MENU

function showMenuCharacters() {
  document.getElementById("characters-dropdown").classList.add("show");
  document.getElementById("faelyn-map-dropdown").classList.remove("show");
  document.getElementById("monsters-dropdown").classList.remove("show");
  document.getElementById("items-dropdown").classList.remove("show");
}
function showMenuFaelynMap() {
  document.getElementById("faelyn-map-dropdown").classList.add("show");
  document.getElementById("characters-dropdown").classList.remove("show");
  document.getElementById("monsters-dropdown").classList.remove("show");
  document.getElementById("items-dropdown").classList.remove("show");
}

function showMenuMonsters() {
  document.getElementById("monsters-dropdown").classList.add("show");
  document.getElementById("faelyn-map-dropdown").classList.remove("show");
  document.getElementById("characters-dropdown").classList.remove("show");
  document.getElementById("items-dropdown").classList.remove("show");
}

function showMenuItems() {
  document.getElementById("items-dropdown").classList.add("show");
  document.getElementById("characters-dropdown").classList.remove("show");
  document.getElementById("faelyn-map-dropdown").classList.remove("show");
  document.getElementById("monsters-dropdown").classList.remove("show");
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
function menuDissapearItems() {
  document.getElementById("items-dropdown").classList.remove("show");
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
  .getElementById("magic-items")
  .addEventListener("mouseover", showMenuItems);

document
  .getElementById("characters-dropdown")
  .addEventListener("mouseleave", menuDisappearCharacters);
document
  .getElementById("faelyn-map-dropdown")
  .addEventListener("mouseleave", menuDisappearMap);
document
  .getElementById("monsters-dropdown")
  .addEventListener("mouseleave", menuDisappearMonsters);
document
  .getElementById("items-dropdown")
  .addEventListener("mouseleave", menuDissapearItems);

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
let sideItems = document.querySelector(".side-items");
let subMenuItems = document.querySelector(".sub-list-items");

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

sideItems.addEventListener("click", function () {
  subMenuItems.classList.toggle("show");
  event.preventDefault();
});

// MOBILE SEARCH

let mobileSearchIcon = document.querySelector(".mobile-search-icon");
let mobileSearchBar = document.querySelector(".mobile-input-box");

mobileSearchIcon.addEventListener("click", function () {
  mobileSearchBar.classList.toggle("show");
});