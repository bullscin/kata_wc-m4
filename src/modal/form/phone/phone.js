const callModal = document.querySelector('.phone-m');
const menuMobile = document.querySelector('.menu__mobile');
const wrapper = document.querySelector('.wrapper');
const mainBlock = document.querySelector('.main--block');

const btnBurger = document.querySelector('.modal-btn');
const btnBurgerMob = document.querySelector('.btn__phone-mob');
const call = document.querySelector('.menu__button--call');

call.addEventListener('click', () => {
  callModal.classList.toggle('phone-m--active');
  btnBurger.classList.toggle('modal-btn--active');
  mainBlock.classList.add('wrapper');
  menuMobile.classList.toggle('menu__mobile--active');
});

btnBurgerMob.addEventListener('click', () => {
  callModal.classList.remove('phone-m--active');
  btnBurger.classList.toggle('modal-btn--active');
  mainBlock.classList.remove('wrapper');
});

btnBurger.addEventListener('click', () => {
  callModal.classList.remove('phone-m--active');
  btnBurger.classList.remove('modal-btn--active');
  mainBlock.classList.remove('wrapper');
});

// Обработчик события нажатия клавиши Escape
document.addEventListener('keydown', function (evt) {
  // Проверяем, что нажата клавиша Escape
  if (evt.key === 'Escape') {
    callModal.classList.remove('phone-m--active');
    btnBurger.classList.remove('modal-btn--active');
    mainBlock.classList.remove('wrapper');
  }
});
