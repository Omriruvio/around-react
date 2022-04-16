import PopupWithForm from './PopupWithForm';
import React from 'react';

export default function AddPlacePopup(props) {
  const { isOpen, onClose, onAddPlaceSubmit, buttonText, onPopupClick } = props;
  // const [cardName, setCardName] = React.useState('');
  // const [cardLink, setCardLink] = React.useState('');
  const [inputs, setInputs] = React.useState({});
  const [validation, setValidation] = React.useState({});
  const [isValid, setIsValid] = React.useState(false);
  // const [showError, setShowError] = React.useState(false);

  React.useEffect(() => {
    setInputs({});
    if (!isOpen) setValidation({});
  }, [isOpen]);

  const handleSubmit = (event) => {
    event.preventDefault();
    onAddPlaceSubmit({ name: inputs.name, link: inputs.link });
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
    if (isOpen) {
      const formIsValid = inputs.link && inputs.title && !Object.values(validation).some((val) => Boolean(val));
      setIsValid(formIsValid || false);
    }
  }, [validation, inputs, isOpen]);

  return (
    <div onMouseDown={onPopupClick}>
      <PopupWithForm
        isValid={isValid}
        onSubmit={handleSubmit}
        name="new-card"
        title="New place"
        isOpen={isOpen}
        onClose={onClose}
        buttonText={buttonText}
      >
        <input
          onChange={handleInput}
          value={inputs.title || ''}
          id="image-title-input"
          type="text"
          className="form__input form__input_type_image-title"
          placeholder="Title"
          name="title"
          required
          minLength="1"
          maxLength="30"
        />
        <span id="image-title-input-error" className={`form__input-error ${isValid ? '' : 'form__input-error_active'}`}>
          {validation.title}
        </span>
        <input
          onChange={handleInput}
          value={inputs.link || ''}
          id="image-link-input"
          type="url"
          className="form__input form__input_type_image-link"
          placeholder="Image link"
          name="link"
          required
        />
        <span id="image-link-input-error" className={`form__input-error ${isValid ? '' : 'form__input-error_active'}`}>
          {validation.link}
        </span>
      </PopupWithForm>
    </div>
  );
}
