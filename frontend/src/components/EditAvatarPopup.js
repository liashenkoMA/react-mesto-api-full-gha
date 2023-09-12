import React from "react";
import { PopupWithForm } from "./PopupWithForm";

export function EditAvatarPopup(props) {

  const avatarRef = React.useRef();

  function handleSubmit(e) {
    e.preventDefault();

    props.onUpdateAvatar({
      avatar: avatarRef.current.value,
    });  
  };

  return (
    <PopupWithForm name="edit-avatar" title="Обновить аватар" buttonText="Сохранить аватарку" isOpen={props.isOpen} onClose={props.onClose} onSubmit={handleSubmit}>
    <label className="popup__form-field">
      <input type="url" ref={avatarRef} placeholder="Ссылка на аватарку" id="input-avatar-link"
        className="popup__input popup__input_type_avatar-link" name="avatarLink" required />
      <span className="popup__input-error input-avatar-link-error"></span>
    </label>
    </PopupWithForm>
  )
}