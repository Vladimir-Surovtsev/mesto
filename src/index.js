import '../pages/index.css';

import {
    initialCards,
    editFormElement,
    popupTypeContentUsers,
    popupTypeEdit,
    nameInput,
    jobInput,
    popupTypeNewCard,
    openPopupEditButton,
    openPopupAddButton,
    popupTypeImage,
    obj
} from '../utils/constants.js';

import Card from '../components/Card.js';
import Section from '../components/Section.js';
import FormValidator from '../components/FormValidator.js';
import UserInfo from '../components/UserInfo.js';
import PopupWithForm from '../components/PopupWithForm.js';
import PopupWithImage from '../components/PopupWithImage.js';
import Popup from '../components/Popup.js';

function createNewCard(item) {
    const card = new Card(item, '#user', handleCardClick);
    const cardElement = card.generateCard();
    return cardElement;
}

const cardList = new Section({
    items: initialCards.reverse(),
    renderer: (item) => {
        cardList.addItem(createNewCard(item));
    }
}, '.elements');

cardList.renderItems();

const set = new Popup(popupTypeImage);
set.setEventListeners();

function handleCardClick(data) {
    const preview = new PopupWithImage(data, popupTypeImage);
    preview.openPopup();
}

const formAdd = new PopupWithForm(popupTypeNewCard, createCard);

function createCard(formValues) {
    cardList.addItem(createNewCard({
        name: formValues.place,
        link: formValues.image
    }));
    addFormEl.disableButton();
    formAdd.closePopup();
}

function openAddPopup() {
    formAdd.openPopup();
}

formAdd.setEventListeners();

const addFormEl = new FormValidator(obj, popupTypeContentUsers);
addFormEl.enableValidation();

const editProfile = new FormValidator(obj, editFormElement);
editProfile.enableValidation();

const user = new UserInfo({
    nameSelector: '.profile__title',
    jobSelector: '.profile__subtitle'
});

function openEditPopup() {
    formEdit.openPopup();
    const userInfo = user.getUserInfo();

    function editeInputs(userInfo) {
        nameInput.value = userInfo.name;
        jobInput.value = userInfo.job;
    }
    editeInputs(userInfo);
}

const formEdit = new PopupWithForm(popupTypeEdit, closeEditPopup);

function closeEditPopup(formValues) {
    user.setUserInfo(formValues);
    formEdit.closePopup();
}

formEdit.setEventListeners();

openPopupEditButton.addEventListener('click', openEditPopup);

openPopupAddButton.addEventListener('click', openAddPopup);