import editProfileIcon from '../images/edit-button.svg';
import addNewCardIcon from '../images/add-close-button.svg';
import editAvatarIcon from '../images/edit-pencil.svg';
import api from '../utils/api';
import React, { useContext } from 'react';
import Card from './Card';
import CurrentUserContext from '../contexts/CurrentUserContext';

export default function Main(props) {
  const [cards, setCards] = React.useState([]);
  const currentUser = useContext(CurrentUserContext);

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

  React.useEffect(() => {
    api
      .getInitialCards()
      .then((cards) => {
        setCards(cards);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <main className="content">
      <section className="profile">
        <div className="profile__image" style={{ backgroundImage: `url(${currentUser.avatar})` }}>
          <div className="profile__image-overlay">
            <img onClick={props.onEditAvatarClick} src={editAvatarIcon} alt="edit icon" className="profile__edit-icon" />
          </div>
        </div>
        <div className="profile__info">
          <div className="profile__name-wrapper">
            <h1 className="profile__name">{currentUser.name}</h1>
            <button onClick={props.onEditProfileClick} type="button" className="button button_type_edit" aria-label="edit">
              <img src={editProfileIcon} alt="pencil icon for editing" />
            </button>
          </div>
          <p className="profile__description">{currentUser.about}</p>
        </div>
        <button onClick={props.onAddPlaceClick} type="button" className="button button_type_add" aria-label="add">
          <img src={addNewCardIcon} alt="plus symbol for adding new card" className="button__plus-image" />
        </button>
      </section>
      <section className="cards">
        <ul className="cards-list">
          {cards.map((card) => {
            return (
              <Card key={card._id} card={card} onCardClick={props.onCardClick} onCardDelete={handleCardDeleteClick} onCardLike={handleCardLike} />
            );
          })}
        </ul>
      </section>
    </main>
  );
}
