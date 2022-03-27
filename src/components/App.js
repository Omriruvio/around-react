import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
// import './App.css';

function App() {
  return (
    <div class="page">
      <div class="popup popup_type_profile">
        <div class="popup__window">
          <button type="button" class="popup__close-button popup__close-button_place_profile" aria-label="close"></button>
          <h2 class="popup__title">Edit profile</h2>
          <form class="form form_type_profile" name="profileEditForm" novalidate>
            <input value=" " id="name-input" type="text" class="form__input form__input_type_name" 
              name="profileFormNameInput" required minlength="2" maxlength="40"/>
            <span id="name-input-error" class="form__input-error"></span>
            <input value=" " id="title-input" type="text" class="form__input form__input_type_title" 
              name="profileFormTitleInput" required minlength="2" maxlength="200"/>
            <span id="title-input-error" class="form__input-error"></span>
            <button type="submit" class="button form__submit-button form__submit-button_place_profile">Save</button>
          </form>
        </div>
      </div>
      <div class="popup popup_type_new-card">
        <div class="popup__window">
          <button type="button" class="popup__close-button popup__close-button_place_card" aria-label="close"></button>
          <h2 class="popup__title">New place</h2>
          <form class="form form_type_new-card" name="newCardForm" novalidate>
            <input id="image-title-input" type="text" class="form__input form__input_type_image-title" 
              placeholder="Title" name="newCardFormImageTitleInput" required minlength="1" maxlength="30"/>
            <span id="image-title-input-error" class="form__input-error"></span>
            <input id="image-link-input" type="url" class="form__input form__input_type_image-link" 
              placeholder="Image link" name="newCardFormImageLinkInput" required/>
            <span id="image-link-input-error" class="form__input-error"></span>
            <button type="submit" class="button form__submit-button form__submit-button_place_new-card">Create</button>
          </form>
        </div>
      </div>
      <div class="popup popup_type_preview">
        <div class="popup__window popup__window_type_preview">
          <button type="button" class="popup__close-button popup__close-button_place_preview" aria-label="close"></button>
          <img src=" " alt="preview" class="popup__preview-image" />
          <p class="popup__description"></p>
        </div>
      </div>
      <div class="popup popup_type_profile-image">
        <div class="popup__window">
          <button type="button" class="popup__close-button popup__close-button_place_card" aria-label="close"></button>
          <h2 class="popup__title">Change profile picture</h2>
          <form class="form form_type_profile-image" name="profileImageForm" novalidate>
            <input id="profile-image-input" type="url" class="form__input form__input_type_profile-image" 
              placeholder="Link to new profile image" name="profileImageUrlInput" required minlength="1"/>
            <span id="profile-image-input-error" class="form__input-error"></span>
            <button type="submit" class="button form__submit-button form__submit-button_place_profile-image">Save</button>
          </form>
        </div>
      </div>
      <div class="popup popup_type_delete-confirm">
        <div class="popup__window">
          <button type="button" class="popup__close-button popup__close-button_place_card" aria-label="close"></button>
          <h2 class="popup__title">Are you sure?</h2>
          <form class="form form_type_delete-confirm" name="deleteConfirmForm" novalidate>
            <button type="submit" class="button form__submit-button form__submit-button_place_delete-confirm">Yes</button>
          </form>
        </div>
      </div>
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
