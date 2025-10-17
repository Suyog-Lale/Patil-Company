import React from 'react';
import { CLIENTS } from '../constants';
import type { Client } from '../types';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const ClientItem: React.FC<{ client: Client }> = ({ client }) => {
  if (client.logo) {
    return (
      <div className="flex justify-center items-center p-4 bg-gray-100 rounded-lg h-28">
        <img src={client.logo} alt={client.name} className="max-h-16 max-w-full client-logo" />
      </div>
    );
  }
  return (
    <div className="flex justify-center items-center p-4 bg-gray-100 rounded-lg text-center h-28 client-logo">
      <span className="font-semibold text-gray-700">{client.name}</span>
    </div>
  );
};

const Clients: React.FC = () => {
  const completedClients = CLIENTS.filter(c => c.type === 'completed');
  const ongoingClients = CLIENTS.filter(c => c.type === 'ongoing');
  const sectionRef = useScrollAnimation<HTMLElement>();

  return (
    <section id="clients" className="py-20 bg-gray-50 fade-in-section" ref={sectionRef}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">Trusted by Industry Leaders</h2>
          <p className="mt-4 text-lg text-gray-600">Our Commitment to Quality has Earned Their Trust</p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {completedClients.map((client) => (
            <ClientItem key={client.name} client={client} />
          ))}
        </div>

        <div className="mt-20">
            <div className="text-center mb-10">
                <h3 className="text-2xl font-bold text-gray-800">Current Engagements</h3>
                <div className="w-24 h-1 bg-yellow-600 mx-auto mt-2"></div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
                {ongoingClients.map((client) => (
                    <div key={client.name} className="bg-white p-6 rounded-lg shadow-lg text-center transform hover:-translate-y-2 transition-transform duration-300">
                        <h4 className="text-xl font-semibold text-gray-800">{client.name}</h4>
                    </div>
                ))}
            </div>
        </div>
      </div>
    </section>
  );
};

export default Clients;