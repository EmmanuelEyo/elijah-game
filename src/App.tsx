import Characters from "./components/Characters";
import Footer from "./components/Footer";
import Graphics from "./components/Graphics";
import Home from "./components/Home";
import Maps from "./components/Maps";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <Characters />
      <Graphics />
      <Maps />
      <Footer />
    </div>
  );
}

export default App;
