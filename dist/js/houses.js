"use strict";

// === Houses ===
let housesItems = document.querySelectorAll(".houses__item");
let housesSeeMoreBtn = document.querySelector(".houses__more");

housesSeeMoreBtn.addEventListener('click' , () => {
    housesItems.forEach((item , i) => {
        if(i >= 3) {
            item.classList.toggle("display");
        }
    });
    if(housesItems[3].classList.contains("display")) {
        housesSeeMoreBtn.innerHTML = "See less";
    }
    else {
        housesSeeMoreBtn.innerHTML = "See more";
    }
});
// === / Houses ===