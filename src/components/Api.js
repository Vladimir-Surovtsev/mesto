export default class Api {
    constructor(
        key = 'fc57bca5-e75f-42a0-83ef-a595f3326172',
        baseUrl = 'https://mesto.nomoreparties.co/v1/cohort-26/') {
        this._key = key;
        this._baseUrl = baseUrl;
        this._then = res => {
            if (res.ok) {
                return res.json();
            }
            return Promise.reject(`Ошибка: ${res.status}`);
        }
    }

    getInitialMe() {
        return fetch(this._baseUrl + 'users/me', {
                headers: {
                    authorization: this._key,
                    'Content-Type': 'application/json'
                }
            })
            .then(this._then)
    }

    getInitialCards() {
        return fetch(this._baseUrl + 'cards', {
                headers: {
                    authorization: this._key,
                    'Content-Type': 'application/json'
                }
            })
            .then(this._then)
    }

    editeProfile(userName, aboutUser) {
        return fetch(this._baseUrl + 'users/me', {
                method: 'PATCH',
                headers: {
                    authorization: this._key,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    name: userName,
                    about: aboutUser
                })
            })
            .then(this._then)
    }

    initialNewCard(cardName, cardLink) {
        return fetch(this._baseUrl + 'cards', {
                method: 'POST',
                headers: {
                    authorization: this._key,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    name: cardName,
                    link: cardLink
                })
            })
            .then(this._then)
    }

    addLike(id) {
        return fetch(this._baseUrl + `cards/likes/${id}`, {
                method: 'PUT',
                headers: {
                    authorization: this._key,
                    'Content-Type': 'application/json'
                }
            })
            .then(this._then)
    }

    deleteLike(id) {
        return fetch(this._baseUrl + `cards/likes/${id}`, {
                method: 'DELETE',
                headers: {
                    authorization: this._key,
                    'Content-Type': 'application/json'
                }
            })
            .then(this._then)
    }

    deleteCard(id) {
        return fetch(this._baseUrl + `cards/${id}`, {
                method: 'DELETE',
                headers: {
                    authorization: this._key,
                    'Content-Type': 'application/json'
                }
            })
            .then(this._then)
    }

    changeAvatar(avatarLink) {
        return fetch(this._baseUrl + 'users/me/avatar', {
                method: 'PATCH',
                headers: {
                    authorization: this._key,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    avatar: avatarLink
                })
            })
            .then(this._then)
    }

}