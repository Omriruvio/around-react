import editProfileIcon from '../images/edit-button.svg';
import addNewCardIcon from '../images/add-close-button.svg';
import editAvatarIcon from '../images/edit-pencil.svg';
import api from '../utils/api';
import React from 'react';
import Card from './Card';

export default function Main(props) {
  const [user, setUserInfo] = React.useState({});
  const [cards, loadCards] = React.useState([]);
  React.useEffect(() => {
    api
      .init()
      .then(([cards, user]) => {
        setUserInfo(user);
        loadCards(cards);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <main className="content">
      <section className="profile">
        <div className="profile__image" style={{ backgroundImage: `url(${user.avatar})` }}>
          <div className="profile__image-overlay">
            <img onClick={props.onEditAvatarClick} src={editAvatarIcon} alt="edit icon" className="profile__edit-icon" />
          </div>
        </div>
        <div className="profile__info">
          <div className="profile__name-wrapper">
            <h1 className="profile__name">{user.name}</h1>
            <button onClick={props.onEditProfileClick} type="button" className="button button_type_edit" aria-label="edit">
              <img src={editProfileIcon} alt="pencil icon for editing" />
            </button>
          </div>
          <p className="profile__description">{user.about}</p>
        </div>
        <button onClick={props.onAddPlaceClick} type="button" className="button button_type_add" aria-label="add">
          <img src={addNewCardIcon} alt="plus symbol for adding new card" className="button__plus-image" />
        </button>
      </section>
      <section className="cards">
        <ul className="cards-list">
          {cards.map((card) => {
            return <Card key={card._id} card={card} />;
          })}
        </ul>
      </section>
    </main>
  );
}
