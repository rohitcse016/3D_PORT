import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Scene } from './components/3d/Scene';
import { Navigation } from './components/layout/Navigation';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Experience } from './pages/Experience';
import { Projects } from './pages/Projects';
import { Skills } from './pages/Skills';

function App() {
  return (
    <Router>
      <div className="bg-gradient-to-b from-black via-gray-900 to-black min-h-screen text-white">
        <Scene />
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/skills" element={<Skills />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;