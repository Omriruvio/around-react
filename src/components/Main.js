import editProfileIcon from '../images/edit-button.svg';
import addNewCardIcon from '../images/add-close-button.svg';
import editAvatarIcon from '../images/edit-pencil.svg';

export default function Main(props) {
  return (
    <main className="content">
      <section className="profile">
        <div className="profile__image">
          <div className="profile__image-overlay">
            <img onClick={props.onEditAvatarClick} src={editAvatarIcon} alt="edit icon" className="profile__edit-icon" />
          </div>
        </div>
        <div className="profile__info">
          <div className="profile__name-wrapper">
            <h1 className="profile__name"> </h1>
            <button onClick={props.onEditProfileClick} type="button" className="button button_type_edit" aria-label="edit">
              <img src={editProfileIcon} alt="pencil icon for editing" />
            </button>
          </div>
          <p className="profile__description"></p>
        </div>
        <button onClick={props.onAddPlaceClick} type="button" className="button button_type_add" aria-label="add">
          <img src={addNewCardIcon} alt="plus symbol for adding new card" className="button__plus-image" />
        </button>
      </section>
      <section className="cards">
        <ul className="cards-list"></ul>
      </section>
    </main>
  );
}
