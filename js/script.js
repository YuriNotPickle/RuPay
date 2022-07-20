const swiper = new Swiper('.swiper', {
   // Optional parameters
   direction: 'horizontal',
 
   // If we need pagination
   pagination: {
     el: '.swiper-pagination',
     clickable: true,
     renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + "</span>";
    },
   },
 
   // Navigation arrows
   navigation: {
     nextEl: '.swiper-button-next',
     prevEl: '.swiper-button-prev',
   },

 });
const eyeActive = document.querySelector(".eye-active");
const eyeInactive = document.querySelector(".eye-inactive");
const paginationPath = document.querySelector(".swiper-pagination");

function paginationHideShow () {
   eyeActive.classList.toggle("hidden");
   eyeInactive.classList.toggle("hidden");
   paginationPath.classList.toggle("hidden");
}

eyeActive.addEventListener("click", paginationHideShow);
eyeInactive.addEventListener("click", paginationHideShow);