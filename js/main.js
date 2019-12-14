const searchbar = document.getElementsByTagName("input");
const categry = document.getElementsByClassName("header-nav-n1");

categry[0].setAttribute("style", "margin-right:0");

for (i = 0; i < 2; i++) {
  searchbar[i].addEventListener("focus", function() {
    searchbar[i].setAttribute("placeholder", "");
  });

  searchbar[i].addEventListener("blur", function() {
    const input = searchbar[i].value;
    if (input == "") {
      searchbar[i].setAttribute("placeholder", "search");
    }
  });
}

const menubtn = document.querySelector(".menu-btn");
const hamburger = document.querySelector(".menu-btn__burger");
const nav = document.querySelector(".header-nav");
const menunav = document.querySelector(".menu-nav");
const navitems = document.querySelectorAll(".menu-nav__item");

let showMenu = false;

menubtn.addEventListener("click", togglemenu);

function togglemenu() {
  if (!showMenu) {
    hamburger.classList.add("open");
    nav.classList.add("open");
    menunav.classList.add("open");
    navitems.forEach(item => item.classList.add("open"));
    showMenu = true;
  } else {
    hamburger.classList.remove("open");
    nav.classList.remove("open");
    menunav.classList.remove("open");
    navitems.forEach(item => item.classList.remove("open"));
    showMenu = false;
  }
}
