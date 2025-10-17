import React, { useState, useEffect } from 'react';
import { PROJECTS } from '../constants';
import type { Project, ProjectCategory } from '../types';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const categories: ProjectCategory[] = ['Industrial', 'Commercial', 'Residential'];
const allCategories: (ProjectCategory | 'All')[] = ['All', ...categories];


const Projects: React.FC = () => {
  const [filter, setFilter] = useState<ProjectCategory | 'All'>('All');
  const [filteredProjects, setFilteredProjects] = useState<Project[]>(PROJECTS);
  const sectionRef = useScrollAnimation<HTMLElement>();

  useEffect(() => {
    if (filter === 'All') {
      setFilteredProjects(PROJECTS);
    } else {
      setFilteredProjects(PROJECTS.filter(p => p.category === filter));
    }
  }, [filter]);

  return (
    <section id="projects" className="py-20 bg-white fade-in-section" ref={sectionRef}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">Our Projects</h2>
          <p className="mt-4 text-lg text-gray-600">A Glimpse into Our Portfolio of Excellence</p>
        </div>

        <div className="flex justify-center flex-wrap gap-2 mb-10">
          {allCategories.map(category => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`px-6 py-2 rounded-full font-medium text-sm transition-colors ${
                filter === category
                  ? 'bg-yellow-600 text-white'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div key={project.id} className="bg-white rounded-lg shadow-lg overflow-hidden group">
              <div className="relative overflow-hidden">
                <img src={project.imageUrl} alt={project.title} className="w-full h-56 object-cover transform group-hover:scale-110 transition-transform duration-500" />
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                   <a href="#" className="text-white border-2 border-white py-2 px-4 rounded-md hover:bg-white hover:text-black transition-colors">
                    View Details
                  </a>
                </div>
              </div>
              <div className="p-6">
                <span className="inline-block bg-yellow-100 text-yellow-800 text-xs font-semibold px-2.5 py-0.5 rounded-full mb-2">{project.category}</span>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{project.title}</h3>
                <p className="text-gray-600 text-sm">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;