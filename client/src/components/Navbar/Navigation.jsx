import Logo from "./Logo";
import NavLinks from "./NavLinks";

const Navigation = (props) => {
  return (
    <nav className="navbar navigation">
      <Logo />
      <NavLinks
        setIsFullPost={props.setIsFullPost}
        setIsFormInput={props.setIsFormInput}
      />
    </nav>
  );
};

export default Navigation;
