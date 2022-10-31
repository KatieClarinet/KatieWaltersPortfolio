import "./App.css";
import ParticleBackground from "./Components/particleBackground/particleBackground";
import Home from "./Components/Home/Home";
import About from "./Routes/about";
import Projects from "./Routes/projects";
import Navbar from "./Components/Navbar/Navbar";

function App() {
    return (
        <>
            <div className="App" id="app">
                <Navbar />

                <div className="Home">
                    <Home />
                </div>
                <div className="About">
                    <About />
                </div>
                <div className="projects-section">
                    <Projects />
                </div>
            </div>
            <ParticleBackground />
        </>
    );
}

export default App;
