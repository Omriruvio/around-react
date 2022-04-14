import PopupWithForm from './PopupWithForm';
import React from 'react';
import CurrentUserContext from '../contexts/CurrentUserContext';

export default function EditProfilePopup(props) {
  const { isOpen, onClose, onUpdateUser, buttonText, onPopupClick } = props;
  const [inputs, setInputs] = React.useState({});
  const [validation, setValidation] = React.useState({});
  const [isValid, setIsValid] = React.useState(false);
  const [showError, setShowError] = React.useState(false);
  // const [description, setDescription] = React.useState('');
  const currentUser = React.useContext(CurrentUserContext);

  React.useEffect(() => {
    if (currentUser.name && currentUser.about && isOpen) {
      // setName(currentUser.name);
      // setDescription(currentUser.about);
      setInputs({
        profileFormNameInput: currentUser.name,
        profileFormTitleInput: currentUser.about,
      });
    }
  }, [currentUser, isOpen]);

  const handleSubmit = (event) => {
    event.preventDefault();
    onUpdateUser({ name: inputs['profileFormNameInput'], about: inputs['profileFormTitleInput'] });
  };

  const handleInput = (event) => {
    setInputs({
      ...inputs,
      [event.target.name]: event.target.value,
    });
    setValidation({
      ...validation,
      [event.target.name]: event.target.validationMessage,
    });
  };

  React.useEffect(() => {
    if (true) {
      const isFormValid = !Object.values(validation).some((validity) => Boolean(validity));
      // console.log(`form is ${!isFormValid ? 'not ' : ''}valid`);
      // console.log(`form value is ${inputs.profileFormNameInput} ${inputs.profileFormTitleInput}`);
      setIsValid(isFormValid);
    }
    if (!isValid) setTimeout(() => setShowError(true), 2000);
  }, [inputs]);

  return (
    <div onMouseDown={onPopupClick}>
      <PopupWithForm
        isValid={isValid}
        name="profile"
        title="Edit profile"
        onSubmit={handleSubmit}
        isOpen={isOpen}
        onClose={onClose}
        buttonText={buttonText}
      >
        <input
          onChange={handleInput}
          value={inputs.profileFormNameInput || ''}
          id="name-input"
          type="text"
          className="form__input form__input_type_name"
          name="profileFormNameInput"
          required
          minLength="2"
          maxLength="40"
        />
        <span id="name-input-error" className={`form__input-error ${showError && 'form__input-error_active'}`}>
          {validation.profileFormNameInput}
        </span>
        <input
          onChange={handleInput}
          value={inputs.profileFormTitleInput || ''}
          id="title-input"
          type="text"
          className="form__input form__input_type_title"
          name="profileFormTitleInput"
          required
          minLength="2"
          maxLength="200"
        />
        <span id="title-input-error" className={`form__input-error ${showError && 'form__input-error_active'}`}>
          {validation.profileFormTitleInput}
        </span>
      </PopupWithForm>
    </div>
  );
}
