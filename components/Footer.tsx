import React from 'react';
import { NAV_LINKS } from '../constants';
import logo from "../assets/logo.jpeg";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-gray-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Column 1: Logo and Mission */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-4 mb-4">
              <img src={logo} alt="Patil and Company (P and Co) Logo" className="h-16 bg-white p-2 rounded" />
              <span className="font-semibold text-white text-lg">Patil and Company (P and Co)</span>
            </div>
            <p className="text-sm text-gray-400 max-w-md">
              A legacy of excellence in construction, committed to delivering high-quality residential, commercial, and industrial projects with integrity and reliability.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {[...NAV_LINKS, {name: 'Contact', href: '#contact'}].map(link => (
                <li key={link.name}>
                  <a href={link.href} className="hover:text-yellow-400 transition-colors text-sm">{link.name}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact Info */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Contact Info</h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start">
                <i data-lucide="map-pin" className="w-4 h-4 mr-3 mt-1 flex-shrink-0"></i>
                <span>House No 45, At Navandhe, Post Jambrung, Tal. Khalapur, Dist. Raigad, Maharashtra - 410203</span>
              </li>
              <li className="flex items-start">
                <i data-lucide="mail" className="w-4 h-4 mr-3 mt-1 flex-shrink-0"></i>
                <a href="mailto:patilandcom@gmail.com" className="hover:text-yellow-400 transition-colors">patilandcom@gmail.com</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="bg-gray-900 py-4">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear() + 1} Patil and Company (P and Co). All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;