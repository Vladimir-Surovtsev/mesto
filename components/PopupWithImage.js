import Popup from './Popup.js';
import { popupImage, popupTitleImage } from '../utils/constants.js';

export default class PopupWithImage extends Popup {
    constructor(openPopup) {
        super(openPopup);
    }

    handlePreviewPicture(evt) {
        popupImage.src = evt.target.src;
        popupImage.alt = evt.target.alt;
        popupTitleImage.textContent = evt.target.alt;
        this.openPopup();
    }
}