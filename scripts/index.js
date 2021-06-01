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


function getCard(el) {
    const userElement = userTemplate.querySelector('.elements__element').cloneNode(true);
    const massImage = userElement.querySelector('.elements__image');
    const massTitle = userElement.querySelector('.elements__title');
    const likeButton = userElement.querySelector('.elements__like');
    const deleteButton = userElement.querySelector('.elements__trash');
    likeButton.addEventListener('click', handleLikeIcon);
    deleteButton.addEventListener('click', handleDeleteCard);
    massImage.addEventListener('click', () => handlePreviewPicture(el));
    massImage.alt = el.name;
    massTitle.textContent = el.name;
    massImage.src = el.link;
    return userElement;
}

initialCards.forEach((el) => {
    cardsContainer.append(getCard(el));
});

function createCard(evt) {
    evt.preventDefault();
    const el = {name: placeInput.value, link: linkInput.value};
    cardsContainer.prepend(getCard(el));
    popupTypeContentUsers.reset();
    closePopup(popupTypeNewCard);
}

function openPopup(el) {
    el.classList.add('popup_is-opened');
}

function closePopup(popup) {
    popup.classList.remove('popup_is-opened');
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

openPopupEditButton.addEventListener('click', openEditPopup);

openPopupAddButton.addEventListener('click', openAddPopup);

popupTypeImage.addEventListener('click', () => closePopup(popupTypeImage));

closePopupEditButton.addEventListener('click', () => closePopup(popupTypeEdit));

closePopupAddButton.addEventListener('click', () => closePopup(popupTypeNewCard));

editFormElement.addEventListener('submit', formSubmitHandler);

addFormElement.addEventListener('submit', createCard);


///////////////////////////////////////////////////////////////////////////////////////////

// Олег, добрый день!

// Я не знаю как это реализовать. Только инициализацией карточек через цикл и костыль...



// const userElement = userTemplate.querySelector('.elements__element').cloneNode(true); 
// Целесообразно здесь и во всей программе не производить поиск элемента каждый раз при вызове функции.
// Поиск элемента на странице занимает время и если таких поисков будет очень много, то это может замедлить программу.
// Достаточно один раз найти элемент и записать в переменную в начале файла.
// Далее её можно переиспользовать в этой функции повторно.
// МОЖНО ЛУЧШЕ
// Олег Матюнин
// ревьюер


// Подсказок получить не могу, все сводится к банальщине:

// ""
// Сергей Константинов:male-technologist:
// Речь идёт о том, что element.querySelector() лучше выполнить единожды, а не каждый раз при вызове функции.
// К функциии cloneNode() комментарий отношения не имеет

// ""

// Андрей Зайцев
// Привет. Здесь речь идет о том, что каждый раз, выполняя функцию, у тебя происходит создание переменных.
// Ревьюер же предлагает тебе не запускать процесс создания переменных каждый раз заново, а инициализировать
// их в глобальной области видимости один раз. 

// ""

// Прошу прощения за обращение здесь, другой обратной связи не имею =).