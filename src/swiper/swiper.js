/* ------Свайпер------------------------------------- */
import Swiper from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
const swiper = new Swiper(".swiper", {
	direction: "horizontal",
	loop: true,
	slidesPerView: "auto",

	// configure Swiper to use modules
	modules: [Navigation, Pagination],
	pagination: {
		el: ".swiper-pagination",
		clickable: true,
	},
});
