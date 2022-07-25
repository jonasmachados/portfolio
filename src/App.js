import './App.css';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Home from './components/Home/Home';
import NavBars from './components/NavBar/NavBars';

import Projects from './components/Projects/Projects';
import Skills from './components/Skills/Skills';


const App = () => {
  return (
    <div className="App">
      <NavBars />
      <Home />
      <About />
      <Projects />
      <Skills />
      <Contact />

    </div>
  );
}

export default App;
