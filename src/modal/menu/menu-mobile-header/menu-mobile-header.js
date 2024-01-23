const btnBurger = document.querySelector(".menu__btn");
const btnBurgerX = document.querySelector(".modal__btn-x");

const menuMobile = document.querySelector(".menu__mobile");
const callModal = document.querySelector(".phone-m");
const feedbackModal = document.querySelector(".feedback-form");

const mainBlock = document.querySelector(".main--block");
const wrapper = document.querySelector(".wrapper");

const btnClick = (btn) => {
	btn.addEventListener("click", () => {
		menuMobile.classList.toggle("menu__mobile--active");
		mainBlock.classList.toggle("wrapper");
	});
};

btnClick(btnBurger);
btnClick(btnBurgerX);

// Обработчик события нажатия клавиши Escape
document.addEventListener("keydown", function (evt) {
	// Проверяем, что нажата клавиша Escape
	if (evt.key === "Escape") {
		menuMobile.classList.remove("menu__mobile--active");
		mainBlock.classList.remove("wrapper");
	}
});
