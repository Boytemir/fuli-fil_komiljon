// Swiper js

var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 12,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      600: {
        slidesPerView: 1,
        spaceBetween: 12,
      },
      768: {
        slidesPerView: 4,
        spaceBetween: 20,
      },
      1024: {
        slidesPerView: 5,
        spaceBetween: 20,
      },
    },
});


// sign up
let kurs__btn = document.querySelectorAll(".kurs__btn");
let sign_up = document.querySelector(".sign-up");
let sign__up__box = document.querySelector(".sign-up__box");

kurs__btn.forEach(element => {
    element.addEventListener("click", () => {
        sign_up.classList.add("active");
    })
});

sign_up.addEventListener("click", (e) => {
    // e.stopImmediatePropagation();
    sign_up.classList.remove("active");
});

sign__up__box.addEventListener("click", (e) => {
    e.stopImmediatePropagation();
});

let sign__up__btn = document.querySelector(".sign-up__btn");

sign__up__btn.addEventListener("click", (e) => {
    e.preventDefault();
});