const openPopupButton = document.querySelector('.profile__edit-button');
const popup = document.querySelector('.popup');
const closePopupButton = document.querySelector('.popup__close');

function togglePopup(event) {
    popup.classList.toggle('popup_is-opened');
}

openPopupButton.addEventListener('click', togglePopup);

closePopupButton.addEventListener('click', togglePopup);

function handleOverLayClick(event) {
    if (event.target === event.currentTarget)
        togglePopup(event);
}

popup.addEventListener('click', handleOverLayClick);


let formElement = document.querySelector('.popup__content');
let nameInput = document.querySelector('.popup__value_name');
let jobInput = document.querySelector('.popup__value_job');
let profileTitle = document.querySelector('.profile__title');
let profileSubtitle = document.querySelector('.profile__subtitle');

function formSubmitHandler(evt) {
    evt.preventDefault();
    profileTitle.textContent = nameInput.value;
    profileSubtitle.textContent = jobInput.value;
}

formElement.addEventListener('submit', formSubmitHandler);