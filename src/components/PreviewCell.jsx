// PreviewCell.jsx

import { useState, useEffect } from "react";

const PreviewCell = (props) => {
  const [cellStyle, setCellStyle] = useState({});

  useEffect(() => {
    const img = new Image();
    img.src = props.source;
    img.addEventListener("load", () => {
      const rowSpan = Math.floor(img.height / 5) + 8;
      const newCellStyle = {
        gridRow: "span " + rowSpan,
        "--desktop-col": props.desktopColumn,
        "--tablet-col": props.tabletColumn,
      };
      setCellStyle(newCellStyle);
    });
  }, [props.source, props.desktopColumn, props.tabletColumn]);

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
