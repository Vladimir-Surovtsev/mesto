import Popup from './Popup.js';

export default class PopupWithImage extends Popup {
    constructor(openPopup) {
        super(openPopup);
    }

    openPopup(data) {
        const img = this._popup.querySelector('.popup__image');
        img.src = data.src;
        img.alt = data.alt;
        this._popup.querySelector('.popup__title-image').textContent = data.alt;
        super.openPopup();
    }
}