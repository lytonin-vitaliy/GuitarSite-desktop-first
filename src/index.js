import './styles/normalize.css'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './styles/main.scss';

import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';

const swiper = new Swiper('.slider-teacher', {
  slidesPerView: 3,
  spaceBetween: 30,
  navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
  modules: [Navigation, Pagination],
});

// Accordion


let acc = document.getElementsByClassName("accordion__btn");
let i;


for (i = 0; i < acc.length; i++) {
 acc[i].addEventListener("click", function() {
   this.classList.toggle("active");
   let panel = this.nextElementSibling;
   if (panel.style.maxHeight) {
     panel.style.maxHeight = null;
   } else {
     panel.style.maxHeight = panel.scrollHeight + "px";
   }
 });
};

function updateBannerText() {
  const date = document.querySelector('.js-date');
  if (!date) return;

  if (window.innerWidth <= 1024) {
    date.textContent = '01.04 - 28.06'; // короткий для мобилки
  } else {
    date.textContent = '01 апреля - 28 июня'; // полный для десктопа
  }
}

window.addEventListener('load', updateBannerText);
window.addEventListener('resize', updateBannerText);


const button = document.querySelector('#color-changer');
button.addEventListener('click', () => {
  const randomColor = `#${Math.floor(Math.random()*16777215).toString(16)}`;
  document.body.style.background = randomColor;
});

/* const button = document.querySelector('#color-changer');
let isPurple = false;

button.addEventListener('click', () => {
  isPurple = !isPurple;
  document.body.style.background = isPurple ? 'purple' : '#1F2023'; // Исходный цвет
});

console.log (isPurple); */