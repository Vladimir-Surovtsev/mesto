export const popups = document.querySelector('.popups');

export const editFormElement = document.querySelector('#editForm');
export const editForm = document.querySelector('#edit-profile-form');
export const addFormElement = document.querySelector('#addDiv');
export const popupTypeContentUsers = document.querySelector('#addForm');

export const openPopupEditButton = document.querySelector('.profile__edit-button');
export const openPopupAddButton = document.querySelector('.profile__add-button');
export const profileTitle = document.querySelector('.profile__title');
export const profileSubtitle = document.querySelector('.profile__subtitle');

export const cardsContainer = document.querySelector('.elements');

export const popupTypeEdit = document.querySelector('.popup_type_edit');
export const nameInput = document.querySelector('#name-input');
export const jobInput = document.querySelector('#job-input');

export const popupTypeNewCard = document.querySelector('.popup_type_new-card');
export const placeInput = document.querySelector('#place-input');
export const linkInput = document.querySelector('#image-link-input');

export const popupImage = document.querySelector('.popup__image');
export const popupTitleImage = document.querySelector('.popup__title-image');
export const popupTypeImage = document.querySelector('.popup_type_image');

export const formSelector = document.querySelectorAll('.popup__form');

export const obj = {
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__button',
    inactiveButtonClass: 'popup__button_disabled',
    inputErrorClass: 'popup__input_type_error',
    errorClass: 'popup__error_visible'
}

export const initialCards = [{
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
},
{
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
},
{
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
},
{
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
},
{
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
},
{
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
}
];