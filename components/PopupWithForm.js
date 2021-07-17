import Popup from './Popup.js';
import UserInfo from './UserInfo.js';

export default class PopupWithForm extends Popup {
    constructor({
        popupSelector,
        formSelector,
        handleFormSubmit
    }) {
        super(popupSelector);
        this.popupSelector = popupSelector;
        this.formSelector = formSelector;
        this.handleFormSubmit = handleFormSubmit;
    }

    _getInputValues() {
        this._inputList = this.formSelector.querySelectorAll('.form__input');

        this._formValues = {};
        this._inputList.forEach(input => this._formValues[input.name] = input.value);

        return this._formValues;
    }

    closePopup() {
        this.formSelector.reset();
        super.closePopup();
    }

    setEventListeners() {
        this.formSelector.addEventListener('submit', (evt) => {
            evt.preventDefault();
            this.handleFormSubmit(this._getInputValues());
            this.closePopup();
        })
    }
}