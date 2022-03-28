import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';
import React from 'react';
// import './App.css';

function App() {
  const [isEditProfilePopupOpen, setEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setEditAvatarPopupOpen] = React.useState(false);
  const [isPreviewPopupOpen, setPreviewPopupOpen] = React.useState(false);

  const handleEditAvatarClick = () => {
    setEditAvatarPopupOpen(true);
  };
  const handleEditProfileClick = () => {
    setEditProfilePopupOpen(true);
  };
  const handleAddNewCardClick = () => {
    setAddPlacePopupOpen(true);
  };
  const handleOpenPreviewClick = () => {};
  const closeAllPopups = () => {
    setEditAvatarPopupOpen(false);
    setEditProfilePopupOpen(false);
    setAddPlacePopupOpen(false);
    setPreviewPopupOpen(false);
  };

  return (
    <div className="page">
      <PopupWithForm name="profile" title="Edit profile" isOpen={isEditProfilePopupOpen} onClose={closeAllPopups}>
        <input
          defaultValue=" "
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
          defaultValue=" "
          id="title-input"
          type="text"
          className="form__input form__input_type_title"
          name="profileFormTitleInput"
          required
          minLength="2"
          maxLength="200"
        />
        <span id="title-input-error" className="form__input-error"></span>
        <button type="submit" className="button form__submit-button form__submit-button_place_profile">
          Save
        </button>
      </PopupWithForm>
      <PopupWithForm name="new-card" title="New place" isOpen={isAddPlacePopupOpen} onClose={closeAllPopups}>
        <input
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
          id="image-link-input"
          type="url"
          className="form__input form__input_type_image-link"
          placeholder="Image link"
          name="newCardFormImageLinkInput"
          required
        />
        <span id="image-link-input-error" className="form__input-error"></span>
        <button type="submit" className="button form__submit-button form__submit-button_place_new-card">
          Create
        </button>
      </PopupWithForm>
      <PopupWithForm name="profile-image" title="Change profile picture" isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups}>
        <input
          id="profile-image-input"
          type="url"
          className="form__input form__input_type_profile-image"
          placeholder="Link to new profile image"
          name="profileImageUrlInput"
          required
          minLength="1"
        />
        <span id="profile-image-input-error" className="form__input-error"></span>
        <button type="submit" className="button form__submit-button form__submit-button_place_profile-image">
          Save
        </button>
      </PopupWithForm>
      <PopupWithForm name="delete-confirm" title="Are you sure?" onClose={closeAllPopups}>
        <button type="submit" className="button form__submit-button form__submit-button_place_delete-confirm">
          Yes
        </button>
      </PopupWithForm>
      <ImagePopup />
      <Header />
      <Main
        onEditProfileClick={handleEditProfileClick}
        onAddPlaceClick={handleAddNewCardClick}
        onEditAvatarClick={handleEditAvatarClick}
        onCardClick={handleOpenPreviewClick}
      />
      <Footer />
    </div>
  );
}

export default App;
