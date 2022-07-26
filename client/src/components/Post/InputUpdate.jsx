import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowUpFromBracket,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";

const InputUpdate = (props) => {
  return (
    <form className="update-tag-form fade" onSubmit={(e) => e.preventDefault()}>
      <input
        className="update-input"
        type="text"
        placeholder="Vergebe einen Tag"
        name="tags"
        value={props.newTag}
        onChange={props.handleNewTag}
      />
      <div className="button-wrapper">
        <button className="btn update-btn" onClick={props.updateNewTag}>
          <FontAwesomeIcon icon={faArrowUpFromBracket} />
          Update
        </button>
        <button className="btn abbort-btn" onClick={props.closeUpdate}>
          <FontAwesomeIcon icon={faXmark} />
          Abbrechen
        </button>
      </div>
    </form>
  );
};

export default InputUpdate;
