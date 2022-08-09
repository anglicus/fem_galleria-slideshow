import { useState } from "react";

import "./css/App.css";

import Paintings from "./data/data.json";
import Header from "./components/Header";
import PreviewGrid from "./components/PreviewGrid";
import SlideShow from "./components/SlideShow";
import SlideShowFooter from "./components/SlideShowFooter";

function App() {
  const [slideShowOn, setSlideShowOn] = useState(false);
  const [slideShowIndex, setSlideShowIndex] = useState(0);

  const toggleSlideShow = () => {
    setSlideShowOn(slideShowOn ? false : true);
  };

  const slideShowNext = (increment) => {
    const nextIndex = slideShowIndex + increment;
    setSlideShowIndex(nextIndex);
  };

  return (
    <div className="App">
      <Header
        toggleSlideShow={toggleSlideShow}
        buttonText={slideShowOn ? "stop slideshow" : "start slideshow"}
      />
      {slideShowOn ? (
        <div>
          <SlideShow painting={Paintings[slideShowIndex]} />
          <SlideShowFooter
            deactivatedButton={
              slideShowIndex === 0
                ? "back"
                : slideShowIndex === Paintings.length - 1
                ? "forward"
                : "none"
            }
            slideShowNext={slideShowNext}
            title={Paintings[slideShowIndex].name}
            artist={Paintings[slideShowIndex].artist.name}
          />
        </div>
      ) : (
        <PreviewGrid paintings={Paintings} />
      )}
    </div>
  );
}

export default App;
