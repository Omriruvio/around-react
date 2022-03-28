export default function ImagePopup(props) {
  return (
    <div className={`popup popup_type_preview ${props.card ? 'popup_active' : ''}`}>
      <div className="popup__window popup__window_type_preview">
        <button type="button" className="popup__close-button" aria-label="close" onClick={props.onClose}></button>
        <img src={props.card?.link || ''} alt="preview" className="popup__preview-image" />
        <p className="popup__description">{props.card?.name || ''}</p>
      </div>
    </div>
  );
}
