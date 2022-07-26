import { useContext, useState } from "react";
import { DarkModeContext } from "../../contexts/DarkModeProvider";
import Hamburger from "./Hamburger";
import Logo from "./Logo";
import NavLinks from "./NavLinks";

const MobileNavigation = (props) => {
  const { isDarkMode } = useContext(DarkModeContext);

  const [isNavigationMenuOpen, setIsNavigationMenuOpen] = useState(false);

  const handleActive = () => {
    setIsNavigationMenuOpen(!isNavigationMenuOpen);
  };

  return (
    <nav
      className={`navbar mobile-navigation ${
        isNavigationMenuOpen ? "unfold" : "fold"
      }`}
    >
      <Logo />
      <Hamburger
        styleClass={`hamburger ${isNavigationMenuOpen ? "open" : "close"} ${
          isDarkMode
            ? "dark-theme-hamburger-stroke"
            : "light-theme-hamburger-stroke"
        }`}
        onClick={handleActive}
      />
      <NavLinks
        setIsFullPost={props.setIsFullPost}
        setIsFormInput={props.setIsFormInput}
        handleActive={handleActive}
        styleMobile={`mobile-links ${
          isNavigationMenuOpen ? "fade-out" : "fade-in"
        }`}
      />
    </nav>
  );
};

export default MobileNavigation;
