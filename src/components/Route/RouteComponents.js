
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from '../About/About.js';
import Projects from '../Projects/Projects'

const RouteComponents = () => {
  return (
    <section>
      <Router>
        <div >

          <Routes>
            <Route path="/about" element={<About />} />
            <Route path="/project" element={<Projects />} />


          </Routes>

        </div>
      </Router>

    </section>
  );
};

export default RouteComponents;