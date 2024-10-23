import About from "./components/About";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Services from './components/Services';
import Schedule from './components/Schedule';
import Gallery from './components/Gallery';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhyUs from './components/WhyUs';
import VendorsAndPartners from './components/VendorsAndPartners';
import VideosFromPreviousEvents from './components/VideosFromPreviousEvents.jsx';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function App() {
  return (
      <div>
        <NavBar />
        <Home />
        <About />
        <Services />
        <Schedule />
        <Gallery />
        <VideosFromPreviousEvents />
        <VendorsAndPartners />
        <Testimonials />
        <WhyUs />
        <Contact />
        <Footer />

        <ToastContainer 
          position="top-right"
          autoClose={3000} 
          hideProgressBar={false} 
          closeOnClick 
          pauseOnHover 
          draggable 
          pauseOnFocusLoss 
        />
      </div>
  );
}
