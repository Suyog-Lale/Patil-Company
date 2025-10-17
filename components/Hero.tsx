import React from 'react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center text-white">
      <div className="absolute inset-0 bg-black opacity-60 z-10"></div>
      <div className="absolute inset-0 overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=2070&auto=format&fit=crop"
          alt="Large-scale construction site" 
          className="w-full h-full object-cover"
        />
      </div>
      <div className="relative z-20 text-center px-4">
        <h1 className="text-4xl md:text-6xl font-extrabold mb-4 leading-tight drop-shadow-lg">
          A Legacy of Excellence in Construction
        </h1>
        <p className="text-md md:text-lg max-w-3xl mx-auto mb-8 drop-shadow-lg">
          Executing residential, commercial, and industrial projects with a commitment to quality, safety, and reliability.
        </p>
        <a
          href="#services"
          className="bg-yellow-600 text-white font-bold py-3 px-8 rounded-md text-lg hover:bg-yellow-700 transition-transform transform hover:scale-105"
        >
          Explore Our Services
        </a>
      </div>
    </section>
  );
};

export default Hero;