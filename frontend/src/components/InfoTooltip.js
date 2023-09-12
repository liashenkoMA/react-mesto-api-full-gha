import React from 'react';
import registerOn from '../images/registerOn.svg';
import registerOff from '../images/registerOff.svg';

export function InfoTooltip(props) {

  return (
    <div className={`popup popup_type_info-tooltip ${props.isOpen ? 'popup_opened' : ''}`}>
      <div className="popup__container">
        {props.register ?
          <div className='popup__info'>
            <img className='popup__info-image' src={registerOn} alt="Регистрация успешна" />
            <h2 className='popup__title'>Вы успешно зарегистрировались!</h2>
          </div>
          :
          <div className='popup__info'>
            <img className='popup__info-image' src={registerOff} alt="Что то пошло не так" />
            <h2 className='popup__title'>Что-то пошло не так! Попробуйте ещё раз.</h2>
          </div>
        }
        <button type="button" onClick={props.onClose} className="popup__button-close" aria-label="Закрыть окно"></button>
      </div>
    </div>
  )
}