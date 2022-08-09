// SlideShowFooter.jsx

import iconForward from "../assets/icon-forward.png";
import iconBackward from "../assets/icon-backward.png";

const SlideShowFooter = (props) => {
  const inactiveBack = props.deactivatedButton === "back" ? " inactive" : "";

  const inactiveForward =
    props.deactivatedButton === "forward" ? " inactive" : "";

  return (
    <footer className="footer">
      <div className="footer__text">
        <h2 className="footer__title footer-title">{props.title}</h2>
        <h3 className="footer__artist footer-artist">{props.artist}</h3>
      </div>
      <button
        className={"slideshow__button button-backward" + inactiveBack}
        onClick={
          props.deactivatedButton === "back"
            ? null
            : () => props.slideShowNext(-1)
        }
      >
        <img src={iconBackward} alt="back icon" />
      </button>
      <button
        className={"slideshow__button button-forward" + inactiveForward}
        onClick={
          props.deactivatedButton === "forward"
            ? null
            : () => props.slideShowNext(1)
        }
      >
        <img src={iconForward} alt="next icon" />
      </button>
    </footer>
  );
};

export default SlideShowFooter;
