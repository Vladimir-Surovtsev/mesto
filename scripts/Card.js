const popupImage = document.querySelector('.popup__image');
const popupTitleImage = document.querySelector('.popup__title-image');
const popupTypeImage = document.querySelector('.popup_type_image');

import {
    openPopup
} from './index.js';

export default class Card {
    constructor(data, cardSelector) {
        this._name = data.name;
        this._link = data.link;
        this._cardSelector = cardSelector;
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
            this._handlePreviewPicture();
        });
    }

    _handleLikeIcon() {
        this._element.querySelector('.elements__like').classList.toggle('elements__like_active');
    }

    _handleDeleteCard() {
        this._element.remove();
    }

    _handlePreviewPicture() {
        popupImage.src = this._link;
        popupImage.alt = this._name;
        popupTitleImage.textContent = this._name;
        openPopup(popupTypeImage);
    }
}