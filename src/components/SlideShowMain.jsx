// SlideShowMain.jsx

const SlideShowMain = (props) => {
  return (
    <main className="slideshow">
      <div className="slideshow__preview-div">
        <img src={props.painting.images.hero.small} alt={props.painting.name} />
      </div>
      <div className="slideshow__title-div">
        <h2 className="slideshow__title">{props.painting.name}</h2>
        <h3 className="slideshow__artist">{props.painting.artist.name}</h3>
      </div>
      <img
        className="slideshow__artist-image"
        src={props.painting.artist.image}
        alt={props.painting.artist.name}
      />
      <h4 className="slideshow__painting-year">{props.painting.year}</h4>
      <p className="slideshow__description">{props.painting.description}</p>
      <button className="slideshow__button-source">go to source</button>
    </main>
  );
};

export default SlideShowMain;
