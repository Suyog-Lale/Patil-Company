import React, { useState } from 'react';
import { SERVICE_CATEGORIES } from '../constants';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const Services: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);
  const sectionRef = useScrollAnimation<HTMLElement>();

  return (
    <section id="services" className="py-20 bg-white fade-in-section" ref={sectionRef}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">Our Services</h2>
          <p className="mt-4 text-lg text-gray-600">Comprehensive Solutions for Every Need</p>
        </div>

        <div className="flex flex-col">
          <div className="mb-8 border-b border-gray-200">
            <div className="flex flex-wrap -mb-px justify-center">
              {SERVICE_CATEGORIES.map((category, index) => (
                <button
                  key={category.name}
                  onClick={() => setActiveTab(index)}
                  className={`py-4 px-1 mx-2 sm:mx-4 border-b-2 text-sm sm:text-base font-medium transition-colors duration-300 ${
                    activeTab === index
                      ? 'border-yellow-600 text-yellow-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </div>
          
          <div className="bg-gray-50 p-8 rounded-lg shadow-inner">
              {SERVICE_CATEGORIES.map((category, index) => (
                  <div key={category.name} className={`${activeTab === index ? 'block' : 'hidden'}`}>
                      <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">{category.name}</h3>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-4">
                          {category.services.map(service => (
                              <li key={service} className="flex items-start">
                                  <i data-lucide="check" className="w-5 h-5 text-yellow-600 mr-3 flex-shrink-0 mt-1"></i>
                                  <span className="text-gray-700">{service}</span>
                              </li>
                          ))}
                      </ul>
                  </div>
              ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;