(()=>{"use strict";var e={d:(t,n)=>{for(var o in n)e.o(n,o)&&!e.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:n[o]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t)};e.d({},{KC:()=>L,KS:()=>q,vi:()=>E});var t=function(e){e.classList.add("popup_is-opened"),document.addEventListener("keydown",o)},n=function(e){e.classList.remove("popup_is-opened"),document.removeEventListener("keydown",o)},o=function(e){if("Escape"===e.key){var t=document.querySelector(".popup_is-opened");n(t)}},r=document.querySelector("#card-template").content;function c(e){var n=e.name,o=e.link,c=r.querySelector(".card").cloneNode(!0);c.querySelector(".card__title").textContent=n;var a=c.querySelector(".card__image");return a.src=o,a.alt=n,c.querySelector(".card__delete-button").addEventListener("click",(function(){c.remove()})),a.addEventListener("click",(function(){t(q),E.src=o,E.alt=n,L.textContent=n})),c.querySelector(".card__like-button").addEventListener("click",(function(e){!function(e){e.target.classList.contains("card__like-button")&&e.target.classList.toggle("card__like-button_is-active")}(e)})),c}var a=document.querySelector(".places__list"),d=document.querySelector(".profile__edit-button"),p=document.querySelector(".popup_type_edit"),l=document.querySelectorAll(".popup__close"),u=document.querySelector(".profile__add-button"),i=document.querySelector(".popup_type_new-card"),s=document.querySelectorAll(".popup"),m=document.querySelector(".profile__title"),v=document.querySelector(".profile__description"),f=document.forms["edit-profile"],y=f.elements.name,_=f.elements.description,k=document.forms["new-place"],g=k.elements["place-name"],S=k.elements.link,q=document.querySelector(".popup_type_image"),E=document.querySelector(".popup__image"),L=document.querySelector(".popup__caption");u.addEventListener("click",(function(){t(i)})),d.addEventListener("click",(function(){t(p),y.value=m.textContent,_.value=v.textContent})),f.addEventListener("submit",(function(e){e.preventDefault(),m.textContent=y.value,v.textContent=_.value,n(e.target.closest(".popup"))})),k.addEventListener("submit",(function(e){e.preventDefault();var t=g.value,o=S.value;a.prepend(c({name:t,link:o})),g.value="",S.value="",n(e.target.closest(".popup"))})),l.forEach((function(e){e.addEventListener("click",(function(e){n(e.target.closest(".popup"))}))})),s.forEach((function(e){e.addEventListener("click",(function(e){e.target===e.currentTarget&&n(e.target)}))})),[{name:"Архыз",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg"},{name:"Челябинская область",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg"},{name:"Иваново",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg"},{name:"Камчатка",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg"},{name:"Холмогорский район",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg"},{name:"Байкал",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg"}].forEach((function(e){var t=e.name,n=e.link;a.append(c({name:t,link:n}))}))})();