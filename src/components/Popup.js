export default class Popup {
    constructor(popup) {
        this._popup = popup;
    }

    _handleEscClose(evt) {
        if (evt.key === 'Escape') {
            this.closePopup();
        }
    }

    openPopup() {
        this._popup.classList.add('popup_is-opened');
        document.addEventListener('keydown', (evt) => this._handleEscClose(evt));
    }

    closePopup() {
        this._popup.classList.remove('popup_is-opened');
        document.removeEventListener('keydown', (evt) => this._handleEscClose(evt));
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