import "./App.css";
// import ParticleBackground from "./Components/particleBackground/particleBackground";
import Home from "./Components/Home/Home";
import About from "./Routes/about";
import Projects from "./Routes/projects";
import NewNav from "./Components/NewNav/NewNav";
import React, { useState } from "react";


function App() {
    const [darkmode, setDarkMode] = useState(false);

    return (
        <>
            <div className="App" id="app">
                <NewNav darkmode={darkmode} setDarkMode={setDarkMode} />
                <div className={darkmode ? "Home-Dark" : "Home"}>
                    <Home darkmode={darkmode} />
                </div>
                <div className={darkmode ? "About-Dark" : "About"}>
                    <About darkmode={darkmode} />
                </div>
                <div className={darkmode ? "Projects-Dark" : "Projects"}>
                    <Projects  darkmode={darkmode}/>
                </div>
                
            </div>
            {/* <ParticleBackground theme={theme} /> */}
        </>
    );
}

export default App;
