import "./App.css";
import ParticleBackground from "./Components/particleBackground/particleBackground";
import Home from "./Components/Home/Home";
import Projects from "./Routes/projects";
import Navbar from "./Components/Navbar/Navbar";

function App() {
  
    return (
            <><Navbar />
            <div className="App" id="app">

        {/* <div className="container"> */}

          <div className="Home">
            <Home />
          </div>
          <div className="projects-section">

            <Projects />
        <ParticleBackground />
          </div>
      </div>
        {/* </div> */}
      </>
    );
}

export default App;
