import "./App.css";
// import ParticleBackground from "./Components/particleBackground/particleBackground";
import Home from "./Components/Home/Home";
import About from "./Routes/about";
import Projects from "./Routes/projects";
import NewNav from "./Components/NewNav/NewNav";
import React, { useState } from "react";

function App() {
    const [theme, setTheme] = useState("light");

    return (
        <>
            <div className="App" id="app">
                <NewNav theme={theme} setTheme={setTheme} />
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
            {/* <ParticleBackground theme={theme} /> */}
        </>
    );
}

export default App;
