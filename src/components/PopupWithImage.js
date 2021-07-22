import Popup from './Popup.js';

export default class PopupWithImage extends Popup {
    constructor(openPopup) {
        super(openPopup);
    }

    openPopup(data) {
        this._popup.querySelector('.popup__image').src = data.src;
        this._popup.querySelector('.popup__image').alt = data.alt;
        this._popup.querySelector('.popup__title-image').textContent = data.alt;
        super.openPopup();
    }
}