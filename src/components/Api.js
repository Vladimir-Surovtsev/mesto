export default class Api {
    constructor() {
        this._key = 'fc57bca5-e75f-42a0-83ef-a595f3326172';
        this._then = res => {
            if (res.ok) {
                return res.json();
            }
            return Promise.reject(`Ошибка: ${res.status}`);
        }
    }

    getInitialMe() {
        return fetch('https://mesto.nomoreparties.co/v1/cohort-26/users/me', {
                headers: {
                    authorization: this._key,
                    'Content-Type': 'application/json'
                }
            })
            .then(this._then)
    }

    getInitialCards() {
        return fetch('https://mesto.nomoreparties.co/v1/cohort-26/cards', {
                headers: {
                    authorization: this._key,
                    'Content-Type': 'application/json'
                }
            })
            .then(this._then)
    }

    editeProfile(userName, aboutUser) {
        return fetch('https://mesto.nomoreparties.co/v1/cohort-26/users/me', {
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
        return fetch('https://mesto.nomoreparties.co/v1/cohort-26/cards', {
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
        return fetch(`https://mesto.nomoreparties.co/v1/cohort-26/cards/likes/${id}`, {
            method: 'PUT',
            headers: {
                authorization: this._key,
                'Content-Type': 'application/json'
            }
        })
        .then(this._then)
    }

    deleteLike(id) {
        return fetch(`https://mesto.nomoreparties.co/v1/cohort-26/cards/likes/${id}`, {
            method: 'DELETE',
            headers: {
                authorization: this._key,
                'Content-Type': 'application/json'
            }
        })
        .then(this._then)
    }

    deleteCard(id) {
        return fetch(`https://mesto.nomoreparties.co/v1/cohort-26/cards/${id}`, {
            method: 'DELETE',
            headers: {
                authorization: this._key,
                'Content-Type': 'application/json'
            }
        })
        .then(this._then)
    }

    changeAvatar(avatarLink) {
        return fetch('https://mesto.nomoreparties.co/v1/cohort-26/users/me/avatar', {
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