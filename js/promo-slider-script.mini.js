var promoWrapper=document.querySelector(".promo-slider-wrapper"),promoSlides=promoWrapper.querySelectorAll(".promo-slider-slides"),radioList=document.createElement("ul");radioList.classList.add("promo-radio-list"),promoWrapper.appendChild(radioList);for(var radioElement=[],radioButton=[],radioSpan=[],i=0;i<promoSlides.length;i++)radioElement[i]=document.createElement("li"),radioElement[i].classList.add("promo-radio-list-item"),radioList.appendChild(radioElement[i]),radioButton[i]=document.createElement("button"),radioElement[i].appendChild(radioButton[i]),radioSpan[i]=document.createElement("span"),radioSpan[i].classList.add("visually-hidden"),radioSpan[i].textContent="Переключить на "+(i+1)+" слайд",radioButton[i].appendChild(radioSpan[i]);var radioButtonList=promoWrapper.querySelectorAll(".promo-radio-list-item button"),primaryDef=0;for(i=0;i<promoSlides.length;i++)promoSlides[i].classList.contains("show-promo-slide")&&(primaryDef=i),radioButtonList[i].setAttribute("aria-pressed",!1);radioButtonList[primaryDef].classList.add("current-radio-btn"),radioButtonList[primaryDef].setAttribute("aria-pressed",!0);var findCurrentSlideAndButtonPromo=function(){for(var i=0,r=0;r<promoSlides.length;r++)promoSlides[r].classList.contains("show-promo-slide")&&(i=r);return i},changeSlidePromo=function(o,t){o.addEventListener("click",function(i){i.preventDefault();var r=findCurrentSlideAndButtonPromo();radioButtonList[r].classList.remove("current-radio-btn"),radioButtonList[r].setAttribute("aria-pressed",!1),promoSlides[r].classList.remove("show-promo-slide"),t.classList.add("show-promo-slide"),o.classList.add("current-radio-btn"),o.setAttribute("aria-pressed",!0)})};for(i=0;i<promoSlides.length;i++)changeSlidePromo(radioButtonList[i],promoSlides[i]);