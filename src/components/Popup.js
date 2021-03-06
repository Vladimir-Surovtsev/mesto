import { Esc } from "../utils/constants.js";

export default class Popup {
    constructor(popup) {
        this._popup = popup;
        this._handleEscClose = this._handleEscClose.bind(this)
    }

    openPopup() {
        this._popup.classList.add('popup_is-opened');
        document.addEventListener('keydown', this._handleEscClose);
    }

    closePopup() {
        this._popup.classList.remove('popup_is-opened');
        document.removeEventListener('keydown', this._handleEscClose);
    }

    _handleEscClose(evt) {
        if (evt.key === Esc) {
            this.closePopup();
        }
    }

    _handleClosePopup(evt) {
        if (evt.target.classList.contains('popup__close')) {
            this.closePopup();
        }
    }

    _handleCloseByOverlay(evt) {
        if (evt.target === evt.currentTarget) {
            this.closePopup();
        }
    }

    setEventListeners() {
        this._popup.addEventListener('click', (evt) => {
            this._handleClosePopup(evt);
            this._handleCloseByOverlay(evt);
        });
    }
}