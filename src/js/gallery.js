"use strict";

// === Gallery ===
let galleryItems = document.querySelectorAll(".gallery__item");
let gallerySeeMoreBtn = document.querySelector(".gallery__more");

gallerySeeMoreBtn.addEventListener('click' , () => {
    galleryItems.forEach((item , i) => {
        if(i >= 6) {
            item.classList.toggle("display");
        }
    });
    if(galleryItems[6].classList.contains("display")) {
        gallerySeeMoreBtn.innerHTML = "See less";
    }
    else {
        gallerySeeMoreBtn.innerHTML = "See more";
    }
});
// === / Gallery ===