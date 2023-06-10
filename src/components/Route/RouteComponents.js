
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProjectPage from '../Pages/ProjectPage.js';
import HomePage from '../Pages/HomPage.js'
import Error404 from  '../Error/Error404.js';

const RouteComponents = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          
          <Route path="/project/:id" element={<ProjectPage />} />

          <Route path="/*" element={<Error404 />} />
        </Routes>
      </Router>
    </>
  );
};

export default RouteComponents;