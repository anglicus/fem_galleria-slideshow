// SlideShow.jsx

const SlideShow = (props) => {
  return (
    <div>
      <main className="slideshow">
        <p>this is the slideshow</p>
        <h2>{props.painting.name}</h2>
      </main>
    </div>
  );
};

export default SlideShow;
