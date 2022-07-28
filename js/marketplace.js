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
   } else {
      themeText.innerHTML = "Светлая тема";
   };
   
})