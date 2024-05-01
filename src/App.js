import "./App.css";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import background from "./assets/background.png";
import mountain3 from "./assets/mountain3.png";
import mountain1 from "./assets/mountain1.png";
import house1 from "./assets/house1.png";
import Conditions from "./Conditions";
import Navbar from "./Navbar";
function App() {
  return (
    <div className="App">
      <Parallax pages={2} style={{ top: "0", left: "0" }} className="animation">
        <ParallaxLayer offset={0} sticky={{ start: 0, end: 0.9 }}>
          <Navbar />
        </ParallaxLayer>
        <ParallaxLayer
          offset={0}
          speed={0.1}
          style={{
            backgroundImage: `url(${background})`,
            backgroundSize: "cover",
            filter: "sepia(20%) contrast(110%) ",
          }}
        ></ParallaxLayer>

        <ParallaxLayer
          offset={0}
          speed={0.5}
          style={{
            backgroundImage: `url(${mountain1})`,
            backgroundSize: "cover",
            filter: "sepia(20%) contrast(110%) ",
          }}
        ></ParallaxLayer>

        <ParallaxLayer
          offset={0}
          speed={0.64}
          style={{
            backgroundImage: `url(${mountain3})`,
            backgroundSize: "cover",
            filter: "sepia(20%) contrast(110%) ",
          }}
        ></ParallaxLayer>

        <ParallaxLayer
          offset={0}
          speed={0.44}
          style={{
            backgroundImage: `url(${house1})`,
            backgroundSize: "cover",
          }}
        ></ParallaxLayer>

        <ParallaxLayer offset={1} speed={0}>
          <Conditions />
        </ParallaxLayer>
      </Parallax>
    </div>
  );
}

export default App;
