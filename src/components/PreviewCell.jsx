const PreviewCell = (props) => {
  const cellImage = new Image();
  cellImage.src = props.source;
  const rowSpan = Math.floor(cellImage.height / 5) + 8;
  const cellStyle = {
    gridRow: "span " + rowSpan,
    "--desktop-col": props.desktopColumn,
    "--tablet-col": props.tabletColumn,
  };
  const titleClass = props.title
    .replace(/\s/g, "-")
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");
  return (
    <div className={`preview-cell ${titleClass}`} style={cellStyle}>
      {
        <img
          className="preview-cell__thumbnail"
          src={`${props.source}`}
          alt={props.title}
        ></img>
      }
      <div className="preview-cell__text-div">
        <h2 className="preview-cell__title">{props.title}</h2>
        <h3 className="preview-cell__artist">{props.artist}</h3>
      </div>
    </div>
  );
};

export default PreviewCell;
