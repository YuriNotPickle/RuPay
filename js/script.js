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

// Hide down pagination
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

// page 4 popup 
const openPopup = document.querySelector('.fourth__bottom_btn');
const closePopup = document.querySelector('.tokenization-popup__right-part_button');
const popup = document.querySelector('.tokenization-popup');

function popupHideShow () {
   popup.classList.toggle('active');
}
openPopup.addEventListener("click", popupHideShow);
closePopup.addEventListener("click", popupHideShow);