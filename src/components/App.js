import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';
import React, { useEffect } from 'react';
import api from '../utils/api';
import CurrentUserContext from '../contexts/CurrentUserContext';
import EditProfilePopup from './EditProfilePopup';
import EditAvatarPopup from './EditAvatarPopup';
import AddPlacePopup from './AddPlacePopup';

function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState(null);
  const [currentUser, setCurrentUser] = React.useState({});
  const [cards, setCards] = React.useState([]);

  const handleCardClick = (card) => setSelectedCard(card);

  const handleEditAvatarClick = () => setIsEditAvatarPopupOpen(true);

  const handleEditProfileClick = () => setIsEditProfilePopupOpen(true);

  const handleAddNewCardClick = () => setIsAddPlacePopupOpen(true);

  const handleUpdateAvatar = (url) => {
    api
      .updateUserImage(url)
      .then((user) => setCurrentUser(user))
      .catch((err) => console.log(err));
  };

  const handleUpdateUser = ({ name, about }) => {
    api
      .updateUserInfo({ name, about })
      .then((user) => setCurrentUser(user))
      .catch((err) => console.log(err));
  };

  const handleAddPlaceSubmit = ({ name, link }) => {
    api
      .submitNewCard({ name, link })
      .then((card) => setCards([card, ...cards]))
      .catch((err) => console.log(err));
  };

  const handleCardLike = (card, isLiked) => {
    api
      .handleLikeCardStatus(card._id, isLiked)
      .then((newCard) => {
        setCards((state) => state.map((currentCard) => (currentCard._id === card._id ? newCard : currentCard)));
      })
      .catch((err) => console.log(err));
  };

  const handleCardDeleteClick = ({ _id: id }) => {
    api
      .deleteCard(id)
      .then(() => {
        const filteredCards = cards.filter((card) => card._id !== id);
        setCards(filteredCards);
      })
      .catch((err) => console.log(err));
  };

  const closeAllPopups = () => {
    setIsEditAvatarPopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setSelectedCard(null);
  };

  useEffect(() => {
    api
      .init()
      .then(([cards, user]) => {
        setCurrentUser(user);
        setCards(cards);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="page">
        <EditProfilePopup onUpdateUser={handleUpdateUser} isOpen={isEditProfilePopupOpen} onClose={closeAllPopups} />
        <AddPlacePopup onAddPlaceSubmit={handleAddPlaceSubmit} isOpen={isAddPlacePopupOpen} onClose={closeAllPopups} />
        <EditAvatarPopup onUpdateAvatar={handleUpdateAvatar} isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups} />
        <PopupWithForm name="delete-confirm" title="Are you sure?" onClose={closeAllPopups} buttonText="Yes" />
        <ImagePopup card={selectedCard} onClose={closeAllPopups} />
        <Header />
        <Main
          onEditProfileClick={handleEditProfileClick}
          onAddPlaceClick={handleAddNewCardClick}
          onEditAvatarClick={handleEditAvatarClick}
          onCardClick={handleCardClick}
          cards={cards}
          onCardLike={handleCardLike}
          onCardDelete={handleCardDeleteClick}
        />
        <Footer />
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
