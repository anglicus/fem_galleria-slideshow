// SlideShowFooter.jsx

import { useEffect } from "react";

import iconForward from "../assets/icon-forward.png";
import iconBackward from "../assets/icon-backward.png";

const SlideShowFooter = (props) => {
  useEffect(() => {
    const handleArrow = (e) => {
      if (!props.pageTurning) {
        if (e.keyCode === 39 && props.deactivatedButton !== "forward") {
          props.slideShowNext(1);
        } else if (e.keyCode === 37 && props.deactivatedButton !== "back") {
          props.slideShowNext(-1);
        }
      }
    };

    window.addEventListener("keydown", handleArrow);

    return () => {
      window.removeEventListener("keydown", handleArrow);
    };
  }, [props]);

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
