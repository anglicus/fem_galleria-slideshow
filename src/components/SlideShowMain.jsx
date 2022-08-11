// SlideShowMain.jsx
import { useState, useEffect } from "react";

import iconView from "../assets/icon-view.png";

const SlideShowMain = (props) => {
  const [touchPosition, setTouchPosition] = useState(null);

  const handleTouchStart = (e) => {
    const touchDown = e.touches[0].clientX;
    setTouchPosition(touchDown);
  };

  const handleTouchMove = (e) => {
    if (!props.pageTurning) {
      const touchDown = touchPosition;

      if (touchDown === null) {
        return;
      }

      const currentTouch = e.touches[0].clientX;
      const diff = touchDown - currentTouch;

      if (diff > 5) {
        props.slideShowNext(1);
      }

      if (diff < -5) {
        props.slideShowNext(-1);
      }
    }

    setTouchPosition(null);
  };

  useEffect(() => {
    const handleKeyPress = (e) => {
      e.preventDefault();
      if (!props.pageTurning) {
        if (e.keyCode === 39 && !props.lightBoxOpen) {
          props.slideShowNext(1);
        } else if (e.keyCode === 37 && !props.lightBoxOpen) {
          props.slideShowNext(-1);
        } else if (e.keyCode === 32) {
          props.toggleLightBox();
        }
      }
    };
    window.addEventListener("keydown", handleKeyPress);

    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  }, [props]);

  const titleClass = props.painting.name
    .replace(/\s/g, "-")
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");

  return (
    <main
      className="slideshow"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
    >
      <div className="slideshow__preview-div">
        <button
          className="slideshow__button-view-image view-image"
          onClick={props.pageTurning ? null : props.toggleLightBox}
        >
          <img
            className="slideshow__button-icon"
            src={iconView}
            alt="view painting icon"
          />
          view image
        </button>
        <img
          className="slideshow__hero-large"
          src={props.painting.images.hero.large}
          alt={props.painting.name}
        />
        <img
          className="slideshow__hero-small"
          src={props.painting.images.hero.small}
          alt={props.painting.name}
        />
        <img
          className="slideshow__artist-image mobile-desktop"
          src={props.painting.artist.image}
          alt={props.painting.artist.name}
        />
      </div>
      <div className="slideshow__title-div">
        <div className="slideshow__title-background-div">
          <h2 className={`slideshow__title slideshow-page ${titleClass}`}>
            {props.painting.name}
          </h2>
          <h3 className="slideshow__artist slideshow-page">
            {props.painting.artist.name}
          </h3>
        </div>
        <img
          className="slideshow__artist-image tablet"
          src={props.painting.artist.image}
          alt={props.painting.artist.name}
        />
      </div>
      <div className="slideshow__text-div">
        <h4 className="slideshow__painting-year">{props.painting.year}</h4>
        <p className="slideshow__description">{props.painting.description}</p>
        <a
          className="slideshow__link-source"
          href={props.painting.source}
          rel="noreferrer"
          target="_blank"
        >
          go to source
        </a>
      </div>
    </main>
  );
};

export default SlideShowMain;
