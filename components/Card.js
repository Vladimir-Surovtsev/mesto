export default class Card {
    constructor(data, cardSelector, handleCardClick) {
        this._name = data.name;
        this._link = data.link;
        this._cardSelector = cardSelector;
        this.handleCardClick = handleCardClick;
    }

    _getTemplate() {
        const cardElement = document
            .querySelector(`${ this._cardSelector }`)
            .content
            .querySelector('.elements__element')
            .cloneNode(true);
        return cardElement;
    }

    generateCard() {
        this._element = this._getTemplate();

        this._element.querySelector('.elements__title').textContent = this._name;
        this._element.querySelector('.elements__image').src = this._link;
        this._element.querySelector('.elements__image').alt = this._name;
        this._setEventListeners();

        return this._element;
    }

    _setEventListeners() {
        this._element.querySelector('.elements__like').addEventListener('click', () => {
            this._handleLikeIcon();
        });
        this._element.querySelector('.elements__trash').addEventListener('click', () => {
            this._handleDeleteCard();
        });
        this._element.querySelector('.elements__image').addEventListener('click', () => {
            this.handleCardClick(this._element.querySelector('.elements__image'));
        });
    }

    _handleLikeIcon() {
        this._element.querySelector('.elements__like').classList.toggle('elements__like_active');
    }

    _handleDeleteCard() {
        this._element.remove();
    }
}