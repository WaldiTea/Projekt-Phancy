import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowUpFromBracket,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";

const FormButtons = (props) => {
  return (
    <div className="form-button-wrapper">
      <button className="btn abbort-btn" onClick={props.handleCloseModal}>
        <FontAwesomeIcon icon={faXmark} />
        Abbrechen
      </button>
      <button className="btn upload-btn" onClick={props.handleSubmit}>
        <FontAwesomeIcon icon={faArrowUpFromBracket} />
        Hochladen
      </button>
    </div>
  );
};

export default FormButtons;
