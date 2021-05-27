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


initialCards.forEach((el) => {
    cardsContainer.insertAdjacentHTML('beforeend', `            <li class="elements__element">
    <img class="elements__image" src="${el.link}" alt="${el.name}">
    <button type="button" class="elements__trash" aria-label="Корзина"></button>
    <div class="elements__body">
        <h2 class="elements__title">${el.name}</h2>
        <button type="button" class="elements__like" aria-label="Нравиться"></button>
    </div>
</li>`)
    return
})