var promoWrapper = document.querySelector(".promo-slider-wrapper");
var promoSlides = promoWrapper.querySelectorAll(".promo-slider-slides");

var radioList = document.createElement("ul");
radioList.classList.add("promo-radio-list");
promoWrapper.appendChild(radioList);
var radioElement = [];
var radioButton = [];
var radioSpan = [];
for (var i = 0; i < promoSlides.length; i++) {
	radioElement[i] = document.createElement("li");
	radioElement[i].classList.add("promo-radio-list-item");
	radioList.appendChild(radioElement[i]);
	radioButton[i] = document.createElement("button");
	radioElement[i].appendChild(radioButton[i]);
	radioSpan[i] = document.createElement("span");
	radioSpan[i].classList.add("visually-hidden");
	radioSpan[i].textContent = "Переключить на " + (i+1) + " слайд";
	radioButton[i].appendChild(radioSpan[i]);
}

var radioButtonList = promoWrapper.querySelectorAll(".promo-radio-list-item button");
var primaryDef = 0;

for (var i = 0; i < promoSlides.length; i++) {
	if (promoSlides[i].classList.contains("show-promo-slide")) {primaryDef = i};
	radioButtonList[i].setAttribute("aria-pressed", false);
}

radioButtonList[primaryDef].classList.add("current-radio-btn");
radioButtonList[primaryDef].setAttribute("aria-pressed", true);

var findCurrentSlideAndButtonPromo = function () {
	var currentSlide = 0;
	for (var i = 0; i < promoSlides.length; i++) {
		if (promoSlides[i].classList.contains("show-promo-slide")) {
			currentSlide = i;
		}
	}
	return currentSlide;
}

var changeSlidePromo = function (btn, slide) {
	btn.addEventListener("click", function (evt) {
		evt.preventDefault();
		var currentSlideAndButtonPromo = findCurrentSlideAndButtonPromo();

		radioButtonList[currentSlideAndButtonPromo].classList.remove("current-radio-btn");
		radioButtonList[currentSlideAndButtonPromo].setAttribute("aria-pressed", false);
		promoSlides[currentSlideAndButtonPromo].classList.remove("show-promo-slide");

		slide.classList.add("show-promo-slide");
		btn.classList.add("current-radio-btn");
		btn.setAttribute("aria-pressed", true);
	})
}

for (var i = 0; i < promoSlides.length; i++) {
	changeSlidePromo(radioButtonList[i], promoSlides[i]);
}