export default class Popup {
    constructor(popupSelector) {
        this._popupSelector = popupSelector;
    }

    openPopup() {
        this._popupSelector.classList.add('popup_is-opened');
        this._setEventListeners();
    }

    closePopup() {
        this._popupSelector.classList.remove('popup_is-opened');
    }

    _handleClosePopup(evt) {
        if (evt.target.classList.contains('popup__close')) {
            const popup = evt.target.closest('.popup');
            popup.classList.remove('popup_is-opened');
        }
    }

    _handleEscClose(evt) {
        if (evt.key === 'Escape') {
            this.closePopup();
        }
    }

    _handleCloseByOverlay(evt) {
        if (evt.target === evt.currentTarget) {
            this.closePopup();
        }
    }

    _setEventListeners() {
        document.addEventListener('keydown', (evt) => {
            this._handleEscClose(evt);
        });
        this._popupSelector.addEventListener('click', (evt) => {
            this._handleClosePopup(evt);
            this._handleCloseByOverlay(evt);
        });
        document.removeEventListener('keydown', (evt) => {
            this._handleEscClose(evt);
        });
        this._popupSelector.removeEventListener('click', (evt) => {
            this._handleClosePopup(evt);
            this._handleCloseByOverlay(evt);
        });
    }
}