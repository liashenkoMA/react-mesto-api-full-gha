import { useContext } from "react";
import { CurrentUserContext } from '../contexts/CurrentUserContext';

export function Card({card, onCardClick, onCardDelete, onCardLike}) {

  const currentUser = useContext(CurrentUserContext);

  const isOwn = card.owner === currentUser._id;
  const isLike = card.likes.some(i => i === currentUser._id);
  const cardLikeButtonClassName = (
    `element__button ${isLike && 'element__button_type_active'}`
  );

  function handleClick() {
    onCardClick(card);
  };

  function handleLikeClick() {
    onCardLike(card);
  };

  function handleDeleteCard() {
    onCardDelete(card);
  };

  return (
    <div className="element">
    {isOwn && <button type="button" onClick={handleDeleteCard} className="element__trash" aria-label="Удалить карточку"></button>}
    <img src={card.link} onClick={handleClick} alt={card.name} className="element__img" />
    <div className="element__info">
      <h2 className="element__title">{card.name}</h2>
      <div className="element__likes">
        <button type="button" className={cardLikeButtonClassName} aria-label="Мне нравится" onClick={handleLikeClick}></button>
        <span className="element__like">{card.likes.length}</span>
      </div>
    </div>
  </div>
  );
}