const openPopupEditButton = document.querySelector('.profile__edit-button');
const popups = document.querySelectorAll('.popup');
const closePopupButton = document.querySelectorAll('.popup__close');
const formElement = document.querySelector('#one');
const nameInput = document.querySelector('.popup__value_text_name');
const jobInput = document.querySelector('.popup__value_text_job');
const placeInput = document.querySelector('.popup__value_text_place');
const linkInput = document.querySelector('.popup__value_text_image-link');
const profileTitle = document.querySelector('.profile__title');
const profileSubtitle = document.querySelector('.profile__subtitle');
const openPopupAddButton = document.querySelector('.profile__add-button');
const popupBigImage = document.querySelectorAll('.elements__popup-big-image');
const createButton = document.querySelector('#two');
const trashButton = document.querySelectorAll('.elements__trash');
const popupImage = document.querySelector('.popup__image');
const popupTitleImage = document.querySelector('.popup__title-image');
const popupTypeEdit = document.querySelector('.popup_type_edit');
const popupTypeNewCard = document.querySelector('.popup_type_new-card');
const popupTypeImage = document.querySelector('.popup_type_image');
const popupTypeContentUsers = document.querySelector('.popup_type_content-users');
const userTemplate = document.querySelector('#user').content;
const userElement = userTemplate.querySelector('.elements__element').cloneNode(true);
const massImage = userElement.querySelector('.elements__image');
const massTitle = userElement.querySelector('.elements__title');

function fillCard() {
    massImage.src = linkInput.value;
    massImage.alt = placeInput.value;
    massTitle.textContent = placeInput.value;
    return userElement;
}

function createCard(evt) {
    evt.preventDefault();
    fillCard();
    cardsContainer.prepend(userElement);
    popupTypeContentUsers.reset();
    closePopup();
}

function openPopup(el) {
    el.classList.add('popup_is-opened');
}

function closePopup() {
    if (popups.length > 0) {
        for (let index = 0; index < popups.length; index++) {
            popups[index].classList.remove("popup_is-opened");
        }
    }
}

function openEditPopup() {
    nameInput.value = profileTitle.textContent;
    jobInput.value = profileSubtitle.textContent;
    const el = popupTypeEdit;
    openPopup(el);
}

function openAddPopup() {
    const el = popupTypeNewCard;
    openPopup(el);
}

function formSubmitHandler(evt) {
    evt.preventDefault();
    profileTitle.textContent = nameInput.value;
    profileSubtitle.textContent = jobInput.value;
    closePopup();
}

document.addEventListener('click', ({
    target: t
}) => {
    if (t.classList.contains('elements__like')) {
        const index = [...document.querySelectorAll('.elements__like')].indexOf(t);
        const count = document.querySelectorAll('.elements__like')[index];
        count.classList.toggle('elements__like_active');
    }
});

document.addEventListener('click', ({
    target: t
}) => {
    if (t.classList.contains('elements__trash')) {
        const index = [...document.querySelectorAll('.elements__trash')].indexOf(t);
        const count = document.querySelectorAll('.elements__trash')[index];
        count.closest('.elements__element').remove();
    }
});

document.addEventListener('click', ({
    target: t
}) => {
    if (t.classList.contains('popup__close')) {
        const index = [...document.querySelectorAll('.popup__close')].indexOf(t);
        popups[index].classList.remove('popup_is-opened');
    }
});

document.addEventListener('click', ({
    target: t
}) => {
    if (t.classList.contains('elements__image')) {
        const index = [...document.querySelectorAll('.elements__image')].indexOf(t);
        const massPopImage = initialCards[index].link;
        popupImage.setAttribute('src', massPopImage);
        popupImage.setAttribute('alt', initialCards[index].name);
        popupTitleImage.textContent = initialCards[index].name;
        const el = popupTypeImage;
        openPopup(el);
    }
});

openPopupEditButton.addEventListener('click', openEditPopup);

openPopupAddButton.addEventListener('click', openAddPopup);

formElement.addEventListener('submit', formSubmitHandler);

createButton.addEventListener('submit', createCard);