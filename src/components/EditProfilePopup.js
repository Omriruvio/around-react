import PopupWithForm from './PopupWithForm';
import React from 'react';
import CurrentUserContext from '../contexts/CurrentUserContext';

export default function EditProfilePopup(props) {
  const { isOpen, onClose, onUpdateUser } = props;
  const [name, setName] = React.useState('');
  const [description, setDescription] = React.useState('');
  const currentUser = React.useContext(CurrentUserContext);

  React.useEffect(() => {
    setName(currentUser.name);
    setDescription(currentUser.about);
  }, [currentUser]);

  const handleNameChange = (event) => setName(event.target.value);

  const handleTitleChange = (event) => setDescription(event.target.value);

  const handleSubmit = (event) => {
    event.preventDefault();
    onUpdateUser({ name, about: description });
    onClose();
  };

  return (
    <PopupWithForm name="profile" title="Edit profile" onSubmit={handleSubmit} isOpen={isOpen} onClose={onClose} buttonText="Save">
      <input
        onChange={handleNameChange}
        value={name}
        id="name-input"
        type="text"
        className="form__input form__input_type_name"
        name="profileFormNameInput"
        required
        minLength="2"
        maxLength="40"
      />
      <span id="name-input-error" className="form__input-error"></span>
      <input
        onChange={handleTitleChange}
        value={description}
        id="title-input"
        type="text"
        className="form__input form__input_type_title"
        name="profileFormTitleInput"
        required
        minLength="2"
        maxLength="200"
      />
      <span id="title-input-error" className="form__input-error"></span>
    </PopupWithForm>
  );
}
