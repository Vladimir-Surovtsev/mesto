import Popup from './Popup.js';

export default class PopupWithForm extends Popup {
    constructor(
        popup
    ) {
        super(popup);
        this._form = this._popup.querySelector('.popup__form');
    }

    _getInputValues() {
        this._inputList = this._form.querySelectorAll('.popup__input');

        this._formValues = {};
        this._inputList.forEach(input => this._formValues[input.name] = input.value);
        return this._formValues;
    }

    closePopup() {
        this._form.reset();
        super.closePopup();
    }
}