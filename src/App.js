import "./App.css";
import ParticleBackground from "./Components/particleBackground/particleBackground";
import Home from "./Components/Home/Home.js";
import About from "./Components/About/about.js";
import Projects from "./Components/Projects/projects.js";
import NavBar from "./Components/NavBar/Navbar.js";   

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
