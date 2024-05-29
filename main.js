(()=>{"use strict";var e={baseUrl:"https://nomoreparties.co/v1/wff-cohort-15",headers:{authorization:"5dcf1aa1-8e2e-4665-9dbb-d84d3205566d","Content-Type":"application/json"}},t=function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))},n=document.querySelector("#card-template").content;function r(r,o,c,u,i){var a=n.querySelector(".places__item.card").cloneNode(!0),l=a.querySelector(".card__title"),s=a.querySelector(".card__image"),d=a.querySelector(".card__image"),p=a.querySelector(".card__delete-button"),f=a.querySelector(".card__like-button"),_=a.querySelector(".card__like-counter"),y=a.querySelector(".card__delete-button");return l.textContent=r.name,s.src=r.link,d.alt=r.name,_.textContent=r.likes.length,r.owner._id===i?p.addEventListener("click",(function(){return o(a,r._id)})):y.remove(),r.likes.some((function(e){return e._id===i}))&&f.classList.add("card__like-button_is-active"),f.addEventListener("click",(function(){var n;f.classList.contains("card__like-button_is-active")?(n=r._id,fetch("".concat(e.baseUrl,"/cards/likes/").concat(n),{method:"DELETE",headers:e.headers}).then((function(e){return t(e)})).catch((function(e){return console.log(e)}))).then((function(e){f.classList.toggle("card__like-button_is-active"),_.textContent=e.likes.length})).catch((function(e){console.log(e)})):function(n){return fetch("".concat(e.baseUrl,"/cards/likes/").concat(n),{method:"PUT",headers:e.headers}).then((function(e){return t(e)})).catch((function(e){return console.log(e)}))}(r._id).then((function(e){f.classList.toggle("card__like-button_is-active"),_.textContent=e.likes.length})).catch((function(e){console.log(e)}))})),s.addEventListener("click",(function(){return u(r)})),a}function o(n,r){(function(n){return fetch("".concat(e.baseUrl,"/cards/").concat(n),{method:"DELETE",headers:e.headers}).then((function(e){return t(e)})).catch((function(e){return console.log(e)}))})(r).then((function(){n.remove()})).catch((function(e){console.log(e)}))}function c(e){e.classList.add("popup_is-animated"),setTimeout((function(){e.classList.add("popup_is-opened")}),0),document.addEventListener("keydown",i),e.addEventListener("click",a)}function u(e){e.classList.remove("popup_is-opened"),document.removeEventListener("keydown",i),e.removeEventListener("click",a)}function i(e){"Escape"===e.key&&u(document.querySelector(".popup_is-opened"))}function a(e){e.currentTarget===e.target&&u(e.currentTarget)}var l={formSelector:".popup__form",inputSelector:".popup__input",submitButtonSelector:".popup__button",inactiveButtonClass:"popup__button_disabled",inputErrorClass:"popup__input_type_error",errorClass:"popup__error_visible"};function s(e,t,n){var r=e.querySelector(".".concat(t.id,"-error"));t.classList.remove(n),r.textContent=""}function d(e,t,n){!function(e){return e.some((function(e){return!e.validity.valid}))}(e)?(t.disabled=!1,t.classList.remove(n.inactiveButtonClass)):(t.disabled=!0,t.classList.add(n.inactiveButtonClass))}function p(e,t){var n=Array.from(e.querySelectorAll(t.inputSelector));n.forEach((function(n){s(e,n,t.inputErrorClass)})),d(n,e.querySelector(t.submitButtonSelector),t.inactiveButtonClass)}function f(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var _=document.querySelector(".profile__edit-button"),y=document.querySelector(".popup_type_edit"),m=y.querySelector(".popup__close"),h=y.querySelector(".popup__form"),v=h.querySelector(".popup__input_type_name"),S=h.querySelector(".popup__input_type_description"),b=document.querySelector(".profile__title"),g=document.querySelector(".profile__description"),q=document.querySelector(".profile__image"),k=document.querySelector(".popup_type_edit-avatar"),C=k.querySelector(".popup__close"),E=k.querySelector(".popup__form"),L=E.querySelector(".popup__input_type_avatar-url"),x=document.querySelector(".profile__add-button"),A=document.querySelector(".popup_type_new-card"),T=A.querySelector(".popup__close"),U=A.querySelector(".popup__form"),w=U.querySelector(".popup__input_type_card-name"),j=U.querySelector(".popup__input_type_url"),O=document.querySelector(".popup_type_image"),B=document.querySelector(".popup__image"),P=document.querySelector(".popup__caption"),D=O.querySelector(".popup__close"),I=document.querySelector(".popup__button"),M=document.querySelector(".places__list");function N(e){P.textContent=e.name,B.src=e.link,B.alt=e.name,c(O)}_.addEventListener("click",(function(){c(y),v.value=b.textContent,S.value=g.textContent,p(h,l)})),h.addEventListener("submit",(function(n){n.preventDefault(),I.textContent="Сохранение...",function(n,r){return fetch("".concat(e.baseUrl,"/users/me"),{method:"PATCH",headers:e.headers,body:JSON.stringify({name:n,about:r})}).then((function(e){return t(e)})).catch((function(e){return console.log(e)}))}(v.value,S.value).then((function(e){b.textContent=e.name,g.textContent=e.about})).catch((function(e){return console.log(e)})).finally((function(){return I.textContent="Сохранить"})),u(y)})),m.addEventListener("click",(function(){return u(y)})),q.addEventListener("click",(function(){E.reset(),c(k),p(E,l)})),E.addEventListener("submit",(function(n){var r;n.preventDefault(),I.textContent="Сохранение...",(r=L.value,fetch("".concat(e.baseUrl,"/users/me/avatar"),{method:"PATCH",headers:e.headers,body:JSON.stringify({avatar:r})}).then((function(e){return t(e)})).catch((function(e){return console.log(e)}))).then((function(e){q.style.backgroundImage="url('".concat(e,"')")})).catch((function(e){return console.log(e)})).finally((function(){return I.textContent="Сохранить"})),E.reset(),u(k)})),C.addEventListener("click",(function(){return u(k)})),x.addEventListener("click",(function(){U.reset(),c(A),p(U,l)})),U.addEventListener("submit",(function(n){var c,i;n.preventDefault(),I.textContent="Сохранение...",(c=w.value,i=j.value,fetch("".concat(e.baseUrl,"/cards"),{method:"POST",headers:e.headers,body:JSON.stringify({name:c,link:i})}).then((function(e){return t(e)})).catch((function(e){return console.log(e)}))).then((function(e){M.prepend(r(e,o,0,N))})).catch((function(e){return console.log(e)})).finally((function(){return I.textContent="Сохранить"})),U.reset(),u(A)})),T.addEventListener("click",(function(){return u(A)})),D.addEventListener("click",(function(){return u(O)})),function(e){Array.from(document.querySelectorAll(e.formSelector)).forEach((function(t){!function(e,t){var n=Array.from(e.querySelectorAll(t.inputSelector)),r=e.querySelector(t.submitButtonSelector);d(n,r,t),n.forEach((function(o){o.addEventListener("input",(function(){!function(e,t,n){t.validity.patternMismatch?t.setCustomValidity(t.dataset.errorMessage):t.setCustomValidity(""),t.validity.valid?s(e,t,n):function(e,t,n,r){var o=e.querySelector(".".concat(t.id,"-error"));t.classList.add(n),o.textContent=r}(e,t,n,t.validationMessage)}(e,o,t.inputErrorClass),d(n,r,t)}))}))}(t,e)}))}(l),Promise.all([fetch("".concat(e.baseUrl,"/users/me"),{headers:e.headers}).then((function(e){return t(e)})).catch((function(e){return console.log(e)})),fetch("".concat(e.baseUrl,"/cards"),{headers:e.headers}).then((function(e){return t(e)})).catch((function(e){return console.log(e)}))]).then((function(e){var t,n,c=(n=2,function(e){if(Array.isArray(e))return e}(t=e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,c,u,i=[],a=!0,l=!1;try{if(c=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;a=!1}else for(;!(a=(r=c.call(n)).done)&&(i.push(r.value),i.length!==t);a=!0);}catch(e){l=!0,o=e}finally{try{if(!a&&null!=n.return&&(u=n.return(),Object(u)!==u))return}finally{if(l)throw o}}return i}}(t,n)||function(e,t){if(e){if("string"==typeof e)return f(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?f(e,t):void 0}}(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),u=c[0],i=c[1],a=u._id;b.textContent=u.name,g.textContent=u.about,q.style.backgroundImage="url('".concat(u.avatar,"')"),i.forEach((function(e){M.append(r(e,o,0,N,a))}))})).catch((function(e){return console.log(e)}))})();
//# sourceMappingURL=main.js.map