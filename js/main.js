const swiper = new Swiper(".swiper", {
  // Optional parameters
  direction: "horizontal",
  autoHeight: true,
  allowTouchMove: true,

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + "</span>";
    },
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

// Hide down pagination
const eyeActive = document.querySelector(".eye-active");
const eyeInactive = document.querySelector(".eye-inactive");
const paginationPath = document.querySelector(".swiper-pagination");

function paginationHideShow() {
  eyeActive.classList.toggle("hidden");
  eyeInactive.classList.toggle("hidden");
  paginationPath.classList.toggle("hidden");
}

eyeActive.addEventListener("click", paginationHideShow);
eyeInactive.addEventListener("click", paginationHideShow);

// page 4 popup
const openPopup = document.querySelector(".fourth__bottom_btn");
const closePopup = document.querySelector(
  ".tokenization-popup__right-part_button"
);
const popup = document.querySelector(".tokenization-popup");

function popupHideShow() {
  popup.classList.toggle("active");
}
openPopup.addEventListener("click", popupHideShow);
closePopup.addEventListener("click", popupHideShow);

const themeSwitch = document.querySelector('.nav-menu__buttons_btn.theme');
const header = document.querySelector('header');
const main = document.querySelector('main');
const footer = document.querySelector('footer');
const themeText = document.querySelector('.nav-menu__buttons_btn_container p');
themeSwitch.addEventListener('click', function () {
   header.classList.toggle('dark');
   main.classList.toggle('dark');
   footer.classList.toggle('dark');
   if (header.classList.contains('dark')) {
      themeText.innerHTML = "Темная тема";
      document.querySelector('body').style = "min-height: 100%; background: url(../img/Polygon-2-dark.svg) 0px 0vh no-repeat, url(../img/Polygon-3-dark.svg) 2vw 95% no-repeat, url(../img/Polygon-4-dark.svg) 80vw 27vh no-repeat, url(../img/disc-left-dark.svg) 0 50vh no-repeat, url(../img/dots-left-dark.svg) 0 15vh no-repeat, url(../img/disc-right-dark.svg) 95vw 70% no-repeat, url(../img/dots-right-dark.svg) 97vw 90% no-repeat;"
   } else {
      themeText.innerHTML = "Светлая тема";
      document.querySelector('body').style = "min-height: 100%; background: url(../img/Polygon_2.svg) 0px 0vh no-repeat, url(../img/Polygon_3.svg) 2vw 95% no-repeat, url(../img/Polygon_4.svg) 80vw 27vh no-repeat, url(../img/disc.svg) 0 50vh no-repeat, url(../img/dots.svg) 0 15vh no-repeat, url(../img/disc-right.svg) 95vw 70% no-repeat, url(../img/dots-circle.svg) 97vw 90% no-repeat;"
   };
   
})