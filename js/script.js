// Swiper js
// var swiper = new Swiper(".mySwiper", {
//     slidesPerView: 4,
//     spaceBetween: 20,
//     freeMode: true,
//     autoplay: {
//         delay: 2500,
//         disableOnInteraction: false,
//     },
//     pagination: {
//         el: ".swiper-pagination",
//         clickable: true,
//     }
// });

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