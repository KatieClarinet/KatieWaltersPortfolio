import './App.css';
import ParticleBackground from './Components/particleBackground/particleBackground';
import Home from './Components/Home/Home';
import Navbar from './Components/Navbar/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <ParticleBackground />
      <div className="Home">
      <Home />
      </div>
    </div>
  );
}

export default App;
