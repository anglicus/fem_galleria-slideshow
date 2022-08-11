// Header.jsx

import logo from "../assets/galleria.png";

const Header = (props) => {
  return (
    <header className="header">
      <img className="header__logo" src={logo} alt="galleria logo" />
      <h1 className="header__heading">galleria.</h1>
      <button
        className="header__button header-link button--linkstyle"
        onClick={props.pageTurning ? null : props.toggleSlideShow}
      >
        {props.buttonText}
      </button>
    </header>
  );
};

export default Header;
