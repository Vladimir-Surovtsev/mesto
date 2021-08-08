export default class Card {
    constructor(data, cardSelector, handleCardClick, handleAccept, handleLikeClick) {
        this._name = data.name;
        this._link = data.link;
        this._id = data._id;
        this._likes = data.likes;
        this._counter = data.likes.length;
        this._ownerId = data.ownerId;
        this._myId = data.myId;
        this._cardSelector = cardSelector;
        this.handleCardClick = handleCardClick;
        this.handleAccept = handleAccept;
        this._handleLikeClick = handleLikeClick;
    }

    getTemplate() {
        const cardElement = document
            .querySelector(`${ this._cardSelector }`)
            .content
            .querySelector('.elements__element')
            .cloneNode(true);
        return cardElement;
    }

    generateCard() {
        this._element = this.getTemplate();

        const image = this._element.querySelector('.elements__image');
        this._element.querySelector('.elements__title').textContent = this._name;
        image.src = this._link;
        image.alt = this._name;
        this._element.querySelector('.elements__like-counter').textContent = this._counter;
        if (this._myId !== this._ownerId) {
            this._element.querySelector('.elements__trash').classList.add('elements__trash_hidden');
        }
        this._likes.forEach((item) => {
            if (item._id === this._myId) {
                this._handleLikeIcon();
            }
        })
        this._setEventListeners();

        return this._element;
    }

    idCard() {
        return this._id;
    }

    _setEventListeners() {
        this._element.querySelector('.elements__like').addEventListener('click', () => {
            this._handleLikeIcon();
            this._handleLikeClick(this._element, this._counter, this._id);
        });
        this._element.querySelector('.elements__trash').addEventListener('click', () => {
            this.handleAccept(this._element, this._id);
        });
        this._element.querySelector('.elements__image').addEventListener('click', () => {
            this.handleCardClick(this._element.querySelector('.elements__image'));
        });
    }

    _handleLikeIcon() {
        this._element.querySelector('.elements__like').classList.toggle('elements__like_active');
    }
}