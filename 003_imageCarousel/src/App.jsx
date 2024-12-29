import "./App.css";
import Carousel from "./components/Carousel";
import data from "./carouselData.json";

function App() {
  return (
    <div className="App">
      <Carousel data={data.wallpapers} />
    </div>
  );
}

export default App;
