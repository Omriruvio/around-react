import deleteIcon from '../images/trash-button.svg';

export default function Card(props) {
  const handleClick = () => props.onCardClick(props.card);

  return (
    <li className="cards-list__item" onClick={handleClick}>
      <button type="button" className="button" aria-label="trash">
        <img src={deleteIcon} alt="trash button" className="button button_type_trash" />
      </button>
      <img src={props.card.link} alt="" className="cards-list__image" />
      <div className="cards-list__info-section">
        <h2 className="cards-list__image-title">{props.card.name}</h2>
        <div className="cards-list__like-wrapper">
          <button type="button" className="button like-button" aria-label="like"></button>
          <span className="cards-list__like-count">{props.card.likes.length}</span>
        </div>
      </div>
    </li>
  );
}
