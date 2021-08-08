(()=>{"use strict";var e=document.querySelector(".profile__edit-button"),t=".elements__like-counter",n=document.querySelector(".popup_type_edit"),r=document.querySelector("#name-input"),o=document.querySelector("#job-input"),i=document.querySelector(".popup__save-button"),a=document.querySelector(".popup_type_new-card"),u=document.querySelector(".profile__add-button"),l=document.querySelector(".popup__create-button"),c=document.querySelector(".profile__image"),s=document.querySelector(".popup_type_avatar"),f=document.querySelector(".popup__avatar-button"),p=document.querySelector(".popup_type_image"),h=document.querySelector(".popup_type_accept"),_=document.querySelector(".popup__accept-button"),d={inputSelector:".popup__input",submitButtonSelector:".popup__button",inactiveButtonClass:"popup__button_disabled",inputErrorClass:"popup__input_type_error",errorClass:"popup__error_visible"};function y(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var m=function(){function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._key=t,this._baseUrl=n,this._then=function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))}}var t,n;return t=e,(n=[{key:"getInitialMe",value:function(){return fetch(this._baseUrl+"users/me",{headers:{authorization:this._key,"Content-Type":"application/json"}}).then(this._then)}},{key:"getInitialCards",value:function(){return fetch(this._baseUrl+"cards",{headers:{authorization:this._key,"Content-Type":"application/json"}}).then(this._then)}},{key:"editeProfile",value:function(e,t){return fetch(this._baseUrl+"users/me",{method:"PATCH",headers:{authorization:this._key,"Content-Type":"application/json"},body:JSON.stringify({name:e,about:t})}).then(this._then)}},{key:"initialNewCard",value:function(e,t){return fetch(this._baseUrl+"cards",{method:"POST",headers:{authorization:this._key,"Content-Type":"application/json"},body:JSON.stringify({name:e,link:t})}).then(this._then)}},{key:"addLike",value:function(e){return fetch(this._baseUrl+"cards/likes/".concat(e),{method:"PUT",headers:{authorization:this._key,"Content-Type":"application/json"}}).then(this._then)}},{key:"deleteLike",value:function(e){return fetch(this._baseUrl+"cards/likes/".concat(e),{method:"DELETE",headers:{authorization:this._key,"Content-Type":"application/json"}}).then(this._then)}},{key:"deleteCard",value:function(e){return fetch(this._baseUrl+"cards/".concat(e),{method:"DELETE",headers:{authorization:this._key,"Content-Type":"application/json"}}).then(this._then)}},{key:"changeAvatar",value:function(e){return fetch(this._baseUrl+"users/me/avatar",{method:"PATCH",headers:{authorization:this._key,"Content-Type":"application/json"},body:JSON.stringify({avatar:e})}).then(this._then)}}])&&y(t.prototype,n),e}();function v(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var b=function(){function e(t,n,r,o,i){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._name=t.name,this._link=t.link,this._id=t._id,this._likes=t.likes,this._counter=t.likes.length,this._ownerId=t.ownerId,this._myId=t.myId,this._cardSelector=n,this.handleCardClick=r,this.handleAccept=o,this._handleLikeClick=i}var t,n;return t=e,(n=[{key:"getTemplate",value:function(){return document.querySelector("".concat(this._cardSelector)).content.querySelector(".elements__element").cloneNode(!0)}},{key:"generateCard",value:function(){var e=this;this._element=this.getTemplate();var t=this._element.querySelector(".elements__image");return this._element.querySelector(".elements__title").textContent=this._name,t.src=this._link,t.alt=this._name,this._element.querySelector(".elements__like-counter").textContent=this._counter,this._myId!==this._ownerId&&this._element.querySelector(".elements__trash").classList.add("elements__trash_hidden"),this._likes.forEach((function(t){t._id===e._myId&&e._handleLikeIcon()})),this._setEventListeners(),this._element}},{key:"idCard",value:function(){return this._id}},{key:"_setEventListeners",value:function(){var e=this;this._element.querySelector(".elements__like").addEventListener("click",(function(){e._handleLikeIcon(),e._handleLikeClick(e._element,e._id)})),this._element.querySelector(".elements__trash").addEventListener("click",(function(){e.handleAccept(e._element,e._id)})),this._element.querySelector(".elements__image").addEventListener("click",(function(){e.handleCardClick(e._element.querySelector(".elements__image"))}))}},{key:"_handleLikeIcon",value:function(){this._element.querySelector(".elements__like").classList.toggle("elements__like_active")}}])&&v(t.prototype,n),e}();function k(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var g=function(){function e(t,n){var r=t.items,o=t.renderer;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._renderedItems=r,this.renderer=o,this.container=document.querySelector(n)}var t,n;return t=e,(n=[{key:"addItem",value:function(e){this.container.prepend(e)}},{key:"renderItems",value:function(){var e=this;this._renderedItems.forEach((function(t){e.renderer(t)}))}}])&&k(t.prototype,n),e}();function E(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var S=function(){function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._formElement=n,this._inputSelector=t.inputSelector,this._submitButtonSelector=t.submitButtonSelector,this._inactiveButtonClass=t.inactiveButtonClass,this._inputErrorClass=t.inputErrorClass,this._errorClass=t.errorClass,this._inputList=Array.from(this._formElement.querySelectorAll(this._inputSelector)),this._buttonElement=this._formElement.querySelector(this._submitButtonSelector)}var t,n;return t=e,(n=[{key:"_showInputError",value:function(e,t){this._errorElement=this._formElement.querySelector(".".concat(e.id,"-error")),this._errorElement.classList.add(this._inputErrorClass),this._errorElement.textContent=t,this._errorElement.classList.add(this._errorClass)}},{key:"_hideInputError",value:function(e){this._errorElement=this._formElement.querySelector(".".concat(e.id,"-error")),this._errorElement.classList.remove(this._inputErrorClass),this._errorElement.classList.remove(this._errorClass),this._errorElement.textContent=""}},{key:"_setEventListeners",value:function(){var e=this;this._toggleButtonState(),this._inputList.forEach((function(t){t.addEventListener("input",(function(){e._checkInputValidity(t),e._toggleButtonState()}))}))}},{key:"_hasInvalidInput",value:function(){return this._inputList.some((function(e){return!e.validity.valid}))}},{key:"disableButton",value:function(){this._buttonElement.classList.add(this._inactiveButtonClass),this._buttonElement.setAttribute("disabled","true")}},{key:"_toggleButtonState",value:function(){this._hasInvalidInput()?this.disableButton():(this._buttonElement.classList.remove(this._inactiveButtonClass),this._buttonElement.removeAttribute("disabled"))}},{key:"_checkInputValidity",value:function(e){e.validity.valid?this._hideInputError(e):this._showInputError(e,e.validationMessage)}},{key:"enableValidation",value:function(){this._formElement.addEventListener("submit",(function(e){e.preventDefault()})),this._setEventListeners()}}])&&E(t.prototype,n),e}();function C(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var w=function(){function e(t){var n=t.nameSelector,r=t.jobSelector;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._name=document.querySelector(n),this._about=document.querySelector(r)}var t,n;return t=e,(n=[{key:"getUserInfo",value:function(){return{name:this._name.textContent,about:this._about.textContent}}},{key:"setUserInfo",value:function(e){this._name.textContent=e.name,this._about.textContent=e.about}}])&&C(t.prototype,n),e}();function L(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var P=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._popup=t,this._handleEscClose=this._handleEscClose.bind(this)}var t,n;return t=e,(n=[{key:"openPopup",value:function(){this._popup.classList.add("popup_is-opened"),document.addEventListener("keydown",this._handleEscClose)}},{key:"closePopup",value:function(){this._popup.classList.remove("popup_is-opened"),document.removeEventListener("keydown",this._handleEscClose)}},{key:"_handleEscClose",value:function(e){"Escape"===e.key&&this.closePopup()}},{key:"_handleClosePopup",value:function(e){e.target.classList.contains("popup__close")&&this.closePopup()}},{key:"_handleCloseByOverlay",value:function(e){e.target===e.currentTarget&&this.closePopup()}},{key:"setEventListeners",value:function(){var e=this;this._popup.addEventListener("click",(function(t){e._handleClosePopup(t),e._handleCloseByOverlay(t)}))}}])&&L(t.prototype,n),e}();function I(e){return(I="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function O(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function q(e,t,n){return(q="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=x(e)););return e}(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(n):o.value}})(e,t,n||e)}function j(e,t){return(j=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function T(e,t){return!t||"object"!==I(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function x(e){return(x=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var B=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&j(e,t)}(a,e);var t,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=x(r);if(o){var n=x(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return T(this,e)});function a(e,t,n){var r;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(r=i.call(this,e))._popup=e,r._form=r._popup.querySelector(".popup__form"),r.formEditSubmitHandler=t,r.formAddSubmitHandler=n,r}return t=a,(n=[{key:"_getInputValues",value:function(){var e=this;return this._inputList=this._form.querySelectorAll(".popup__input"),this._formValues={},this._inputList.forEach((function(t){return e._formValues[t.name]=t.value})),this._formValues}},{key:"setEventListeners",value:function(){var e=this;this._form.addEventListener("submit",(function(t){t.preventDefault(),"add-content-users"===e._form.name?e.formAddSubmitHandler(e._getInputValues()):e.formEditSubmitHandler(e._getInputValues())})),q(x(a.prototype),"setEventListeners",this).call(this)}},{key:"closePopup",value:function(){this._form.reset(),q(x(a.prototype),"closePopup",this).call(this)}}])&&O(t.prototype,n),a}(P);function A(e){return(A="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function R(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function U(e,t,n){return(U="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=D(e)););return e}(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(n):o.value}})(e,t,n||e)}function V(e,t){return(V=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function z(e,t){return!t||"object"!==A(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function D(e){return(D=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var H=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&V(e,t)}(a,e);var t,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=D(r);if(o){var n=D(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return z(this,e)});function a(e){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),i.call(this,e)}return t=a,(n=[{key:"openPopup",value:function(e){var t=this._popup.querySelector(".popup__image");t.src=e.src,t.alt=e.alt,this._popup.querySelector(".popup__title-image").textContent=e.alt,U(D(a.prototype),"openPopup",this).call(this)}}])&&R(t.prototype,n),a}(P);function N(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var M=new w({nameSelector:".profile__title",jobSelector:".profile__subtitle"});function J(e,t){return new b(e,"#card",W,Z,Y).generateCard(t)}var $=new m("fc57bca5-e75f-42a0-83ef-a595f3326172","https://mesto.nomoreparties.co/v1/cohort-26/");Promise.all([$.getInitialMe(),$.getInitialCards()]).then((function(t){var s,f,p=(f=2,function(e){if(Array.isArray(e))return e}(s=t)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,i=[],a=!0,u=!1;try{for(n=n.call(e);!(a=(r=n.next()).done)&&(i.push(r.value),!t||i.length!==t);a=!0);}catch(e){u=!0,o=e}finally{try{a||null==n.return||n.return()}finally{if(u)throw o}}return i}}(s,f)||function(e,t){if(e){if("string"==typeof e)return N(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?N(e,t):void 0}}(s,f)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),h=p[0],_=p[1],d=h._id;c.src=h.avatar,M.setUserInfo(h);var y=_.reverse().map((function(e){var t={};return t.name=e.name,t.link=e.link,t.likes=e.likes,t._id=e._id,t.ownerId=e.owner._id,t.myId=d,t})),m=new g({items:y,renderer:function(e){m.addItem(J(e))}},".elements");m.renderItems();var v=new B(n,b);function b(e){i.textContent="Сохранение...",$.editeProfile(e.name,e.about).then((function(){M.setUserInfo(e),v.closePopup()})).catch((function(e){console.log(e)})).finally((function(){i.textContent="Сохранить"}))}e.addEventListener("click",(function(){v.openPopup();var e=M.getUserInfo();r.value=e.name,o.value=e.about})),v.setEventListeners();var k=new B(a,b,(function(e){l.textContent="Сохранение...",$.initialNewCard(e.place,e.image).then((function(e){m.addItem(J(e)),k.closePopup()})).catch((function(e){console.log(e)})).finally((function(){l.textContent="Создать",F.disableButton()}))}));u.addEventListener("click",(function(){k.openPopup()})),k.setEventListeners()})).catch((function(e){console.log(e)})),new S(d,n).enableValidation();var F=new S(d,a);F.enableValidation();var G=new B(s);c.addEventListener("click",(function(){G.openPopup()})),G.setEventListeners();var K=new S(d,s);K.enableValidation(),document.querySelector(".popup__avatar-button").addEventListener("click",(function(){f.textContent="Сохранение...";var e=document.querySelector("#avatar-link-input").value;$.changeAvatar(e).then((function(e){c.src=e.avatar,G.closePopup()})).catch((function(e){console.log(e)})).finally((function(){f.textContent="Сохранить",K.disableButton()}))}));var Q=new H(p);function W(e){Q.openPopup(e,p)}Q.setEventListeners();var X=new B(h);function Y(e,n){null!==e.querySelector(".elements__like_active")?$.addLike(n).then((function(n){e.querySelector(t).textContent=n.likes.length})).catch((function(e){console.log(e)})):$.deleteLike(n).then((function(n){e.querySelector(t).textContent=n.likes.length})).catch((function(e){console.log(e)}))}function Z(e,t){X.openPopup(h),_.addEventListener("click",(function(){$.deleteCard(t).then((function(){e.remove(),X.closePopup()})).catch((function(e){console.log(e)}))}))}X.setEventListeners()})();