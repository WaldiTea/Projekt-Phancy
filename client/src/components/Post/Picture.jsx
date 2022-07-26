import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";

const Picture = (props) => {
  return (
    <div className="picture-wrapper">
      <div className="overlay top-overlay">
        <button className="delete-btn" onClick={props.delete}>
          <FontAwesomeIcon icon={faTrashCan} />
        </button>
      </div>
      <img
        className="picture"
        src={props.image}
        alt={props.tags[0]}
        onClick={props.onClick}
      />
      <div className="overlay bottom-overlay"></div>
    </div>
  );
};

export default Picture;
