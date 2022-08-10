// PreviewGrid.jsx

import PreviewCell from "./PreviewCell";

const desktopColumns = [1, 2, 3, 4, 1, 2, 3, 4, 1, 2, 4, 1, 2, 3, 4];
const tabletColumns = [1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 2, 1, 2, 1, 2];

const PreviewGrid = (props) => {
  return (
    <main className="preview-grid">
      {props.paintings.map((painting, i) => (
        <PreviewCell
          source={painting.images.thumbnail}
          title={painting.name}
          artist={painting.artist.name}
          desktopColumn={desktopColumns[i]}
          tabletColumn={tabletColumns[i]}
          key={painting.name}
        />
      ))}
    </main>
  );
};

export default PreviewGrid;
