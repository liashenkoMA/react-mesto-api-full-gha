class Api {

  constructor({ baseUrl, headers }) {
    this._baseUrl = baseUrl;
    this._headers = headers;
  }

  _checkResponse(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);
  }

  getUserInfo() {
    return fetch(`${this._baseUrl}/users/me`, {
      headers: this._headers,
      credentials: 'include',
    })
      .then(this._checkResponse)
      .then((result) => {
        return result;
      })
  };

  getInitialCards() {
    return fetch(`${this._baseUrl}/cards`, {
      headers: this._headers,
      credentials: 'include',
    })
      .then(this._checkResponse)
      .then((result) => {
        return result;
      })
  };

  patchUserInfo(name, about) {
    return fetch(`${this._baseUrl}/users/me`, {
      method: 'PATCH',
      headers: this._headers,
      credentials: 'include',
      body: JSON.stringify({
        name: `${name}`,
        about: `${about}`
      })
    })
      .then(this._checkResponse)
  };

  postNewCard(name, link) {
    return fetch(`${this._baseUrl}/cards`, {
      method: 'POST',
      headers: this._headers,
      credentials: 'include',
      body: JSON.stringify({
        name: `${name}`,
        link: `${link}`
      })
    })
      .then(this._checkResponse)
  };

  deleteCard(id) {
    return fetch(`${this._baseUrl}/cards/${id}`, {
      method: 'DELETE',
      credentials: 'include',
      headers: this._headers,
    })
      .then(this._checkResponse)
  };

  putLike(id) {
    return fetch(`${this._baseUrl}/cards/${id}/likes`, {
      method: 'PUT',
      credentials: 'include',
      headers: this._headers,
    })
      .then(this._checkResponse)
  };

  deleteLike(id) {
    return fetch(`${this._baseUrl}/cards/${id}/likes`, {
      method: 'DELETE',
      credentials: 'include',
      headers: this._headers,
    })
      .then(this._checkResponse)
  };

  patchAvatar(avatar) {
    return fetch(`${this._baseUrl}/users/me/avatar`, {
      method: 'PATCH',
      headers: this._headers,
      credentials: 'include',
      body: JSON.stringify({
        avatar: `${avatar}`
      })
    })
      .then(this._checkResponse)
  };
};

export const api = new Api({
  baseUrl: 'https://api.mestomaksim.nomoredomainsicu.ru',
  headers: {
    authorization: 'f1605107-de74-4364-b9cb-272c1e5a2dd9',
    'Content-Type': 'application/json',
  }
});