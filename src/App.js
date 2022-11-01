import "./App.css";
import ParticleBackground from "./Components/particleBackground/particleBackground";
import Home from "./Components/Home/Home";
import About from "./Components/About/about";
import Projects from "./Components/Projects/projects";
import NavBar from "./Components/NavBar/navbar";

function App() {
    return (
        <>
            <div className="App" id="app">
                <NavBar />
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
