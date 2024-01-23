const brandsMobile = document.querySelector('.brands__list--mobile');
const brandsDesktop = document.querySelector('.brands__list--desktop');
const showBtn = document.querySelector('.show__btn--brands');
const hideBtn = document.querySelector('.hide__btn--brands');

const logos = [
  'images/brands/samsung.png',
  'images/brands/apple.png',
  'images/brands/viewsonic.png',
  'images/brands/bosch.png',
  'images/brands/hp.png',
  'images/brands/acer.png',
  'images/brands/sony.png',
  'images/brands/lenovo.png',
  'images/brands/samsung.png',
  'images/brands/apple.png',
];

/* ------Функции------------------------------------- */
const makeItem = (src) => {
  const brandsItem = document.createElement('li');
  brandsItem.classList.add('swiper-slide');
  brandsItem.classList.add('brands__item');

  const brandsLogo = document.createElement('img');
  brandsLogo.src = src;
  brandsLogo.alt = 'Логотип';
  brandsItem.appendChild(brandsLogo);

  const brandsBtn = document.querySelector('.service__btn').cloneNode(true);
  brandsItem.appendChild(brandsBtn);

  return brandsItem;
};

const showAll = () => {
  brandsDesktop.classList.toggle('brands__list--open');
  showBtn.classList.toggle('no-active');
  hideBtn.classList.toggle('active');
};

showBtn.addEventListener('click', showAll);
hideBtn.addEventListener('click', showAll);

/* ------Добавление блоков------------------------------------- */
for (let i = 0; i < logos.length; i++) {
  brandsMobile.appendChild(makeItem(logos[i]));
  brandsDesktop.appendChild(makeItem(logos[i]));
}
