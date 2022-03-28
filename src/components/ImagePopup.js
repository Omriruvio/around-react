export default function ImagePopup () {
  return (
    <div className="popup popup_type_preview">
      <div className="popup__window popup__window_type_preview">
        <button type="button" className="popup__close-button" aria-label="close"></button>
        <img src=" " alt="preview" className="popup__preview-image" />
        <p className="popup__description"></p>
      </div>
    </div>
  )
}