export default class UserInfo {
    constructor({
        nameSelector,
        jobSelector
    }) {
        this._name = document.querySelector(nameSelector);
        this._about = document.querySelector(jobSelector);
    }

    getUserInfo() {
        return {
            name: this._name.textContent,
            about: this._about.textContent
        }
    }

    setUserInfo(formValues) {
        this._name.textContent = formValues.name;
        this._about.textContent = formValues.about;
    }
}