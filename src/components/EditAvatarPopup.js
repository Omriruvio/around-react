import PopupWithForm from './PopupWithForm';
import React from 'react';

export default function EditAvatarPopup(props) {
  const imageInput = React.createRef();
  const { isOpen, onClose, onUpdateAvatar } = props;

  const handleSubmit = (event) => {
    event.preventDefault();
    onUpdateAvatar(imageInput.current.value);
    imageInput.current.value = '';
    onClose();
  };

  return (
    <PopupWithForm onSubmit={handleSubmit} name="profile-image" title="Change profile picture" isOpen={isOpen} onClose={onClose} buttonText="Save">
      <input
        ref={imageInput}
        id="profile-image-input"
        type="url"
        className="form__input form__input_type_profile-image"
        placeholder="Link to new profile image"
        name="profileImageUrlInput"
        required
        minLength="1"
      />
      <span id="profile-image-input-error" className="form__input-error"></span>
    </PopupWithForm>
  );
}
