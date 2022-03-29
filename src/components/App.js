import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';
import React from 'react';

function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState(null);

  const handleCardClick = (card) => setSelectedCard(card);

  const handleEditAvatarClick = () => setIsEditAvatarPopupOpen(true);

  const handleEditProfileClick = () => setIsEditProfilePopupOpen(true);

  const handleAddNewCardClick = () => setIsAddPlacePopupOpen(true);

  const closeAllPopups = () => {
    setIsEditAvatarPopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setSelectedCard(null);
  };

  return (
    <div className="page">
      <PopupWithForm name="profile" title="Edit profile" isOpen={isEditProfilePopupOpen} onClose={closeAllPopups} buttonText="Save">
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
      </PopupWithForm>
      <PopupWithForm name="new-card" title="New place" isOpen={isAddPlacePopupOpen} onClose={closeAllPopups} buttonText="Create">
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
      </PopupWithForm>
      <PopupWithForm name="profile-image" title="Change profile picture" isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups} buttonText="Save">
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
      </PopupWithForm>
      <PopupWithForm name="delete-confirm" title="Are you sure?" onClose={closeAllPopups} buttonText="Yes" />
      <ImagePopup card={selectedCard} onClose={closeAllPopups} />
      <Header />
      <Main
        onEditProfileClick={handleEditProfileClick}
        onAddPlaceClick={handleAddNewCardClick}
        onEditAvatarClick={handleEditAvatarClick}
        onCardClick={handleCardClick}
      />
      <Footer />
    </div>
  );
}

export default App;
