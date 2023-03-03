import Characters from "./components/Characters";
import Footer from "./components/Footer";
import Graphics from "./components/Graphics";
import Home from "./components/Home";
import ImageSlider from "./components/ImageSlider";
import Navbar from "./components/Navbar";
import { SliderData } from "./components/SliderData";

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <Characters />
      <Graphics />
      <ImageSlider slides={SliderData} />
      <Footer />
    </div>
  );
}

export default App;
