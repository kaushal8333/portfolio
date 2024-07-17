import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
// import About from './components/About';
import Contact from './components/Contact';
import Home from './components/Home';
import NavBar from './components/Navbar';
import Projects from './components/Projects';
import React from "./components/React"

function App() {
  return (
    <div>
<BrowserRouter>
    <Routes>
      <Route>
        <Route path='contact' element={<Contact />}/>
      </Route>
    </Routes>
    </BrowserRouter>
    <div className="App">
      
      <div>
        <NavBar />
      <div>
        <Home />
      </div>
      <div>
        <React />
      </div>
      <div>
        {/* <About /> */}
        <div>
          <Projects />
        </div>
        <div>
          <Contact />
        </div>
        
      </div>
      </div>
    </div>
    </div>
    
  );
}

export default App;
