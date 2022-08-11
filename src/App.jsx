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
  const [pageTurning, setPageTurning] = useState(false);
  const [turnClass, setTurnClass] = useState("");

  const toggleSlideShow = () => {
    setTurnClass("opening-new");
    setSlideShowOn(slideShowOn ? false : true);
  };

  const slideShowNext = (increment) => {
    const newTurnClass = increment === 1 ? "turn-right" : "turn-left";
    const nextIndex = slideShowIndex + increment;
    if (nextIndex >= 0 && nextIndex < Paintings.length) {
      setPageTurning(true);
      setTurnClass(newTurnClass);
      setTimeout(() => {
        setSlideShowIndex(nextIndex);
        setPageTurning(false);
        setTurnClass("");
      }, 750);
    }
  };

  // for use when clicking directly on a thumbnail from the home page
  const jumpIntoSlideShow = (index) => {
    setSlideShowOn(true);
    setSlideShowIndex(index);
  };

  const toggleLightBox = () => {
    if (lightBoxOpen) {
      setLightBoxClosing(true);
      setTimeout(() => {
        setLightBoxOpen(false);
        setLightBoxClosing(false);
      }, 600);
    } else {
      setLightBoxOpen(true);
    }
  };

  return (
    <div className="App">
      <Header
        toggleSlideShow={toggleSlideShow}
        buttonText={slideShowOn ? "stop slideshow" : "start slideshow"}
        pageTurning={pageTurning}
      />
      {slideShowOn && (
        <div className={`slideshow__pageturn-div ${turnClass}`}>
          <SlideShowMain
            painting={Paintings[slideShowIndex === 0 ? 0 : slideShowIndex - 1]}
            toggleLightBox={toggleLightBox}
            pageTurning={pageTurning}
            slideShowNext={slideShowNext}
            lightBoxOpen={lightBoxOpen}
          />
          <SlideShowMain
            painting={Paintings[slideShowIndex]}
            toggleLightBox={toggleLightBox}
            pageTurning={pageTurning}
            slideShowNext={slideShowNext}
            lightBoxOpen={lightBoxOpen}
          />
          <SlideShowMain
            painting={
              Paintings[
                slideShowIndex === Paintings.length - 1
                  ? Paintings.length - 1
                  : slideShowIndex + 1
              ]
            }
            toggleLightBox={toggleLightBox}
            pageTurning={pageTurning}
            slideShowNext={slideShowNext}
            lightBoxOpen={lightBoxOpen}
          />
          )
        </div>
      )}
      {slideShowOn && (
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
          pageTurning={pageTurning}
        />
      )}
      {!slideShowOn && (
        <PreviewGrid
          paintings={Paintings}
          jumpIntoSlideShow={jumpIntoSlideShow}
        />
      )}
      <LightBox
        lightBoxOpen={lightBoxOpen}
        lightBoxClosing={lightBoxClosing}
        toggleLightBox={toggleLightBox}
        painting={Paintings[slideShowIndex]}
        pageTurning={pageTurning}
      />
    </div>
  );
}

export default App;
