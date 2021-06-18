const popups = document.querySelector('.popups');
const openPopupEditButton = document.querySelector('.profile__edit-button');
const openPopupAddButton = document.querySelector('.profile__add-button');
const profileTitle = document.querySelector('.profile__title');
const profileSubtitle = document.querySelector('.profile__subtitle');

const cardsContainer = document.querySelector('.elements');
const userTemplate = document.querySelector('#user').content;

const editFormElement = popups.querySelector('#editForm');
const addFormElement = popups.querySelector('#addDiv');
const popupTypeContentUsers = popups.querySelector('#addForm');

const popupTypeEdit = popups.querySelector('.popup_type_edit');
const nameInput = popupTypeEdit.querySelector('#name-input');
const jobInput = popupTypeEdit.querySelector('#job-input');

const popupTypeNewCard = popups.querySelector('.popup_type_new-card');
const placeInput = popupTypeNewCard.querySelector('#place-input');
const linkInput = popupTypeNewCard.querySelector('#image-link-input');
const popupCreateButton = popupTypeNewCard.querySelector('.popup__create-button');

const popupTypeImage = popups.querySelector('.popup_type_image');
const popupImage = popupTypeImage.querySelector('.popup__image');
const popupTitleImage = popupTypeImage.querySelector('.popup__title-image');

const userElement = userTemplate.querySelector('.elements__element');

function closeByOverlay() {
    const popupList = Array.from(popups.querySelectorAll('.popup'));
    popupList.forEach((popup) => {
        popup.addEventListener('click', function (evt) {
            if (evt.target === evt.currentTarget) {
                closePopup(popup);
            }
        });
    });
}

closeByOverlay();

const closeByEscape = function (evt) {
    if (evt.key === 'Escape') {
        const openedPopup = popups.querySelector('.popup_is-opened');
        closePopup(openedPopup);
    }
}

function openPopup(popup) {
    popup.classList.add('popup_is-opened');
    document.addEventListener('keydown', closeByEscape);
}

function closePopup(popup) {
    popup.classList.remove('popup_is-opened');
    document.removeEventListener('keydown', closeByEscape);
}

function getCard(el) {
    const cardElement = userElement.cloneNode(true);
    const massImage = cardElement.querySelector('.elements__image');
    const massTitle = cardElement.querySelector('.elements__title');
    const likeButton = cardElement.querySelector('.elements__like');
    const deleteButton = cardElement.querySelector('.elements__trash');
    likeButton.addEventListener('click', handleLikeIcon);
    deleteButton.addEventListener('click', handleDeleteCard);
    massImage.addEventListener('click', () => handlePreviewPicture(el));
    massImage.alt = el.name;
    massTitle.textContent = el.name;
    massImage.src = el.link;
    return cardElement;
}

initialCards.forEach((el) => {
    cardsContainer.append(getCard(el));
});

function createCard(evt) {
    evt.preventDefault();
    const el = {
        name: placeInput.value,
        link: linkInput.value
    };
    cardsContainer.prepend(getCard(el));
    popupTypeContentUsers.reset();
    closePopup(popupTypeNewCard);
    popupCreateButton.classList.add('popup__button_disabled');
    popupCreateButton.setAttribute("disabled", "true");
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

function handleLikeIcon(evt) {
    evt.target.classList.toggle('elements__like_active');
}

function handleDeleteCard(evt) {
    evt.target.closest('.elements__element').remove();
}

function handlePreviewPicture(el) {
    popupImage.src = el.link;
    popupImage.alt = el.name;
    popupTitleImage.textContent = el.name;
    openPopup(popupTypeImage);
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