import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import Programs from "./pages/Programs";
import ProspectiveClients from "./pages/ProspectiveClients";
import OurTeam from "./pages/OurTeam";
import CommunityPartners from "./pages/CommunityPartners";
import ContactUs from "./pages/ContactUs";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  useEffect(()=>{
    AOS.init({
      // offset: 200,
      // duration: 1000,
      // easing: 'ease-in-sine',
      // delay: 100,
    });
    // Refresh on component update (useful in React)
  AOS.refresh();
  }, [])
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/programs" element={<Programs />} />
        <Route path="/prospective-clients" element={<ProspectiveClients />} />
        <Route path="/our-team" element={<OurTeam />} />
        <Route path="/community-partners" element={<CommunityPartners />} />
        <Route path="/contact-us" element={<ContactUs />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
