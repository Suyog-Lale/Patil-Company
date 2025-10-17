import React from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const coreValues = [
    {
        icon: 'heart-handshake',
        title: 'Employee Welfare',
        description: 'Prioritizing employee welfare ensures loyalty, commitment, and self-motivation, benefiting clients through efficient execution and consistent quality.'
    },
    {
        icon: 'trophy',
        title: 'Proven Expertise',
        description: 'Over three decades of industry experience ensures efficient execution of every project.'
    },
    {
        icon: 'shield-check',
        title: 'Safety Compliance',
        description: 'Adherence to Occupational Health and Safety (OHAS) standards ensures safe project environments.'
    },
    {
        icon: 'check-circle',
        title: 'Reliable Delivery',
        description: 'We deliver results that meet client expectations and timelines.'
    },
];

const About: React.FC = () => {
  const sectionRef = useScrollAnimation<HTMLElement>();

  return (
    <section id="about" className="py-20 bg-gray-50 fade-in-section" ref={sectionRef}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">About Us</h2>
          <p className="mt-4 text-lg text-gray-600">Building the Future, Restoring the Past</p>
        </div>
        
        <div className="max-w-4xl mx-auto text-center mb-16">
          <p className="text-gray-700 text-lg leading-relaxed">
            Registered over a decade ago, we are an MSME construction services firm carrying forward a legacy of more than three decades in the industry. We execute residential, commercial, and industrial jobs with expertise in industrial construction and repair. Our focus is on delivering high-quality work according to the specifications and schedules provided by our clients.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {coreValues.map((value) => (
            <div key={value.title} className="bg-white p-6 rounded-lg shadow-lg text-center transform hover:-translate-y-2 transition-transform duration-300">
              <div className="flex items-center justify-center h-12 w-12 rounded-full bg-yellow-100 text-yellow-600 mx-auto mb-4">
                <i data-lucide={value.icon} className="w-6 h-6"></i>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{value.title}</h3>
              <p className="text-gray-600 text-sm">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;