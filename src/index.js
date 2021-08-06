import './pages/index.css';

import {
    popupTypeEdit,
    profileTitle,
    profileSubtitle,
    profileEditBtn,
    nameInput,
    jobInput,
    addButton,
    popupTypeNewCard,
    popupTypeImage,
    popupTypeAvatar,
    popupTypeAccept,
    acceptBtn,
    editBtn,
    addBtn,
    avatarBtn,
    avatar,
    likesCounterSelector,
    obj
} from './utils/constants.js';

import Api from './components/Api.js';
import Card from './components/Card.js';
import Section from './components/Section.js';
import FormValidator from './components/FormValidator.js';
import UserInfo from './components/UserInfo.js';
import PopupWithForm from './components/PopupWithForm.js';
import PopupWithImage from './components/PopupWithImage.js';

const user = new UserInfo({
    nameSelector: '.profile__title',
    jobSelector: '.profile__subtitle'
});

function createNewCard(item, myId) {
    const card = new Card(item, '#card', handleCardClick, handleAccept, handleLikeClick);
    const cardElement = card.generateCard(myId);
    return cardElement;
}

const api = new Api();

Promise.all([api.getInitialMe(), api.getInitialCards()])
    .then(([userData, cardData]) => {
        console.log(userData)
        const myId = userData._id;
        avatar.src = userData.avatar;
        profileTitle.textContent = userData.name;
        profileSubtitle.textContent = userData.about;

        const cardsArr = cardData.reverse().map(item => {
            const container = {};
            container.name = item.name;
            container.link = item.link;
            container.likes = item.likes;
            container._id = item._id;
            container.ownerId = item.owner._id;
            container.myId = myId;
            return container;
        });

        const cardList = new Section({
            items: cardsArr,
            renderer: (item) => {
                cardList.addItem(createNewCard(item));
            }
        }, '.elements');

        cardList.renderItems();
    })
    .then(() => {

        const formEdit = new PopupWithForm(popupTypeEdit, formSubmitHandler);

        profileEditBtn.addEventListener('click', openEditPopup);

        function openEditPopup() {
            formEdit.openPopup();
            formEdit.setEventListeners();
            const userInfo = user.getUserInfo();
            nameInput.value = userInfo.name;
            jobInput.value = userInfo.job;
        }

        function formSubmitHandler(values) {
            editBtn.textContent = 'Сохранение...';

            api.editeProfile(values.name, values.job)
                .then(() => {
                    user.setUserInfo(
                        values
                    );
                    formEdit.closePopup();
                })
                .catch((err) => {
                    console.log(err);
                })
                .finally(() => {
                    editBtn.textContent = 'Сохранить';
                });
        }

    })
    .catch((err) => {
        console.log(err);
    })

const editFormEl = new FormValidator(obj, popupTypeEdit);
editFormEl.enableValidation();

const formAdd = new PopupWithForm(popupTypeNewCard, formSubmitHandler);

addButton.addEventListener('click', openAddPopup);

function openAddPopup() {
    formAdd.setEventListeners();
    formAdd.openPopup();
}

const addFormEl = new FormValidator(obj, popupTypeNewCard);
addFormEl.enableValidation();

function formSubmitHandler(values) {
    addBtn.textContent = 'Сохранение...';
    api.initialNewCard(
            values.place, values.image
        )
        .then(item => {
            const cardList = new Section({
                items: {
                    item
                },
                renderer: (item) => {
                    cardList.addItem(createNewCard(item));
                }
            }, '.elements');

            cardList.addItem(createNewCard(item));
            formAdd.closePopup();
        })
        .catch((err) => {
            console.log(err);
        })
        .finally(() => {
            addBtn.textContent = 'Создать';
            addFormEl.disableButton();
        });
}

const avatarUserPopup = new PopupWithForm(popupTypeAvatar);
avatar.addEventListener('click', openAvatarPopup);
avatarUserPopup.setEventListeners();

const validation = new FormValidator(obj, popupTypeAvatar);
validation.enableValidation();

function openAvatarPopup() {
    avatarUserPopup.openPopup();
}

document.querySelector('.popup__avatar-button').addEventListener('click', addNewAvatar);

function addNewAvatar() {
    avatarBtn.textContent = 'Сохранение...';
    const avatarLink = document.querySelector('#avatar-link-input').value;
    api.changeAvatar(avatarLink)
        .then(url => {
            avatar.src = url.avatar;
            avatarUserPopup.closePopup();
        })
        .catch((err) => {
            console.log(err);
        })
        .finally(() => {
            avatarBtn.textContent = 'Сохранить';
            validation.disableButton();
        });
}

const preview = new PopupWithImage(popupTypeImage);
preview.setEventListeners();

function handleCardClick(data) {
    preview.openPopup(data, popupTypeImage);
}

const accept = new PopupWithForm(popupTypeAccept);
accept.setEventListeners();

function handleLikeClick(cardElement, realLike, id) {
    if (cardElement.querySelector('.elements__like_active') !== null) {
        api.addLike(id)
            .then(() => {
                cardElement.querySelector(likesCounterSelector).textContent = realLike + 1;
            })
            .catch((err) => {
                console.log(err);
            })
    } else {
        api.deleteLike(id)
            .then(() => {
                cardElement.querySelector(likesCounterSelector).textContent = realLike;
            })
            .catch((err) => {
                console.log(err);
            })
    }
}

function handleAccept(el, id) {
    accept.openPopup(popupTypeAccept);
    acceptBtn.addEventListener('click', () => {
        api.deleteCard(id)
            .then(() => {
                el.remove();
                accept.closePopup();
            })
            .catch((err) => {
                console.log(err);
            })
    });
}