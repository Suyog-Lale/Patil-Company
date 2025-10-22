import React from 'react';
import { Link } from 'react-router-dom';
import { NAV_LINKS, MAIN_LOGO } from '../constants';

const Footer: React.FC = () => {
  // We add "Contact" to the navigation links for the footer
  const footerLinks = [...NAV_LINKS, { name: "Contact", href: "/contact" }];

  return (
    <footer className="bg-gray-800 text-gray-400 border-t border-gray-700">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main footer content aligned in a single row */}
        <div className="flex flex-col sm:flex-row items-center justify-between h-24">
          
          {/* Left Side: Logo and Copyright */}
          <div className="flex items-center mb-4 sm:mb-0">
            <img 
              src={MAIN_LOGO} 
              alt="Patil and Company Logo" 
              className="h-12 bg-white p-1 rounded-md" 
            />
            <p className="ml-4 text-sm">
              &copy; {new Date().getFullYear()} Patil and Company (P and Co).
            </p>
          </div>

          {/* Right Side: Horizontal Quick Links */}
          <nav>
            <ul className="flex flex-wrap justify-center sm:justify-end items-center space-x-4 sm:space-x-6">
              {footerLinks.map(link => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-sm hover:text-yellow-400 transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

        </div>
      </div>
    </footer>
  );
};

export default Footer;

