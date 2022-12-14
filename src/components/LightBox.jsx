// LightBox.jsx

const LightBox = (props) => {
  const openClosingClass =
    props.lightBoxClosing === true
      ? " closing"
      : props.lightBoxOpen === true
      ? " open"
      : "";

  return (
    <div className={"lightbox" + openClosingClass}>
      <div className="lightbox__display">
        <button
          className="lightbox__button-close close-image"
          onClick={props.toggleLightBox}
        >
          close
        </button>
        <img
          className="lightbox__image"
          src={props.painting.images.gallery}
          alt={props.painting.name}
        />
      </div>
    </div>
  );
};

export default LightBox;
