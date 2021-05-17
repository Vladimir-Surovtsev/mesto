const openPopupEditButton = document.querySelector('.profile__edit-button');
const popup = document.querySelectorAll('.popup');
const closePopupButton = document.querySelectorAll('.popup__close');
const formElement = document.querySelector('#one');
const nameInput = document.querySelector('.popup__value_text_name');
const jobInput = document.querySelector('.popup__value_text_job');
const placeInput = document.querySelector('.popup__value_text_place');
const linkInput = document.querySelector('.popup__value_text_image-link');
const proficonstitle = document.querySelector('.profile__title');
const profileSubtitle = document.querySelector('.profile__subtitle');
const openPopupAddButton = document.querySelector('.profile__add-button');
const popupBigImage = document.querySelectorAll('.elements__popup-big-image');
const kreateButton = document.querySelector('#two');
const trashButton = document.querySelectorAll('.elements__trash');
const popupImage = document.querySelector('.popup__image');
const popupTitleImage = document.querySelector('.popup__title-image');

const initialCards = [{
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

const userTemplate = document.querySelector('#user').content;
const cardsContainer = document.querySelector('.elements');

function createContent() {
    for (let index = 0; index < initialCards.length; index++) {
        const userElement = userTemplate.querySelector('.elements__element').cloneNode(true);
        const massImage = userElement.querySelector('.elements__image');
        const massTitle = userElement.querySelector('.elements__title');
        massImage.src = initialCards[index].link;
        massImage.alt = initialCards[index].name;
        massTitle.textContent = initialCards[index].name;
        cardsContainer.append(userElement);
    }
}

window.onload = createContent;

function kreatePlace(evt) {
    evt.preventDefault();
    const userElement = userTemplate.querySelector('.elements__element').cloneNode(true);
    const massImage = userElement.querySelector('.elements__image');
    const massTitle = userElement.querySelector('.elements__title');
    massImage.src = linkInput.value;
    massImage.alt = placeInput.value;
    massTitle.textContent = placeInput.value;
    cardsContainer.append(userElement);
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

function fillingValue() {
    proficonstitle.textContent = nameInput.value;
    profileSubtitle.textContent = jobInput.value;
}

function openEditPopup() {
    popup[0].classList.add('popup_is-opened');
    nameInput.value = proficonstitle.textContent;
    jobInput.value = profileSubtitle.textContent;
}

function openAddPopup() {
    popup[1].classList.add('popup_is-opened');

}

function closePopup() {
    if (closePopupButton.length > 0) {
        for (let index = 0; index < closePopupButton.length; index++) {
            popup[index].classList.remove("popup_is-opened");
        }
    }
}

function formSubmitHandler(evt) {
    evt.preventDefault();
    fillingValue();
    closePopup();
}

document.addEventListener('click', ({
    target: t
}) => {
    if (t.classList.contains('elements__image')) {
        const index = [...document.querySelectorAll('.elements__image')].indexOf(t);
        const massPopImage = initialCards[index].link;
        popupImage.setAttribute('src', massPopImage);
        popupImage.setAttribute('alt', initialCards[index].name);
        popupTitleImage.textContent = initialCards[index].name;
        popup[2].classList.add('popup_is-opened');
    }
});

closePopupButton.forEach((item) => {
    item.addEventListener('click', closePopup);
});

openPopupEditButton.addEventListener('click', openEditPopup);

openPopupAddButton.addEventListener('click', openAddPopup);

formElement.addEventListener('submit', formSubmitHandler);

kreateButton.addEventListener('submit', kreatePlace);