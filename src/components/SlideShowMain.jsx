// SlideShowMain.jsx

import iconView from "../assets/icon-view.png";

const SlideShowMain = (props) => {
  return (
    <main className="slideshow">
      <div className="slideshow__preview-div">
        <button
          className="slideshow__button-view-image view-image"
          onClick={props.toggleLightBox}
        >
          <img
            className="slideshow__button-icon"
            src={iconView}
            alt="view painting icon"
          />
          view image
        </button>
        <img src={props.painting.images.hero.small} alt={props.painting.name} />
      </div>
      <div className="slideshow__text-div">
        <div className="slideshow__title-div">
          <h2 className="slideshow__title slideshow-page">
            {props.painting.name}
          </h2>
          <h3 className="slideshow__artist slideshow-page">
            {props.painting.artist.name}
          </h3>
        </div>
        <img
          className="slideshow__artist-image"
          src={props.painting.artist.image}
          alt={props.painting.artist.name}
        />
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
