import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Menu, X, Instagram, Linkedin, Facebook } from 'lucide-react';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Services from './pages/Services';
import Contact from './pages/Contact';

function App() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Navbar isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
        
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>

        <footer className="bg-gray-900 text-white py-12">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="mb-6 md:mb-0">
                <h3 className="text-xl font-semibold">Preetha Gobinath</h3>
                <p className="mt-2 text-gray-400">Social Media Specialist & Content Creator</p>
              </div>
              <div className="flex space-x-4">
                <a href="https://instagram.com/preetha_gobinath" className="hover:text-pink-500 transition-colors">
                  <Instagram size={24} />
                </a>
                <a href="https://linkedin.com/in/preethagobinath" className="hover:text-blue-500 transition-colors">
                  <Linkedin size={24} />
                </a>
                <a href="https://facebook.com/preethagobi" className="hover:text-blue-600 transition-colors">
                  <Facebook size={24} />
                </a>
              </div>
            </div>
            <div className="mt-8 text-center text-gray-400">
              <p>&copy; {new Date().getFullYear()} Preetha Gobinath. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;