import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import DesignGallery from './pages/DesignGallery';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/designs" element={<DesignGallery />} />
    </Routes>
  );
}

export default App;
