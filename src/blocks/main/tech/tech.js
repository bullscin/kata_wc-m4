const techMobile = document.querySelector('.tech__list--mobile');
const techDesktop = document.querySelector('.tech__list--desktop');
const showBtn = document.querySelector('.show__btn--tech');
const hideBtn = document.querySelector('.hide__btn--tech');

const techNames = [
  'Ремонт планшетов',
  'Ремонт ПК',
  'Ремонт мониторов',
  'Ремонт планшетов',
  'Ремонт ПК',
  'Ремонт мониторов',
];

/* ------Функции------------------------------------- */

const makeTech = (text) => {
  const techItem = document.createElement('li');
  techItem.classList.add('swiper-slide');
  techItem.classList.add('tech__item');

  const techText = document.createElement('p');
  techText.textContent = text;
  techItem.appendChild(techText);

  let techBtn = document.querySelector('.service__btn').cloneNode(true);
  techBtn = document.querySelector('.tech__btn').cloneNode(true);
  techItem.appendChild(techBtn);

  return techItem;
};

const showAll = () => {
  techDesktop.classList.toggle('tech__list--open');
  showBtn.classList.toggle('no-active');
  hideBtn.classList.toggle('active');
};

showBtn.addEventListener('click', showAll);
hideBtn.addEventListener('click', showAll);

/* ------Добавление блоков------------------------------------- */
for (let i = 0; i < techNames.length; i++) {
  techMobile.appendChild(makeTech(techNames[i]));
  techDesktop.appendChild(makeTech(techNames[i]));
}
