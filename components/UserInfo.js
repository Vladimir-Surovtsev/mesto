import {
    nameInput,
    jobInput,
    profileTitle,
    profileSubtitle
} from '../utils/constants.js';

export default class UserInfo {
    constructor(user) {
        this.name = user.name;
        this.job = user.job;
    }

    getUserInfo() {
        nameInput.value = this.name;
        jobInput.value = this.job;
    }

    setUserInfo() {
        profileTitle.textContent = this.name;
        profileSubtitle.textContent = this.job;
    }
}