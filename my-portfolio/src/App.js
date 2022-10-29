import "./App.css";
import ParticleBackground from "./Components/particleBackground/particleBackground";
import Home from "./Components/Home/Home";
import Projects from "./Routes/projects";
import Navbar from "./Components/Navbar/Navbar";

function App() {
  
    return (
        <div className="App" id="app">
       
            <Navbar />
            <ParticleBackground />
            <div className="Home" id="home">
            <Home />
            </div>
            <div className="projects-section">

            <Projects />
            </div>
        </div>
    );
}

export default App;
