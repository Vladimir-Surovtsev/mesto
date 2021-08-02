import './pages/index.css';

import {
    editFormElement,
    popupTypeEdit,
    profile,
    nameInput,
    jobInput,
    placeInput,
    linkInput,
    popupTypeNewCard,
    popupTypeImage,
    popupTypeAvatar,
    popupTypeAccept,
    acceptBtn,
    editBtn,
    addBtn,
    avatarBtn,
    obj
} from './utils/constants.js';

import Api from './components/Api.js';
import Card from './components/Card.js';
import Section from './components/Section.js';
import FormValidator from './components/FormValidator.js';
import UserInfo from './components/UserInfo.js';
import PopupWithForm from './components/PopupWithForm.js';
import PopupWithImage from './components/PopupWithImage.js';
import Popup from './components/Popup.js';

const api = new Api();
const closeEdit = new Popup(popupTypeEdit);

// function toggleLike(id, realLike) {}

function createNewCard(item, myId) {
    const card = new Card(item, '#user', handleCardClick, handleAccept);
    const cardElement = card.generateCard(myId);
    const id = card.idCard();
    cardElement.querySelector('.elements__like').addEventListener('click', () => {
        const realLike = item.likes.length;
        if (cardElement.querySelector('.elements__like_active') !== null) {
            api.addLike(id);
            cardElement.querySelector('.elements__like-counter').textContent = realLike + 1;
        } else {
            api.deleteLike(id);
                cardElement.querySelector('.elements__like-counter').textContent = (realLike);
        }
    });
    return cardElement;
}

api.getInitialMe()
    .then((data) => {
        const myId = data._id;

        const userElement = document
            .querySelector('#about')
            .content
            .cloneNode(true);
        userElement.querySelector('.profile__image').src = data.avatar;
        userElement.querySelector('.profile__title').textContent = data.name;
        userElement.querySelector('.profile__subtitle').textContent = data.about;
        profile.prepend(userElement);

        const formEdit = new PopupWithForm(popupTypeEdit);
        document.querySelector('.profile__edit-button').addEventListener('click', openEditPopup);

        function openEditPopup() {
            const user = new UserInfo({
                nameSelector: '.profile__title',
                jobSelector: '.profile__subtitle'
            });

            formEdit.openPopup();
            formEdit.setEventListeners();
            const userInfo = user.getUserInfo();
            nameInput.value = userInfo.name;
            jobInput.value = userInfo.job;

            const editProfile = new FormValidator(obj, editFormElement);
            editProfile.enableValidation();
            popupTypeEdit.addEventListener('submit', (evt) => {
                evt.preventDefault();
                editBtn.textContent = 'Сохранение...';
                user.setUserInfo({
                    name: nameInput.value,
                    job: jobInput.value
                });
                api.editeProfile(nameInput.value, jobInput.value)
                    .catch((err) => {
                        console.log(err);
                    })
                    .finally(() => {
                        editBtn.textContent = 'Сохранить';
                        closeEdit.closePopup();
                    })
            });
        }

        api.getInitialCards()
            .then((data) => {
                const cardsArr = data.map(item => {
                    const container = {};
                    container.name = item.name;
                    container.link = item.link;
                    container.likes = item.likes;
                    container._id = item._id;
                    container.ownerId = item.owner._id;
                    container.myId = myId;
                    return container;
                })

                const cardList = new Section({
                    items: cardsArr,
                    renderer: (item) => {
                        cardList.addItem(createNewCard(item));
                    }
                }, '.elements');
                cardList.renderItems();

            })
            .catch((err) => {
                console.log(err);
            })

        const formAdd = new PopupWithForm(popupTypeNewCard);
        document.querySelector('.profile__add-button').addEventListener('click', openAddPopup);

        function openAddPopup() {
            formAdd.openPopup();
        }

        const addFormEl = new FormValidator(obj, popupTypeNewCard);
        addFormEl.enableValidation();
        formAdd.setEventListeners();

        popupTypeNewCard.addEventListener('submit', (evt) => {
            evt.preventDefault();
            addBtn.textContent = 'Сохранение...';
            api.initialNewCard(placeInput.value, linkInput.value)
                .then(data => {
                    document.querySelector('.elements').prepend(createNewCard(data));
                })
                .catch((err) => {
                    console.log(err);
                })
                .finally(() => {
                    addBtn.textContent = 'Создать';
                    addFormEl.disableButton();
                    formAdd.closePopup();
                })
        });
    })
    .then(() => {
        const change = new PopupWithForm(popupTypeAvatar);
        document.querySelector('.profile__image').addEventListener('click', openAvatarPopup);
        change.setEventListeners();

        const validation = new FormValidator(obj, popupTypeAvatar);
        validation.enableValidation();

        function openAvatarPopup() {
            change.openPopup();
        }

        document.querySelector('.popup__avatar-button').addEventListener('click', addNewAvatar);

        function addNewAvatar() {
            avatarBtn.textContent = 'Сохранение...';
            const avatarLink = document.querySelector('#avatar-link-input').value;
            api.changeAvatar(avatarLink)
                .then(url => {
                    document.querySelector('.profile__image').src = url.avatar;
                })
                .catch((err) => {
                    console.log(err);
                })
                .finally(() => {
                    avatarBtn.textContent = 'Сохранить';
                    validation.disableButton();
                    change.closePopup();
                });
        }
    })
    .catch((err) => {
        console.log(err);
    })

const preview = new PopupWithImage(popupTypeImage);
preview.setEventListeners();

function handleCardClick(data) {
    preview.openPopup(data, popupTypeImage);
}

const accept = new PopupWithForm(popupTypeAccept);
accept.setEventListeners();

function handleAccept(el, id) {
    accept.openPopup(popupTypeAccept);
    acceptBtn.addEventListener('click', () => {
        el.remove();
        api.deleteCard(id);
        accept.closePopup();
    });
}