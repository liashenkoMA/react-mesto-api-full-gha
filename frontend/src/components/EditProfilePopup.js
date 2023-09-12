import React from "react";
import { PopupWithForm } from "./PopupWithForm";
import { CurrentUserContext } from "../contexts/CurrentUserContext";


export function EditProfilePopup(props) {

  const [name, setName] = React.useState('');
  const [description, setDescription] = React.useState('');

  function handleChangeName(e) {
    setName(e.target.value);
  };

  function handleChangeDescription(e) {
    setDescription(e.target.value);
  };

  const currentUser = React.useContext(CurrentUserContext);

  React.useEffect(() => {
    setName(currentUser.name);
    setDescription(currentUser.about);
  }, [currentUser, props.isOpen]);

  function handleSubmit(e) {
    e.preventDefault();

    props.onUpdateUser({
      name,
      about: description,
    });
  };

  React.useEffect(() => {
    if (props.isOpen === false) {
      setName('')
      setDescription('')
    }
  }, [props.isOpen])

  return (
    <PopupWithForm name="edit-profile" title="Редактировать профиль" buttonText="Сохранить изменения" isOpen={props.isOpen} onClose={props.onClose} onSubmit={handleSubmit}>
    <label className="popup__form-field">
      <input type="text" onChange={handleChangeName} value={name || ''} placeholder="Введите имя" id="name" className="popup__input popup__input_type_title"
        name="myName" required minLength="2" maxLength="40" />
      <span className="popup__input-error name-error"></span>
    </label>
    <label className="popup__form-field">
      <input type="text" onChange={handleChangeDescription} value={description || ''} placeholder="Расскажите о себе" id="about"
        className="popup__input popup__input_type_description" name="myDescription" required minLength="2"
        maxLength="200" />
      <span className="popup__input-error about-error"></span>
    </label>
  </PopupWithForm>
  )
}