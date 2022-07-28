import './App.css';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Banner from './components/Banner/Banner';
import Navbar from './components/NaviBar/Navibar';
import Projects from './components/Projects/Projects';
import Skills from './components/Skills/Skills';


const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Banner />
      <About />
      <Skills />
      <Projects /> 
      <Contact />
    
    </div>
  );
}

export default App;
