// Header.jsx

import logo from "../assets/galleria.png";

const Header = (props) => {
  return (
    <header className="header">
      <img className="header__logo" src={logo} alt="galleria logo" />
      <button
        className="header__button header-link button--linkstyle"
        onClick={props.toggleSlideShow}
      >
        {props.buttonText}
      </button>
    </header>
  );
};

export default Header;
