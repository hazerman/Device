var popupWriteUs = document.querySelector(".popup-write-us");
var buttonWriteUs = document.querySelector(".btn-about");
var popupMap = document.querySelector(".popup-map");
var buttonMap = document.querySelector(".map-btn");
var closeWriteUs = popupWriteUs.querySelector(".close-btn");
var closeMap = popupMap.querySelector(".close-btn");

buttonWriteUs.addEventListener("click", function(evt) {
	evt.preventDefault();
	popupWriteUs.classList.add("show-popup");
});

buttonMap.addEventListener("click", function(evt) {
	evt.preventDefault();
	popupMap.classList.add("show-popup");
});

closeWriteUs.addEventListener("click", function(evt) {
	evt.preventDefault();
	popupWriteUs.classList.remove("show-popup");
});

closeMap.addEventListener("click", function(evt) {
	evt.preventDefault();
	popupMap.classList.remove("show-popup");
});

window.addEventListener("keydown", function (evt) {
	if (evt.keyCode === 27) {
		if (popupWriteUs.classList.contains("show-popup")) {
			evt.preventDefault();
			popupWriteUs.classList.remove("show-popup");
		} else if (popupMap.classList.contains("show-popup")) {
			evt.preventDefault();
			popupMap.classList.remove("show-popup");
		}
	}
});