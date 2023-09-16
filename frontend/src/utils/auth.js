class Auth {

  constructor({ baseUrl, headers }) {
    this._baseUrl = baseUrl;
    this._headers = headers;
  }

  _checkResponse(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(res);
  }

  register(email, password) {
    return fetch(`${this._baseUrl}/signup`, {
      method: 'POST',
      headers: this._headers,
      body: JSON.stringify({
        password: `${password}`,
        email: `${email}`,
      })
    })
      .then(this._checkResponse)
  }

  auth(email, password) {
    return fetch(`${this._baseUrl}/signin`, {
      method: "POST",
      headers: this._headers,
      credentials: 'include',
      body: JSON.stringify({
        password: `${password}`,
        email: `${email}`,
      })
    })
      .then(this._checkResponse)
      .then((data) => {
        localStorage.setItem('jwt', data.token)
        return data;
      })
  };

  tokenCheack(token) {
    return fetch(`${this._baseUrl}/users/me`, {
      method: "GET",
      credentials: 'include',
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`,
      }
    })
      .then(this._checkResponse)
      .then((user) => {
        return user.data;
      })
  };
}

export const auth = new Auth({
  baseUrl: 'http://api.mestomaksim.nomoredomainsicu.ru',
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
    'Access-Control-Allow-Credentials': 'true',
    'Allow-Control-Allow-Origin': '*'
  }
});
