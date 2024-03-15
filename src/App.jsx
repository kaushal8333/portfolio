import './App.css';
import About from './components/About';
import Contact from './components/Contact';
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
        <div>
          <Contact />
        </div>
      </div>
      </div>
    </div>
  );
}

export default App;
