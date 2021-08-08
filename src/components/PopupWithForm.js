import Popup from './Popup.js';

export default class PopupWithForm extends Popup {
    constructor(
        popup,
        formEditSubmitHandler,
        formAddSubmitHandler
    ) {
        super(popup);
        this._popup = popup;
        this._form = this._popup.querySelector('.popup__form');
        this.formEditSubmitHandler = formEditSubmitHandler;
        this.formAddSubmitHandler = formAddSubmitHandler;
    }

    _getInputValues() {
        this._inputList = this._form.querySelectorAll('.popup__input');

        this._formValues = {};
        this._inputList.forEach(input => this._formValues[input.name] = input.value);
        return this._formValues;
    }

    setEventListeners() {
        this._form.addEventListener('submit', (evt) => {
            evt.preventDefault();
            if (this._form.name === 'add-content-users') {
                this.formAddSubmitHandler(this._getInputValues());
            } else {
                this.formEditSubmitHandler(this._getInputValues());
            }
        });
        super.setEventListeners();
    }

    closePopup() {
        this._form.reset();
        super.closePopup();
    }
}