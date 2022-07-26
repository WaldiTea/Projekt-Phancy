import useScrollDirection from "../../hooks/useScrollDirection";
import Navigation from "./Navigation";
import MobileNavigation from "./MobileNavigation";

const Navbar = (props) => {
  const scrollDirection = useScrollDirection();

  return (
    <header
      className={`header ${
        scrollDirection === "down" ? "hide-nav" : "show-nav"
      } ${props.styleHeader}`}
    >
      <MobileNavigation
        setIsFullPost={props.setIsFullPost}
        setIsFormInput={props.setIsFormInput}
      />
      <Navigation
        setIsFullPost={props.setIsFullPost}
        setIsFormInput={props.setIsFormInput}
      />
    </header>
  );
};

export default Navbar;
