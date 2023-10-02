// Owl Carousel js

$('.owl-carousel').owlCarousel({
  loop:true,
  margin: 20,
  autoplay:true,
  autoplayTimeout:3000,
  autoWidth: true,
  nav: false,
  dots: false,
  responsive:{
      0:{
          items:1,
      },
      600:{
          items:2
      },
      1024:{
          items:4
      },
      1100:{
          items:5
      }
  }
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

// Form input numbers
function numberonly(input) {
  var num = /[^0-9+]/gi;
  input.value= input.value.replace(num, "");
}