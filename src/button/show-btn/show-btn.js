const feedbackText = document.querySelector('.feedback__text');
const showBtn = document.querySelector('.show__btn');
const hideBtn = document.querySelector('.hide__btn');

const showAll = () => {
  feedbackText.classList.toggle('feedback__text--open');
  showBtn.classList.toggle('no-active');
  hideBtn.classList.toggle('active');
};

showBtn.addEventListener('click', showAll);
hideBtn.addEventListener('click', showAll);
