'use strict';

var btn_menu = document.getElementById('btn-menu');
var btn_platos = document.getElementById('btn-platos');
var btn_carnes = document.getElementById('btn-carnes');
var list_menu = document.getElementById('menu');
var list_platos = document.getElementById('platos');
var list_carnes = document.getElementById('carnes');

function mostrarmenu () {
        btn_menu.classList = 'filter-btn active';
        btn_platos.classList = 'filter-btn ';
        btn_carnes.classList = 'filter-btn ';
        list_menu.style.display = '';
        list_platos.style.display = 'none';
        list_carnes.style.display = 'none';
    }
function mostrarplatos() {
        btn_menu.classList = 'filter-btn ';
        btn_platos.classList = 'filter-btn active';
        btn_carnes.classList = 'filter-btn ';
        list_menu.style.display = 'none';
        list_platos.style.display = '';
        list_carnes.style.display = 'none';
    }
function mostrarcarnes() {
        btn_menu.classList = 'filter-btn';
        btn_platos.classList = 'filter-btn ';
        btn_carnes.classList = 'filter-btn active';
        list_menu.style.display = 'none';
        list_platos.style.display = 'none';
        list_carnes.style.display = '';
    }

function myFunction() {
      windows.location.href = "https://www.ubereats.com/";
  }

/**
 * navbar toggle
 */

const navbar = document.querySelector("[data-navbar]");
const navbarLinks = document.querySelectorAll("[data-nav-link]");
const menuToggleBtn = document.querySelector("[data-menu-toggle-btn]");

menuToggleBtn.addEventListener("click", function () {
  navbar.classList.toggle("active");
  this.classList.toggle("active");
});

for (let i = 0; i < navbarLinks.length; i++) {
  navbarLinks[i].addEventListener("click", function () {
    navbar.classList.toggle("active");
    menuToggleBtn.classList.toggle("active");
  });
}



/**
 * header sticky & back to top
 */

const header = document.querySelector("[data-header]");
const backTopBtn = document.querySelector("[data-back-top-btn]");

window.addEventListener("scroll", function () {
  if (window.scrollY >= 100) {
    header.classList.add("active");
    backTopBtn.classList.add("active");
  } else {
    header.classList.remove("active");
    backTopBtn.classList.remove("active");
  }
});



/**
 * search box toggle
 */

const searchBtn = document.querySelector("[data-search-btn]");
const searchContainer = document.querySelector("[data-search-container]");
const searchSubmitBtn = document.querySelector("[data-search-submit-btn]");
const searchCloseBtn = document.querySelector("[data-search-close-btn]");

const searchBoxElems = [searchBtn, searchSubmitBtn, searchCloseBtn];

for (let i = 0; i < searchBoxElems.length; i++) {
  searchBoxElems[i].addEventListener("click", function () {
    searchContainer.classList.toggle("active");
    document.body.classList.toggle("active");
  });
}



/**
 * move cycle on scroll
 */

const deliveryBoy = document.querySelector("[data-delivery-boy]");

let deliveryBoyMove = -80;
let lastScrollPos = 0;

window.addEventListener("scroll", function () {

  let deliveryBoyTopPos = deliveryBoy.getBoundingClientRect().top;

  if (deliveryBoyTopPos < 500 && deliveryBoyTopPos > -250) {
    let activeScrollPos = window.scrollY;

    if (lastScrollPos < activeScrollPos) {
      deliveryBoyMove += 1;
    } else {
      deliveryBoyMove -= 1;
    }

    lastScrollPos = activeScrollPos;
    deliveryBoy.style.transform = `translateX(${deliveryBoyMove}px)`;
  }

});