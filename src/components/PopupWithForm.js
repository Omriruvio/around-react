export default function PopupWithForm(props) {
  return (
    <div className={`popup popup_type_${props.name} ${props.isOpen ? 'popup_active' : ''}`}>
      <div className="popup__window">
        <button type="button" className="popup__close-button" aria-label="close" onClick={props.onClose}></button>
        <h2 className="popup__title">{props.title}</h2>
        <form className={`form form_${props.name}`} name={props.name}>
          {props.children}
          <button type="submit" className="button form__submit-button form__submit-button_place_profile">
            {props.buttonText}
          </button>
        </form>
      </div>
    </div>
  );
}
