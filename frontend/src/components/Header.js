import React from 'react';
import Logo from '../images/logo.svg';
import { Link, useLocation } from 'react-router-dom';
import { CurrentUserContext } from '../contexts/CurrentUserContext';

export function Header(props) {

  const user = React.useContext(CurrentUserContext);
  const location = useLocation();

  return (
    <header className="header">
      <img src={Logo} alt="Логотип сайта" className="logo" />
      <div>
        {
          location.pathname === `${props.rout.main}` 
          &&
          <>
            <span className='header__email'>{user.email}</span>
            <Link to={`${props.rout.login}`} onClick={props.exit} className='header__link'>Выйти</Link>
          </> 
          ||
          location.pathname === `${props.rout.login}` 
          &&
          <Link to={`${props.rout.register}`} onClick={props.exit} className='header__link'>Зарегистрироваться</Link>
          ||
          location.pathname === `${props.rout.register}` 
          &&
          <Link to={`${props.rout.login}`} onClick={props.exit} className='header__link'>Войти</Link>
          }
      </div>
    </header>
  )
}