for(var servicesSliderWrapper=document.querySelector(".services-slider-wrapper"),servicesLinkWrappers=servicesSliderWrapper.querySelectorAll(".services-list-item"),servicesLinks=servicesSliderWrapper.querySelectorAll(".services-list-item a"),servicesSlides=servicesSliderWrapper.querySelectorAll(".services-slide"),findCurrentLinkAndSlide=function(){for(var e=0,s=0;s<servicesLinks.length;s++)servicesLinkWrappers[s].classList.contains("current-in-services-list")&&(e=s);return e},changeSlide=function(e,i,r){e.addEventListener("click",function(e){e.preventDefault();var s=findCurrentLinkAndSlide();servicesLinkWrappers[s].classList.remove("current-in-services-list"),servicesSlides[s].classList.remove("show-services-slide"),r.classList.add("current-in-services-list"),i.classList.add("show-services-slide")})},i=0;i<servicesLinks.length;i++)changeSlide(servicesLinks[i],servicesSlides[i],servicesLinkWrappers[i]);