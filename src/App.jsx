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
  const [lightBoxClosing, setLightBoxClosing] = useState(false);

  const toggleSlideShow = () => {
    // remove this line before production build
    document.body.className = slideShowOn ? "normal" : "slideshow-on";
    //
    setSlideShowOn(slideShowOn ? false : true);
  };

  const slideShowNext = (increment) => {
    const nextIndex = slideShowIndex + increment;
    setSlideShowIndex(nextIndex);
  };

  // for use when clicking directly on a thumbnail from the home page
  const jumpIntoSlideShow = (index) => {
    setSlideShowOn(true);
    setSlideShowIndex(index);
  };

  const toggleLightBox = () => {
    // remove this line before production build
    document.body.className = lightBoxOpen ? "slideshow-on" : "lightbox-on";
    //
    setLightBoxOpen(lightBoxOpen ? false : true);
  };

  const closeLightBox = () => {
    setLightBoxClosing(true);
    setTimeout(() => {
      setLightBoxOpen(false);
      setLightBoxClosing(false);
    }, 600);
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
        <PreviewGrid
          paintings={Paintings}
          jumpIntoSlideShow={jumpIntoSlideShow}
        />
      )}
      <LightBox
        lightBoxOpen={lightBoxOpen}
        lightBoxClosing={lightBoxClosing}
        closeLightBox={closeLightBox}
        painting={Paintings[slideShowIndex]}
      />
    </div>
  );
}

export default App;
