"use strict";

// === Careers ===
let careersItems = document.querySelectorAll(".careers__item");
let careersSeeMoreBtn = document.querySelector(".careers__more");

careersSeeMoreBtn.addEventListener('click' , () => {
    careersItems.forEach((item , i) => {
        if(i >= 9) {
            item.classList.toggle("display");
        }
    });
    if(careersItems[9].classList.contains("display")) {
        careersSeeMoreBtn.innerHTML = "See less";
    }
    else {
        careersSeeMoreBtn.innerHTML = "See more";
    }
});
// === / Careers ===