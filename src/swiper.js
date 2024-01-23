import { Navigation, Pagination } from 'swiper/modules';
import Swiper from 'swiper';
/* ------Свайпер------------------------------------- */
const swiper = new Swiper('.swiper', {
  direction: 'horizontal',
  loop: true,
  slidesPerView: 'auto',

  // configure Swiper to use modules
  modules: [Navigation, Pagination],
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});

export default swiper;
