
import Navbar from './components/NaviBar/Navibar';
import Footer from './components/Footer/Footer';
import ApiWhatsapp from './components/Utils/ApiWhatsapp';
import RouteComponent from './components/Route/RouteComponents';

const App = () => {
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
