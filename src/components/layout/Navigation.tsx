import { Menu, X, Github, Linkedin, Mail } from 'lucide-react';
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { portfolioData } from '../../data/portfolio';

const navItems = [
  { path: '/', label: 'Home' },
  { path: '/about', label: 'About' },
  { path: '/experience', label: 'Experience' },
  { path: '/projects', label: 'Projects' },
  { path: '/skills', label: 'Skills' },
];

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black/90 backdrop-blur-md shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
            RK
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`${
                  location.pathname === item.path
                    ? 'text-blue-500 font-semibold'
                    : 'text-gray-300 hover:text-white hover:scale-105'
                } transition-all duration-200`}
              >
                {item.label}
              </Link>
            ))}
          </div>

          <div className="hidden md:flex items-center space-x-6">
            <a
              href={`https://${portfolioData.personal.links.github}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-white hover:scale-110 transition-all duration-200"
            >
              <Github className="w-6 h-6" />
            </a>
            <a
              href={`https://${portfolioData.personal.links.linkedin}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-white hover:scale-110 transition-all duration-200"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a
              href={`mailto:${portfolioData.personal.email}`}
              className="text-gray-300 hover:text-white hover:scale-110 transition-all duration-200"
            >
              <Mail className="w-6 h-6" />
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-gray-300 hover:text-white p-2"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden absolute w-full bg-black/95 backdrop-blur-md">
          <div className="px-4 pt-2 pb-4 space-y-2">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setIsOpen(false)}
                className={`${
                  location.pathname === item.path
                    ? 'text-blue-500 font-semibold'
                    : 'text-gray-300'
                } block py-3 text-center hover:bg-gray-800/50 rounded-lg transition-colors`}
              >
                {item.label}
              </Link>
            ))}
            <div className="flex justify-center space-x-8 py-4 border-t border-gray-800 mt-4">
              <a
                href={`https://${portfolioData.personal.links.github}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white"
              >
                <Github className="w-6 h-6" />
              </a>
              <a
                href={`https://${portfolioData.personal.links.linkedin}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white"
              >
                <Linkedin className="w-6 h-6" />
              </a>
              <a
                href={`mailto:${portfolioData.personal.email}`}
                className="text-gray-300 hover:text-white"
              >
                <Mail className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};