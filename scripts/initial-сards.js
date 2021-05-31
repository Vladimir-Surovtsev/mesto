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

const cardsContainer = document.querySelector('.elements');
const userTemplate = document.querySelector('#user').content;

function fillCards(el) {
    const userElement = userTemplate.querySelector('.elements__element').cloneNode(true);
    const massImage = userElement.querySelector('.elements__image');
    const massTitle = userElement.querySelector('.elements__title');
    massImage.alt = el.name;
    massTitle.textContent = el.name;
    massImage.src = el.link;
    return userElement;
}

initialCards.forEach((el) => {
    cardsContainer.append(fillCards(el));
});