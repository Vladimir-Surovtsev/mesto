import './pages/index.css';

import {
    initialCards,
    editFormElement,
    editForm,
    popupTypeContentUsers,
    profileTitle,
    profileSubtitle,
    popupTypeEdit,
    nameInput,
    jobInput,
    popupTypeNewCard,
    placeInput,
    linkInput,
    openPopupEditButton,
    openPopupAddButton,
    obj
} from '../utils/constants.js';

import Card from '../components/Card.js';
import Section from '../components/Section.js';
import FormValidator from '../components/FormValidator.js';
import Popup from '../components/Popup.js';
import UserInfo from '../components/UserInfo.js';
import PopupWithForm from '../components/PopupWithForm.js';

function createNewCard(item) {
    const card = new Card(item, '#user');
    const cardElement = card.generateCard();
    return cardElement;
}

const cardList = new Section({
    items: initialCards,
    renderer: (item) => {
        cardList.addItem(createNewCard(item));
    }
}, '.elements');

cardList.renderItems();

const newCard = new Section({
    renderer: (item) => {
        newCard.addItem(createNewCard(item));
    }
}, '.elements');

function createCard(evt) {
    const item = {
        name: placeInput.value,
        link: linkInput.value
    };
    newCard.renderer(item)
    addFormEl.disableButton();
}

const formAdd = new PopupWithForm({
    popupSelector: popupTypeNewCard,
    formSelector: popupTypeContentUsers,
    handleFormSubmit: createCard
});

formAdd.setEventListeners();

const addFormEl = new FormValidator(obj, popupTypeContentUsers);
addFormEl.enableValidation();

const editProfile = new FormValidator(obj, editFormElement);
editProfile.enableValidation();

function openEditPopup() {
    const edit = new Popup(popupTypeEdit);
    edit.openPopup();
    const user = new UserInfo({
        name: profileTitle.textContent,
        job: profileSubtitle.textContent
    });
    user.getUserInfo();
}

function openAddPopup() {
    const add = new Popup(popupTypeNewCard);
    add.openPopup();
}

function formSubmitHandler() {
    const user = new UserInfo({
        name: nameInput.value,
        job: jobInput.value
    });
    user.setUserInfo();
}

const formEdit = new PopupWithForm({
    popupSelector: popupTypeEdit,
    formSelector: editForm,
    handleFormSubmit: formSubmitHandler
});

formEdit.setEventListeners();

openPopupEditButton.addEventListener('click', openEditPopup);

openPopupAddButton.addEventListener('click', openAddPopup);