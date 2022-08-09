import "./css/App.css";
import Paintings from "./data/data.json";
import Header from "./components/Header";
import PreviewGrid from "./components/PreviewGrid";

function App() {
  return (
    <div className="App">
      <Header />
      <PreviewGrid paintings={Paintings} />
    </div>
  );
}

export default App;
