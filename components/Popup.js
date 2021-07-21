export default class Popup {
    constructor(popup) {
        this._popup = popup;
    }

    openPopup() {
        this._popup.classList.add('popup_is-opened');
        document.addEventListener('keydown', this._handleEscClose = (evt) => {
            if (evt.key === 'Escape') {
                this.closePopup();
            }
        });
    }

    closePopup() {
        this._popup.classList.remove('popup_is-opened');
        document.removeEventListener('keydown', this._handleEscClose = (evt) => {
            if (evt.key === 'Escape') {
                this.closePopup();
            }
        });
    }

    _handleClosePopup(evt) {
        if (evt.target.classList.contains('popup__close')) {
            const popup = evt.target.closest('.popup');
            popup.classList.remove('popup_is-opened');
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