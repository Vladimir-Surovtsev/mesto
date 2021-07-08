import Card from './Card.js';
import {
    initialCards
} from './initial-сards.js';
import FormValidater from './FormValidater.js';

const popups = document.querySelector('.popups');

const editFormElement = document.querySelector('#editForm');
const addFormElement = document.querySelector('#addDiv');
const popupTypeContentUsers = document.querySelector('#addForm');

const openPopupEditButton = document.querySelector('.profile__edit-button');
const openPopupAddButton = document.querySelector('.profile__add-button');
const profileTitle = document.querySelector('.profile__title');
const profileSubtitle = document.querySelector('.profile__subtitle');

const cardsContainer = document.querySelector('.elements');

const popupTypeEdit = document.querySelector('.popup_type_edit');
const nameInput = document.querySelector('#name-input');
const jobInput = document.querySelector('#job-input');

const popupTypeNewCard = document.querySelector('.popup_type_new-card');
const placeInput = document.querySelector('#place-input');
const linkInput = document.querySelector('#image-link-input');
const popupCreateButton = document.querySelector('.popup__create-button');

export const obj = {
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__button',
    inactiveButtonClass: 'popup__button_disabled',
    inputErrorClass: 'popup__input_type_error',
    errorClass: 'popup__error_visible'
}

function closeByOverlay() {
    const popupList = Array.from(document.querySelectorAll('.popup'));
    popupList.forEach((popup) => {
        popup.addEventListener('click', function (evt) {
            if (evt.target === evt.currentTarget) {
                closePopup(popup);
            }
        });
    });
}

closeByOverlay();

initialCards.forEach((item) => {
    const card = new Card(item, '.elements');
    const cardElement = card.generateCard();

    cardsContainer.append(cardElement);
});

function createCard(evt) {
    evt.preventDefault();
    const item = {
        name: placeInput.value,
        link: linkInput.value
    };
    const card = new Card(item, '.elements');
    const cardElement = card.generateCard();
    cardsContainer.prepend(cardElement);
    popupTypeContentUsers.reset();
    closePopup(popupTypeNewCard);
    popupCreateButton.classList.add('popup__button_disabled');
    popupCreateButton.setAttribute("disabled", "true");
}

const addFormEl = new FormValidater(obj, popupTypeContentUsers);
addFormEl.enableValidation();

const editProfile = new FormValidater(obj, editFormElement);
editProfile.enableValidation();

function keyDown(evt) {
    const openedPopup = document.querySelector('.popup_is-opened');
    if (evt.key === 'Escape') {
        closePopup(openedPopup);
    }
    if (evt.key === 'Enter') {
        if (openedPopup === popupTypeEdit) {
            formSubmitHandler(evt);
        }
        if (openedPopup === popupTypeNewCard) {
            createCard(evt);
        }
    }
}

export function openPopup(popup) {
    popup.classList.add('popup_is-opened');
    document.addEventListener('keydown', keyDown);
}

function closePopup(popup) {
    popup.classList.remove('popup_is-opened');
    document.removeEventListener('keydown', keyDown);
}

function openEditPopup() {
    openPopup(popupTypeEdit);
    nameInput.value = profileTitle.textContent;
    jobInput.value = profileSubtitle.textContent;
}

function openAddPopup() {
    openPopup(popupTypeNewCard);
}

function formSubmitHandler(evt) {
    evt.preventDefault();
    profileTitle.textContent = nameInput.value;
    profileSubtitle.textContent = jobInput.value;
    closePopup(popupTypeEdit);
}

function handleClosePopup(evt) {
    if (evt.target.classList.contains('popup__close')) {
        const popup = evt.target.closest('.popup');
        closePopup(popup);
    }
}

openPopupEditButton.addEventListener('click', openEditPopup);

openPopupAddButton.addEventListener('click', openAddPopup);

popups.addEventListener('click', handleClosePopup);

editFormElement.addEventListener('submit', formSubmitHandler);

addFormElement.addEventListener('submit', createCard);