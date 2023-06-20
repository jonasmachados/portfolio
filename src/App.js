
import Navbar from './components/NaviBar/Navibar';
import Footer from './components/Footer/Footer';
import ApiWhatsapp from './components/Utils/ApiWhatsapp';
import RouteComponent from './components/Route/RouteComponents';
import ReactGA from 'react-ga';
import React, { useEffect } from "react";

const App = () => {

  const TRACKING_ID = process.env.REACT_APP_TRACKING_ID;

  ReactGA.initialize(TRACKING_ID);

  useEffect(() => {
    ReactGA.send({
      hitType: 'pageview',
      page: document.location.pathname
        + window.location.search
    });
  }, []);

  return (
    <>
      <ApiWhatsapp />
      <Navbar />
      <RouteComponent />
      <Footer />
    </>
  );
}

export default App;
