(()=>{"use strict";var t={d:(e,n)=>{for(var o in n)t.o(n,o)&&!t.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:n[o]})},o:(t,e)=>Object.prototype.hasOwnProperty.call(t,e)};t.d({},{KC:()=>z,KS:()=>w,vi:()=>P});var e=function(t){t.classList.add("popup_is-opened"),document.addEventListener("keydown",o)},n=function(t){t.classList.remove("popup_is-opened"),document.removeEventListener("keydown",o)},o=function(t){if("Escape"===t.key){var e=document.querySelector(".popup_is-opened");n(e)}},r=document.querySelector("#card-template").content;function c(t,n,o,c){var a=r.querySelector(".card").cloneNode(!0);a.querySelector(".card__title").textContent=t.name;var i=a.querySelector(".card__image"),u=a.querySelector(".card__likes");a.setAttribute("id",t._id),i.src=t.link,i.alt=t.name,u.textContent=t.likes.length;var s=a.querySelector(".card__delete-button");s.addEventListener("click",o),n!==t.owner._id&&s.remove(),t.likes.forEach((function(t){t._id===n&&l.classList.add("card__like-button_is-active")})),i.addEventListener("click",(function(){e(w),P.src=t.link,P.alt=t.name,z.textContent=t.name}));var l=a.querySelector(".card__like-button");return l.addEventListener("click",c),a}function a(t,e,n){t.classList.remove(n.inputErrorClass),e.classList.remove(n.errorClass),e.textContent=t.validationMessage}function i(t,e){t.classList.remove(e.inactiveButtonClass),t.disabled=!1}function u(t,e,n){e?i(t,n):function(t,e){t.classList.add(e.inactiveButtonClass),t.disabled=!0}(t,n)}function s(t){return t.ok?t.json():t.json().then((function(e){Promise.reject("Ошибка: ".concat(t.status))}))}var l,p=document.querySelector(".places__list"),d=document.querySelector(".profile__edit-button"),f=document.querySelector(".popup_type_edit"),m=document.querySelectorAll(".popup__close"),_=document.querySelector(".profile__add-button"),v=document.querySelector(".popup_type_new-card"),h=document.querySelectorAll(".popup"),b=document.querySelector(".profile__image"),y=document.querySelector(".profile__title"),g=document.querySelector(".profile__description"),S=document.forms["edit-profile"],k=S.elements.name,C=S.elements.description,E=document.forms["new-place"],q=E.elements["place-name"],L=E.elements.link,x=document.querySelector(".popup_type_update-avatar"),A=document.forms["new-avatar"],T=A.querySelector(".popup__input"),j=A.querySelector(".popup__button"),w=document.querySelector(".popup_type_image"),P=document.querySelector(".popup__image"),z=document.querySelector(".popup__caption"),B="",O="";function D(t){var e;t.preventDefault(),(e=t.target.closest(".card").id,fetch("https://nomoreparties.co/v1/cohort-magistr-2/cards/".concat(e),{method:"DELETE",headers:{authorization:"5ff08c9f-6c39-4cbe-b4be-5b7c70daa1f4","Content-Type":"application/json"},body:JSON.stringify({_id:e})}).then((function(t){return s(t)}))).then((function(){t.target.closest(".card").remove()})).catch((function(t){console.log(t)})).finally((function(){}))}function N(t){var e,n=t.target.closest(".card"),o=n.querySelector(".card__likes");t.target.closest(".card__like-button_is-active")?(e=n.id,fetch("https://nomoreparties.co/v1/cohort-magistr-2/cards/likes/".concat(e),{method:"DELETE",headers:{authorization:"5ff08c9f-6c39-4cbe-b4be-5b7c70daa1f4","Content-Type":"application/json"}}).then((function(t){return s(t)}))).then((function(e){o.textContent=e.likes.length,t.target.classList.toggle("card__like-button_is-active")})).catch((function(t){console.log(t)})).finally((function(){})):function(t){return fetch("https://nomoreparties.co/v1/cohort-magistr-2/cards/likes/".concat(t),{method:"PUT",headers:{authorization:"5ff08c9f-6c39-4cbe-b4be-5b7c70daa1f4","Content-Type":"application/json"}}).then((function(t){return s(t)}))}(n.id).then((function(e){o.textContent=e.likes.length,t.target.classList.toggle("card__like-button_is-active"),console.log(e)})).catch((function(t){console.log(t)})).finally((function(){}))}l={formSelector:".popup__form",inputSelector:".popup__input",submitButtonSelector:".popup__button",inactiveButtonClass:"popup__button_disabled",inputErrorClass:"popup__input_type_error",errorClass:"popup__error_visible"},Array.from(document.querySelectorAll(l.formSelector)).forEach((function(t){!function(t,e){var n=Array.from(t.querySelectorAll(e.inputSelector)),o=t.querySelector(e.submitButtonSelector);u(o,t.checkValidity(),e),n.forEach((function(n){n.addEventListener("input",(function(){!function(t,e,n){var o=e.validity.valid,r=t.querySelector("#".concat(e.name,"-error"));e.validity.patternMismatch?e.setCustomValidity(e.dataset.errorMessage):e.setCustomValidity(""),o?a(e,r,n):function(t,e,n){t.classList.add(n.inputErrorClass),e.classList.add(n.errorClass),e.textContent=t.validationMessage}(e,r,n)}(t,n,e),u(o,t.checkValidity(),e)}))})),t.addEventListener("submit",(function(t){t.preventDefault()}))}(t,l)})),_.addEventListener("click",(function(){e(v)})),d.addEventListener("click",(function(){k.value=y.textContent,C.value=g.textContent,function(t,e){var n=t.querySelectorAll(e.inputSelector),o=t.querySelector(e.submitButtonSelector);n.forEach((function(n){a(n,t.querySelector("#".concat(n.name,"-error")),e)})),i(o,e),console.log("clear")}(S,{formSelector:".popup__form",inputSelector:".popup__input",submitButtonSelector:".popup__button",inactiveButtonClass:"popup__button_disabled",inputErrorClass:"popup__input_type_error",errorClass:"popup__error_visible"}),e(f)})),S.addEventListener("submit",(function(t){var e,o;t.preventDefault(),(e=k.value,o=C.value,fetch("https://nomoreparties.co/v1/cohort-magistr-2/users/me",{method:"PATCH",headers:{authorization:"5ff08c9f-6c39-4cbe-b4be-5b7c70daa1f4","Content-Type":"application/json"},body:JSON.stringify({name:e,about:o})}).then((function(t){return s(t)}))).then((function(t){y.textContent=k.value,g.textContent=C.value,n(f)})).catch((function(t){console.log(t)}))})),E.addEventListener("submit",(function(t){t.preventDefault();var e={name:q.value,link:L.value,likes:[]};e.owner={_id:B},function(t){return fetch("https://nomoreparties.co/v1/cohort-magistr-2/cards",{method:"POST",headers:{authorization:"5ff08c9f-6c39-4cbe-b4be-5b7c70daa1f4","Content-Type":"application/json"},body:JSON.stringify({name:t.name,link:t.link})}).then((function(t){return s(t)}))}(e).then((function(e){p.prepend(c(e,B,D,N)),q.value="",L.value="",n(t.target.closest(".popup"))})).catch((function(t){console.log(t)}))})),b.addEventListener("click",(function(){T.value="",e(x)})),A.addEventListener("submit",(function(t){var e;t.preventDefault(),j.textContent="Сохранение...",(e=A.avatar.value,fetch("https://nomoreparties.co/v1/cohort-magistr-2/users/me/avatar ",{method:"PATCH",headers:{authorization:"5ff08c9f-6c39-4cbe-b4be-5b7c70daa1f4","Content-Type":"application/json"},body:JSON.stringify({avatar:e})}).then((function(t){return s(t)}))).then((function(t){b.removeAttribute("style"),b.setAttribute("style","background-image:url(".concat(t.avatar,")")),closePopup(x)})).catch((function(t){console.log(t)})).finally((function(){j.textContent="Сохранить"}))})),m.forEach((function(t){t.addEventListener("click",(function(t){n(t.target.closest(".popup"))}))})),h.forEach((function(t){t.addEventListener("click",(function(t){t.target===t.currentTarget&&n(t.target)}))})),Promise.all([fetch("https://nomoreparties.co/v1/cohort-magistr-2/users/me",{headers:{authorization:"5ff08c9f-6c39-4cbe-b4be-5b7c70daa1f4"}}).then((function(t){return s(t)})),fetch("https://nomoreparties.co/v1/cohort-magistr-2/cards",{headers:{authorization:"5ff08c9f-6c39-4cbe-b4be-5b7c70daa1f4"}}).then((function(t){return s(t)})).then((function(t){return t})).catch((function(t){console.log("Ошибка: ",t)}))]).then((function(t){y.textContent=t[0].name,g.textContent=t[0].about,B=t[0]._id,O=t[0].avatar,b.setAttribute("style","background-image:url(".concat(O,")")),t[1].forEach((function(t){var e={name:t.name,link:t.link,likes:t.likes,owner:{_id:t._id}};p.append(c(e,B,D,N))}))})).catch((function(t){console.log("Ошибка: "+t)}))})();