import PopupWithForm from './PopupWithForm';
import React from 'react';

export default function AddPlacePopup(props) {
  const { isOpen, onClose, onAddPlaceSubmit } = props;
  const [cardName, setCardName] = React.useState('');
  const [cardLink, setCardLink] = React.useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    onAddPlaceSubmit({ name: cardName, link: cardLink });
    onClose();
  };

  return (
    <PopupWithForm onSubmit={handleSubmit} name="new-card" title="New place" isOpen={isOpen} onClose={onClose} buttonText="Create">
      <input
        onChange={(event) => setCardName(event.target.value)}
        id="image-title-input"
        type="text"
        className="form__input form__input_type_image-title"
        placeholder="Title"
        name="newCardFormImageTitleInput"
        required
        minLength="1"
        maxLength="30"
      />
      <span id="image-title-input-error" className="form__input-error"></span>
      <input
        onChange={(event) => setCardLink(event.target.value)}
        id="image-link-input"
        type="url"
        className="form__input form__input_type_image-link"
        placeholder="Image link"
        name="newCardFormImageLinkInput"
        required
      />
      <span id="image-link-input-error" className="form__input-error"></span>
    </PopupWithForm>
  );
}
