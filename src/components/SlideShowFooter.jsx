// SlideShowFooter.jsx

import iconForward from "../assets/icon-forward.png";
import iconBackward from "../assets/icon-backward.png";

const SlideShowFooter = (props) => {
  const inactiveBack = props.deactivatedButton === "back" ? " inactive" : "";

  const inactiveForward =
    props.deactivatedButton === "forward" ? " inactive" : "";

  return (
    <footer className="footer">
      <span
        className="footer__progress-bar"
        style={{ width: props.slideShowProgress + "%" }}
      ></span>
      <div className="footer__text">
        <h2 className="footer__title footer-title">{props.title}</h2>
        <h3 className="footer__artist footer-artist">{props.artist}</h3>
      </div>
      <div className="footer__button-div">
        <button
          aria-label="back"
          className={
            "footer__button button--arrow button--backward" + inactiveBack
          }
          onClick={
            props.deactivatedButton === "back" || props.pageTurning
              ? null
              : () => props.slideShowNext(-1)
          }
        >
          <img src={iconBackward} alt="back icon" />
        </button>
        <button
          aria-label="forward"
          className={
            "footer__button button--arrow button--forward" + inactiveForward
          }
          onClick={
            props.deactivatedButton === "forward" || props.pageTurning
              ? null
              : () => props.slideShowNext(1)
          }
        >
          <img src={iconForward} alt="next icon" />
        </button>
      </div>
    </footer>
  );
};

export default SlideShowFooter;
