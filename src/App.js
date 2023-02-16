import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Banner from './components/Banner/Banner';
import Navbar from './components/NaviBar/Navibar';
import Projects from './components/Projects/Projects';
import Skills from './components/Skills/Skills';
import Footer from './components/Footer/Footer';
import ApiWhatsapp from './components/Utils/ApiWhatsapp';

const App = () => {
  return (
    <>
      <ApiWhatsapp />
      <Navbar />
      <Banner />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
