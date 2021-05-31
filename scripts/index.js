const popups = document.querySelector('.popups');
const openPopupEditButton = document.querySelector('.profile__edit-button');
const openPopupAddButton = document.querySelector('.profile__add-button');
const profileTitle = document.querySelector('.profile__title');
const profileSubtitle = document.querySelector('.profile__subtitle');

const editFormElement = popups.querySelector('#editForm');
const addFormElement = popups.querySelector('#addDiv');
const popupTypeContentUsers = popups.querySelector('#addForm');

const popupTypeEdit = popups.querySelector('.popup_type_edit');
const closePopupEditButton = popupTypeEdit.querySelector('.popup__close');
const nameInput = popupTypeEdit.querySelector('.popup__value_text_name');
const jobInput = popupTypeEdit.querySelector('.popup__value_text_job');

const popupTypeNewCard = popups.querySelector('.popup_type_new-card');
const closePopupAddButton = popupTypeNewCard.querySelector('.popup__close');
const placeInput = popupTypeNewCard.querySelector('.popup__value_text_place');
const linkInput = popupTypeNewCard.querySelector('.popup__value_text_image-link');

const popupTypeImage = popups.querySelector('.popup_type_image');
const popupImage = popupTypeImage.querySelector('.popup__image');
const popupTitleImage = popupTypeImage.querySelector('.popup__title-image');


function createCard(evt) {
    evt.preventDefault();
    const el = {name: placeInput.value, link: linkInput.value};
    cardsContainer.prepend(fillCards(el));
    popupTypeContentUsers.reset();
    closePopup(evt);
}

function openPopup(el) {
    el.classList.add('popup_is-opened');
}

function closePopup(evt) {
    const eventTarget = evt.target;
    eventTarget.closest('.popup').classList.remove('popup_is-opened');
}

function openEditPopup() {
    nameInput.value = profileTitle.textContent;
    jobInput.value = profileSubtitle.textContent;
    openPopup(popupTypeEdit);
}

function openAddPopup() {
    openPopup(popupTypeNewCard);
}

function formSubmitHandler(evt) {
    evt.preventDefault();
    profileTitle.textContent = nameInput.value;
    profileSubtitle.textContent = jobInput.value;
    closePopup(evt);
}

cardsContainer.addEventListener('click', function (evt) {
    const eventTarget = evt.target;
    if (eventTarget.classList == 'elements__trash') {
        eventTarget.closest('.elements__element').remove();
    }
    if (eventTarget.classList == 'elements__like') {
        eventTarget.classList.add('elements__like_active');
    }
    if (eventTarget.classList == 'elements__image') {
        popupImage.setAttribute('src', eventTarget.src);
        popupImage.setAttribute('alt', eventTarget.alt);
        popupTitleImage.textContent = eventTarget.alt;
        openPopup(popupTypeImage);
    }
});

openPopupEditButton.addEventListener('click', openEditPopup);

openPopupAddButton.addEventListener('click', openAddPopup);

popupTypeImage.addEventListener('click', closePopup);

closePopupEditButton.addEventListener('click', closePopup);

closePopupAddButton.addEventListener('click', closePopup);

editFormElement.addEventListener('submit', formSubmitHandler);

addFormElement.addEventListener('submit', createCard);