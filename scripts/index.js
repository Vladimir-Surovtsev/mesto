// const openPopupButton = document.querySelector('.profile__edit-button');
const openPopupButton = document.querySelector('.profile__edit-button');
const popup = document.querySelector('.popup');
// const closePopupButton = document.querySelector('.popup__close');
const closePopupButton = document.querySelector('.popup__close');
let formElement = document.querySelector('.popup__content');
let nameInput = document.querySelector('.popup__value_text_name');
let jobInput = document.querySelector('.popup__value_text_job');
let profileTitle = document.querySelector('.profile__title');
let profileSubtitle = document.querySelector('.profile__subtitle');

// function togglePopup(event) {
//     popup.classList.toggle('popup_is-opened');        --функция с переключателем
// }

function openPopup() {
    popup.classList.add('popup_is-opened');
    profileTitle.textContent = nameInput.value;
    profileSubtitle.textContent = jobInput.value;
}

function closePopup() {
    popup.classList.remove('popup_is-opened');
}

// function handleOverLayClick(event) {                  --Функция определения клика вне области попапа
//     if (event.target === event.currentTarget)
//         togglePopup(event);
// }

function formSubmitHandler(evt) {
    evt.preventDefault();
    profileTitle.textContent = nameInput.value;
    profileSubtitle.textContent = jobInput.value;
    // togglePopup();
    closePopup();
}

openPopupButton.addEventListener('click', openPopup);
formElement.addEventListener('submit', formSubmitHandler);

// popup.addEventListener('click', handleOverLayClick);  --Слушатель для клика вне области видимости

// openPopupButton.addEventListener('click', togglePopup);

// closePopupButton.addEventListener('click', togglePopup);

openPopupButton.addEventListener('click', openPopup);

closePopupButton.addEventListener('click', closePopup);