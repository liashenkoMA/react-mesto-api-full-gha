export function ImagePopup(props) {

  return (
    <div className={`popup popup_type_images-open ${props.card === null ? '' : 'popup_opened'}`}>
      <div className="popup__images-conteiner">
        <button type="button" onClick={props.onClose} className="popup__button-close" aria-label="Закрыть окно"></button>
        <figure className="popup__images">
          <img
            src={props.card === null ? '' : props.card.link}
            alt={props.card === null ? '' : props.card.name}
            className="popup__image"
          />
          <figcaption className="popup__description">
            {props.card === null ? '' : props.card.name}
          </figcaption>
        </figure>
      </div>
    </div>
  )
}