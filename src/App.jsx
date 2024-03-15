import './App.css';
import About from './components/About';
import Home from './components/Home';
import NavBar from './components/Navbar';
import Projects from './components/Projects';

function App() {
  return (

    <div className="App">
      <div>
        <NavBar />
      <div>
        <Home />
      </div>
      <div>
        <About />
        <div>
          <Projects />
        </div>
      </div>
      </div>
    </div>
  );
}

export default App;
