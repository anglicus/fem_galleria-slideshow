const PreviewCell = (props) => {
  const cellImage = new Image();
  cellImage.src = props.source;
  const rowSpan = Math.floor(cellImage.height / 10);

  return (
    <div className="preview-cell" style={{ gridRowStart: "span " + rowSpan }}>
      {<img src={`${props.source}`} alt={props.name}></img>}
      <h2>{props.title}</h2>
      <p>{props.artist}</p>
    </div>
  );
};

export default PreviewCell;
