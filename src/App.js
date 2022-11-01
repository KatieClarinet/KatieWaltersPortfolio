import "./App.css";
import ParticleBackground from "./Components/particleBackground/particleBackground";
import Home from "./Components/Home/Home";
import About from "./Routes/about";
import Projects from "./Routes/projects";
import NewNav from './Components/NewNav/NewNav';

function App() {
    return (
        <>
            <div className="App" id="app">
<NewNav />
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
