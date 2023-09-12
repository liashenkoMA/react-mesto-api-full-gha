import React from "react";
import { Card } from "./Card.js";
import { CurrentUserContext } from "../contexts/CurrentUserContext.js";
import { CurrentCardsContext } from "../contexts/CurrentCardsContext.js";

export function Main(props) {

  const currentUser = React.useContext(CurrentUserContext);
  const currentCards = React.useContext(CurrentCardsContext);

  return (
    <main className="content">
      <section className="profile" aria-label="Профиль пользователя">
        <div className="profile__content">
          <div className="profile__icon">
            <img src={currentUser.avatar} alt="Аватарка" className="profile__avatar" />
            <button type="button" onClick={props.onEditAvatar} className="profile__edit-avatar-button" aria-label="Редактировать аватар"></button>
          </div>
          <div className="profile__info">
            <div className="profile__person">
              <h1 className="profile__title">{currentUser.name}</h1>
              <button type="button" onClick={props.onEditProfile} className="profile__edit-button" aria-label="Редактировать профиль"></button>
            </div>
            <p className="profile__description">{currentUser.about}</p>
          </div>
        </div>
        <button type="button" onClick={props.onAddPlace} className="profile__button" aria-label="Добавить изображение"></button>
      </section>

      <section className="elements" aria-label="Фотографии пользователя">
        {currentCards.map((card) => (
          <Card key={card._id} card={card} onCardClick={props.onCardClick} currentUser={currentUser} onCardLike={props.onCardLike} onCardDelete={props.onCardDelete} />
        ))}
      </section>
    </main>
  )
}