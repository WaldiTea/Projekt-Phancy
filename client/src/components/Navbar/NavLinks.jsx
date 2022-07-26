import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { DarkModeContext } from "../../contexts/DarkModeProvider";
import { ModalContext } from "../../contexts/ModalProvider";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faFileArrowUp,
  faInfoCircle,
  faCircleHalfStroke,
} from "@fortawesome/free-solid-svg-icons";

const NavLinks = (props) => {
  const { toggleDarkMode } = useContext(DarkModeContext);

  const handleDarkMode = () => {
    toggleDarkMode();
  };

  const { setIsModalOpen } = useContext(ModalContext);

  const handleModal = () => {
    setIsModalOpen(true);
    props.setIsFullPost(false);
    props.setIsFormInput(true);
  };

  return (
    <ul className={`nav-list ${props.styleMobile}`}>
      <li className="link-item icon-home">
        <NavLink to="/">
          <FontAwesomeIcon
            onClick={props.handleActive}
            className="icon"
            icon={faHouse}
          />
        </NavLink>
      </li>
      <li className="link-item icon-upload" onClick={props.handleActive}>
        <FontAwesomeIcon
          onClick={() => {
            handleModal();
          }}
          className="icon"
          icon={faFileArrowUp}
        />
      </li>
      <li className="link-item icon-about">
        <NavLink to="/about">
          <FontAwesomeIcon
            onClick={props.handleActive}
            className="icon"
            icon={faInfoCircle}
          />
        </NavLink>
      </li>
      <li className="link-item icon-theme" onClick={props.handleActive}>
        <FontAwesomeIcon
          onClick={() => {
            handleDarkMode();
          }}
          className="icon"
          icon={faCircleHalfStroke}
        />
      </li>
    </ul>
  );
};

export default NavLinks;
