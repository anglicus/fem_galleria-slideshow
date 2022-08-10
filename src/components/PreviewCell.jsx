// PreviewCell.jsx

import { useState, useEffect } from "react";

const PreviewCell = (props) => {
  const [cellStyle, setCellStyle] = useState({});

  useEffect(() => {
    const img = new Image();
    img.src = props.source;
    img.addEventListener("load", () => {
      const rowSpan = Math.floor(img.height / 5) + 8;
      const delay = props.index / 15 + "s";
      const newCellStyle = {
        gridRow: "span " + rowSpan,
        "--desktop-col": props.desktopColumn,
        "--tablet-col": props.tabletColumn,
        "--animation-delay": delay,
      };
      setCellStyle(newCellStyle);
    });
  }, [props.source, props.desktopColumn, props.tabletColumn, props.index]);

  const titleClass = props.title
    .replace(/\s/g, "-")
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");

  return (
    <div
      className={`preview-cell ${titleClass}`}
      style={cellStyle}
      onClick={() => props.jumpIntoSlideShow(props.index)}
    >
      {
        <img
          className="preview-cell__thumbnail"
          src={`${props.source}`}
          alt={props.title}
        ></img>
      }
      <div className="preview-cell__text-div">
        <h2 className={`preview-cell__title ${titleClass}`}>{props.title}</h2>
        <h3 className="preview-cell__artist">{props.artist}</h3>
      </div>
    </div>
  );
};

export default PreviewCell;
