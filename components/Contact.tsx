
import React from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const Contact: React.FC = () => {
    const sectionRef = useScrollAnimation<HTMLElement>();

  return (
    <section id="contact" className="py-20 bg-gray-50 fade-in-section" ref={sectionRef}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">Get In Touch</h2>
          <p className="mt-4 text-lg text-gray-600">We're Here to Help Build Your Vision</p>
        </div>

        <div className="max-w-2xl mx-auto">
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Contact Details</h3>
            <p className="text-gray-600 mb-6">For business inquiries write to, call, email or WhatsApp us.</p>
            
            <div className="space-y-4">
              <div className="flex items-start">
                <i data-lucide="map-pin" className="w-5 h-5 text-yellow-600 mr-4 mt-1 flex-shrink-0"></i>
                <div>
                  <h4 className="font-semibold text-gray-800">Address</h4>
                  <p className="text-gray-600">Patil and Company (P and Co)<br/>House No 45, At Navandhe, Post Jambrung<br/>Tal. Khalapur, Dist. Raigad<br/>Maharashtra - 410203</p>
                </div>
              </div>
              <div className="flex items-start">
                <i data-lucide="mail" className="w-5 h-5 text-yellow-600 mr-4 mt-1 flex-shrink-0"></i>
                <div>
                  <h4 className="font-semibold text-gray-800">Email</h4>
                  <a href="mailto:patilandcom@gmail.com" className="text-yellow-600 hover:text-yellow-700">patilandcom@gmail.com</a>
                </div>
              </div>
              <div className="flex items-start">
                <i data-lucide="phone" className="w-5 h-5 text-yellow-600 mr-4 mt-1 flex-shrink-0"></i>
                <div>
                  <h4 className="font-semibold text-gray-800">Telephone</h4>
                  <a href="tel:9823382053" className="block text-gray-600 hover:text-yellow-600">9823382053</a>
                  <a href="tel:9422094539" className="block text-gray-600 hover:text-yellow-600">9422094539</a>
                  <a href="tel:9923214165" className="block text-gray-600 hover:text-yellow-600">9923214165</a>
                  <a href="tel:9158444165" className="block text-gray-600 hover:text-yellow-600">9158444165</a>
                </div>
              </div>
            </div>

            <a href="https://wa.me/919823382053" target="_blank" rel="noopener noreferrer" className="mt-8 inline-flex items-center justify-center w-full bg-green-500 text-white font-bold py-3 px-6 rounded-md hover:bg-green-600 transition-colors">
              <i data-lucide="message-circle" className="w-5 h-5 mr-3"></i>
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
