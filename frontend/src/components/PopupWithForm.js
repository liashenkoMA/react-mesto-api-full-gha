import { Popup } from "./Popup"

export function PopupWithForm(props) {
  return (
    <Popup isOpen={props.isOpen} name={props.name} onClose={props.onClose}>
      <h2 className="popup__title">{props.title}</h2>
      <form className="popup__form" name={`${props.name}`} onSubmit={props.onSubmit}>
        {props.children}
        <button type="submit" className="popup__button" aria-label={props.buttonText}>Сохранить</button>
      </form>
    </Popup>
  )
}