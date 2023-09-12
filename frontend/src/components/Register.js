import React from "react";
import { Link } from "react-router-dom";

export function Register(props) {

  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  function handleChangeEmail(e) {
    setEmail(e.target.value);
  };

  function handleCgangePassword(e) {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    props.onRegister(email, password);
  }

  return (
    <div className="auth">
      <h2 className="auth__title">Регистрация</h2>
      <form className="auth__form" onSubmit={handleSubmit}>
        <label className="auth__form-field">
            <input type="email" onChange={handleChangeEmail} value={email || ''} placeholder="Email" id="input-email"
              className="auth__input auth__input_type_email" name="email" required />
            <span className="auth__input-error input-email-error"></span>
          </label>
          <label className="auth__form-field">
            <input type="password" onChange={handleCgangePassword} value={password || ''} placeholder="Пароль" id="input-password"
              className="auth__input auth__input_type_password" name="password" required />
            <span className="auth__input-error input-password-error"></span>
          </label>
          <button type="submit" className="auth__button" >Зарегистрироваться</button>
      </form>
      <span className="auth__signin">Уже зарегистрированы? <Link to={props.rout.login} className="auth__signin-link">Войти</Link></span>
  </div>
  )
}