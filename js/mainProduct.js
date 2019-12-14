// const vertical_menu = document.getElementsByClassName("block-ul");
// console.log(vertical_menu);

$("#vertical-menu h3").click(function() {
  //slide up all the link lists
  $("#vertical-menu ul ul").slideUp();
  $(".plus", this).html("+");
  //slide down the link list below the h3 clicked - only if its closed
  if (
    !$(this)
      .next()
      .is(":visible")
  ) {
    $(this)
      .next()
      .slideDown();
    //$(this).remove("span").append('<span class="minus">-</span>');
    $(".plus").html("+");
    $(".plus", this).html("-");
  }
});

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
