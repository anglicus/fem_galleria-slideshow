const PreviewCell = (props) => {
  const cellImage = new Image();
  cellImage.src = props.source;
  const rowSpan = Math.floor(cellImage.height / 10) + 4;
  const cellStyle = {
    gridRow: "span " + rowSpan,
    "--desktop-col": props.desktopColumn,
    "--tablet-col": props.tabletColumn,
  };
  return (
    <div className="preview-cell" style={cellStyle}>
      {<img src={`${props.source}`} alt={props.name}></img>}
      <div className="preview-cell__text-div">
        <h2>{props.title}</h2>
        <p>{props.artist}</p>
      </div>
    </div>
  );
};

export default PreviewCell;
