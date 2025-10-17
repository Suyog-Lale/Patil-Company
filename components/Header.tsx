import React, { useState, useEffect } from 'react';
import { NAV_LINKS, LOGO_BASE64 } from '../constants';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md' : 'bg-transparent'}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0">
            <a href="#home" className="flex items-center gap-3">
              <img className="h-16 w-auto" src={LOGO_BASE64} alt="Patil and Company (P and Co) Logo" />
              <span className="font-bold text-xl text-gray-800 hidden sm:inline-block">Patil and Company</span>
            </a>
          </div>
          <div className="hidden md:block">
            <nav className="ml-10 flex items-baseline space-x-4">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-gray-700 hover:text-yellow-600 px-3 py-2 rounded-md text-sm font-medium transition-colors"
                >
                  {link.name}
                </a>
              ))}
              <a
                href="#contact"
                className="ml-4 bg-yellow-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-yellow-700 transition-colors"
              >
                Contact
              </a>
            </nav>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="bg-gray-100 inline-flex items-center justify-center p-2 rounded-md text-gray-600 hover:text-yellow-600 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-yellow-500"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <i data-lucide={isOpen ? 'x' : 'menu'}></i>
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t border-gray-200">
            {NAV_LINKS.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-gray-700 hover:text-yellow-600 block px-3 py-2 rounded-md text-base font-medium"
              >
                {link.name}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="bg-yellow-600 text-white block w-full text-left px-3 py-2 rounded-md text-base font-medium hover:bg-yellow-700 mt-2"
            >
              Contact
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;