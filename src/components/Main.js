import editProfileIcon from '../images/edit-button.svg';
import addNewCardIcon from '../images/add-close-button.svg';
import editAvatarIcon from '../images/edit-pencil.svg';

export default function Main () {
  return (
    <main class="content">
      <section class="profile">
        <div class="profile__image">
          <div class="profile__image-overlay">
            <img src={editAvatarIcon} alt="edit icon" class="profile__edit-icon" />
          </div>
        </div>
        <div class="profile__info">
          <div class="profile__name-wrapper">
            <h1 class="profile__name"> </h1>
            <button type="button" class="button button_type_edit" aria-label="edit">
              <img src={editProfileIcon} alt="pencil icon for editing" />
            </button>
          </div>
          <p class="profile__description"></p>
        </div>
        <button type="button" class="button button_type_add" aria-label="add">
          <img src={addNewCardIcon} alt="plus symbol for adding new card" class="button__plus-image" />
        </button>
      </section>
      <section class="cards">
        <ul class="cards-list"></ul>
      </section>
    </main>
  )
}