var servicesSliderWrapper = document.querySelector(".services-slider-wrapper");
var servicesLinkWrappers = servicesSliderWrapper.querySelectorAll(".services-list-item");
var servicesLinks = servicesSliderWrapper.querySelectorAll(".services-list-item a");
var servicesSlides = servicesSliderWrapper.querySelectorAll(".services-slide");

var findCurrentLinkAndSlide = function () {
	var curLink = 0;
	for (var i = 0; i < servicesLinks.length; i++) {
		if (servicesLinkWrappers[i].classList.contains("current-in-services-list")) {
			curLink = i;
		}
	}
	return curLink;
}

var changeSlide = function (link, slide, linkWrapper) {
	link.addEventListener("click", function (evt) {
		evt.preventDefault();
		var currentLinkAndSlide = findCurrentLinkAndSlide();

		servicesLinkWrappers[currentLinkAndSlide].classList.remove("current-in-services-list");
		servicesSlides[currentLinkAndSlide].classList.remove("show-services-slide");

		linkWrapper.classList.add("current-in-services-list");
		slide.classList.add("show-services-slide");
	})
}

for(var i = 0; i < servicesLinks.length; i++) {
	changeSlide(servicesLinks[i], servicesSlides[i], servicesLinkWrappers[i]);
}