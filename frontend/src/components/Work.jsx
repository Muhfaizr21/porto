import React, { useState } from 'react';
import { projects } from '../data/projects';

const Work = () => {
  const [visibleCount, setVisibleCount] = useState(6);

  const handleLoadMore = () => {
    setVisibleCount(prevCount => prevCount + 6);
  };

  return (
    <section id="work" className="bg-surface py-section-gap border-t border-outline-variant">
      <div className="px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="reveal-on-scroll">
            <span className="font-label-sm text-secondary uppercase tracking-widest mb-4 block">Pekerjaan Terpilih</span>
            <h2 className="font-headline-lg text-headline-lg text-primary">
              Proyek, <em className="italic font-medium text-blue-600">end-to-end</em>.
            </h2>
          </div>
          <p className="font-body-md text-secondary max-w-sm reveal-on-scroll" style={{ animationDelay: '0.1s' }}>
            Portofolio {projects.length} proyek GitHub saya. Dari aplikasi e-commerce hingga sistem manajemen dan platform AI.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {projects.slice(0, visibleCount).map((project, index) => (
            <a 
              key={index}
              href={project.url} 
              target="_blank" 
              rel="noreferrer" 
              className="group cursor-pointer block reveal-on-scroll"
              style={{ animationDelay: `${(index % 3) * 0.1}s` }}
            >
              <div className="aspect-video bg-surface-container rounded-2xl overflow-hidden mb-4 relative shadow-sm group-hover:shadow-lg transition-all duration-500">
                <div className="absolute inset-0 bg-neutral-900/10 group-hover:bg-transparent transition-colors duration-300 z-20"></div>
                
                {/* Fallback pattern */}
                <div className={`absolute inset-0 w-full h-full ${project.color.split(' ')[0]} flex items-center justify-center group-hover:scale-105 transition-transform duration-700 z-0`}>
                  <span className={`font-headline-md ${project.color.split(' ')[1]} px-4 text-center truncate`}>
                    {project.title.split(' ')[0]}
                  </span>
                </div>

                {/* Image */}
                {project.image && (
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 z-10"
                    onError={(e) => { e.target.style.display = 'none'; }}
                  />
                )}
              </div>
              <div className="flex justify-between items-start mb-2">
                <h3 className="font-headline-sm text-primary group-hover:text-blue-600 transition-colors truncate pr-2">{project.title}</h3>
                <span className="font-label-sm text-secondary flex-shrink-0">{project.year}</span>
              </div>
              <p className="font-body-sm text-secondary mb-3 line-clamp-2">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, tagIndex) => (
                  <span key={tagIndex} className="font-label-sm uppercase bg-surface-container text-secondary px-2 py-0.5 rounded text-[10px]">
                    {tag}
                  </span>
                ))}
              </div>
            </a>
          ))}
        </div>

        {visibleCount < projects.length && (
          <div className="flex justify-center mt-8 reveal-on-scroll">
            <button 
              onClick={handleLoadMore}
              className="px-8 py-3 rounded-full border border-outline hover:border-blue-600 hover:text-blue-600 transition-colors font-label-md text-primary"
            >
              Muat Lebih Banyak Proyek
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Work;
