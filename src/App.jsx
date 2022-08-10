import { useState } from "react";

import "./css/App.css";

import Paintings from "./data/data.json";
import Header from "./components/Header";
import PreviewGrid from "./components/PreviewGrid";
import SlideShowMain from "./components/SlideShowMain";
import SlideShowFooter from "./components/SlideShowFooter";
import LightBox from "./components/LightBox";

function App() {
  const [slideShowOn, setSlideShowOn] = useState(false);
  const [slideShowIndex, setSlideShowIndex] = useState(0);
  const [lightBoxOpen, setLightBoxOpen] = useState(false);

  const toggleSlideShow = () => {
    setSlideShowOn(slideShowOn ? false : true);
  };

  const slideShowNext = (increment) => {
    const nextIndex = slideShowIndex + increment;
    setSlideShowIndex(nextIndex);
  };

  const toggleLightBox = () => {
    setLightBoxOpen(lightBoxOpen ? false : true);
  };

  return (
    <div className="App">
      <Header
        toggleSlideShow={toggleSlideShow}
        buttonText={slideShowOn ? "stop slideshow" : "start slideshow"}
      />
      {slideShowOn ? (
        <div>
          <SlideShowMain
            painting={Paintings[slideShowIndex]}
            toggleLightBox={toggleLightBox}
          />
          <SlideShowFooter
            slideShowProgress={((slideShowIndex + 1) / Paintings.length) * 100}
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
      <LightBox
        open={lightBoxOpen}
        toggleLightBox={toggleLightBox}
        painting={Paintings[slideShowIndex]}
      />
    </div>
  );
}

export default App;