import Popup from './Popup.js';
import {
    popupImage,
    popupTitleImage
} from '../utils/constants.js';

export default class PopupWithImage extends Popup {
    constructor(data, openPopup) {
        super(openPopup);
        this._title = data.alt;
        this._image = data.src;
    }

    openPopup() {
        popupImage.src = this._image;
        popupImage.alt = this._title;
        popupTitleImage.textContent = this._title;
        super.openPopup();
    }
}