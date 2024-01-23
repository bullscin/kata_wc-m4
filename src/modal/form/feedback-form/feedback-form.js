const feedbackModal = document.querySelector(".feedback-form");
const menuMobile = document.querySelector(".menu__mobile");
const mainBlock = document.querySelector(".main--block");
const wrapper = document.querySelector(".wrapper");

const btnBurger = document.querySelector(".modal-btn");
const feedback = document.querySelector(".menu__button--chat");
const btnBurgerMob = document.querySelector(".btn__feedback-form-mob");

feedback.addEventListener("click", () => {
	feedbackModal.classList.toggle("feedback-form--active");
	btnBurger.classList.toggle("modal-btn--active");
	mainBlock.classList.add("wrapper");
	menuMobile.classList.toggle("menu__mobile--active");
});

btnBurgerMob.addEventListener("click", () => {
	feedbackModal.classList.toggle("feedback-form--active");
	btnBurger.classList.toggle("modal-btn--active");
	mainBlock.classList.remove("wrapper");
});

btnBurger.addEventListener("click", () => {
	feedbackModal.classList.remove("feedback-form--active");
	btnBurger.classList.remove("modal-btn--active");
	mainBlock.classList.remove("wrapper");
});

// // Обработчик события нажатия клавиши Escape
document.addEventListener("keydown", function (evt) {
	// Проверяем, что нажата клавиша Escape
	if (evt.key === "Escape") {
		feedbackModal.classList.remove("feedback-form--active");
	}
});
