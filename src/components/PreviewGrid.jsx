// PreviewGrid.jsx

import PreviewCell from "./PreviewCell";

const PreviewGrid = (props) => {
  return (
    <div className="preview-grid">
      {props.paintings.map((painting) => (
        <PreviewCell
          source={painting.images.thumbnail}
          title={painting.name}
          artist={painting.artist.name}
          key={painting.name}
        />
      ))}
    </div>
  );
};

export default PreviewGrid;
