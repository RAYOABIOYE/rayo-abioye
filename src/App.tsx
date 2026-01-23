import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import DesignGallery from './pages/DesignGallery';
import ProjectCaseStudy from './pages/ProjectCaseStudy';
import Jexcelhub from './pages/Jexcelhub';
import Contact from './pages/Contact'; // <-- import the contact page

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/designs" element={<DesignGallery />} />
      
      {/* Dynamic project case study */}
      <Route path="/projects/:slug" element={<ProjectCaseStudy />} />

      {/* Dedicated JEXCELHUB gallery */}
      <Route path="/projects/jexcelhub-gallery" element={<Jexcelhub />} />

      {/* Contact page */}
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
}

export default App;
