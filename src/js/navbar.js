"use strict";

// === Navbar Module ===
let hamburger = document.querySelector(".navbar__hamburger");
let closeBtn = document.querySelector(".navbar__close");
let navbar = document.querySelector(".navbar");
let overlay = document.querySelector(".navbar__overlay");
let navbarLink = document.querySelectorAll(".navbar__link");

hamburger.addEventListener('click' , () => {
    navbar.classList.add("active");
});

closeBtn.addEventListener('click' , () => {
    navbar.classList.remove("active");
});

navbarLink.forEach(link => {
    link.addEventListener('click' , () => {
        navbar.classList.remove("active");
    });
});

overlay.addEventListener('click' , () => {
    navbar.classList.remove("active");
});
// === / Navbar Module ===