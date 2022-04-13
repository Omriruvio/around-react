import React from 'react';

export default function ImagePopup(props) {
  const [popupImageLink, setPopupImageLink] = React.useState('');
  const [popupImageName, setPopupImageName] = React.useState('');

  React.useEffect(() => {
    if (props.card) {
      setPopupImageLink(props.card.link);
      setPopupImageName(props.card.name);
    }
  }, [props.card]);

  return (
    <div className={`popup popup_type_preview ${props.card ? 'popup_active' : ''}`}>
      <div className="popup__window popup__window_type_preview">
        <button type="button" className="popup__close-button" aria-label="close" onClick={props.onClose}></button>
        <img src={popupImageLink} alt="preview" className="popup__preview-image" />
        <p className="popup__description">{popupImageName}</p>
      </div>
    </div>
  );
}
