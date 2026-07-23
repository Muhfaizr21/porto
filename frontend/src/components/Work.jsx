import React, { useState, useEffect } from 'react';
import { FiExternalLink, FiGithub } from 'react-icons/fi';

const colors = ['#f29a47', '#6b6a68', '#ed7a2b', '#b34716', '#8f3917', '#d95f1a', '#f7b773'];

const fallback = [
  { title: 'Personal Portfolio', year: '2026', description: 'Situs yang sedang Anda baca. Tata letak editorial satu halaman dengan animasi halus dan sistem tipografi yang ketat.', tags: ['React', 'Tailwind CSS', 'Vite'], color: 'bg-slate-50 text-slate-200', repo_url: 'https://itsfaiz.com/', demo_url: '' },
  { title: 'Deacourse', year: '2026', description: 'Platform kursus online dengan sistem manajemen pembelajaran terintegrasi.', tags: ['HTML', 'CSS', 'JavaScript'], color: 'bg-indigo-50 text-indigo-200', repo_url: 'https://github.com/Muhfaizr21/deacourse', demo_url: '' },
  { title: 'Simade', year: '2026', description: 'Sistem informasi manajemen desa untuk administrasi dan pelayanan publik.', tags: ['JavaScript', 'PHP'], color: 'bg-teal-50 text-teal-200', repo_url: 'https://github.com/Muhfaizr21/Simade', demo_url: '' },
  { title: 'Forzashop', year: '2025', description: 'E-commerce platform with modern UI and secure payment integration.', tags: ['React', 'Node.js', 'PostgreSQL'], color: 'bg-amber-50 text-amber-200', repo_url: '', demo_url: '' },
  { title: 'SentraKas', year: '2025', description: 'Aplikasi kasir dan manajemen keuangan untuk UMKM.', tags: ['React', 'Go', 'PostgreSQL'], color: 'bg-emerald-50 text-emerald-200', repo_url: '', demo_url: '' },
  { title: 'SIAKAD', year: '2025', description: 'Sistem Informasi Akademik untuk manajemen data mahasiswa dan perkuliahan.', tags: ['Laravel', 'MySQL'], color: 'bg-rose-50 text-rose-200', repo_url: '', demo_url: '' },
  { title: 'Neofeeder', year: '2025', description: 'Automated content aggregator and RSS feed manager.', tags: ['Python', 'Go'], color: 'bg-violet-50 text-violet-200', repo_url: '', demo_url: '' },
  { title: 'Tolaria', year: '2025', description: 'Digital vault and secure credential management system.', tags: ['React', 'Go', 'PostgreSQL'], color: 'bg-cyan-50 text-cyan-200', repo_url: '', demo_url: '' },
  { title: 'DagangCommerce', year: '2024', description: 'Full-featured e-commerce platform for Indonesian SMEs.', tags: ['Laravel', 'PHP', 'MySQL'], color: 'bg-orange-50 text-orange-200', repo_url: '', demo_url: '' },
];

const Work = () => {
  const [visibleCount, setVisibleCount] = useState(6);
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeTag, setActiveTag] = useState('All');
  const [imgErrors, setImgErrors] = useState({});

  useEffect(() => {
    fetch('/api/projects').then(r => r.json()).then(d => setProjects(d.data || [])).catch(() => setProjects(fallback)).finally(() => setLoading(false));
  }, []);

  const getTagsArray = (tags) => {
    if (!tags) return [];
    if (Array.isArray(tags)) return tags;
    try {
      const parsed = JSON.parse(tags);
      return Array.isArray(parsed) ? parsed : [];
    } catch (e) {
      return [tags];
    }
  };

  const allTags = ['All', ...new Set(projects.flatMap(p => getTagsArray(p.tags)))];
  const filtered = activeTag === 'All' ? projects : projects.filter(p => getTagsArray(p.tags).includes(activeTag));
  const visible = filtered.slice(0, visibleCount);

  const pickColor = (i) => colors[i % colors.length];

  return (
    <section id="work" className="py-section-gap">
      <div className="px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
        <div className="flex items-baseline justify-between mb-12">
          <p className="label-sm text-brand-600">Selected projects</p>
          <p className="text-sm text-secondary">{projects.length} total</p>
        </div>

        <div className="flex flex-wrap gap-2 mb-10">
          {allTags.map(tag => (
            <button key={tag} onClick={() => { setActiveTag(tag); setVisibleCount(6); }}
              className={`px-4 py-1.5 text-xs rounded-full border transition-all ${
                activeTag === tag ? 'bg-primary text-on-primary border-primary' : 'bg-transparent text-secondary border-outline-variant hover:border-primary/40'
              }`}>
              {tag}
            </button>
          ))}
        </div>

        {loading ? (
          <div className="py-20 text-center text-secondary">Loading...</div>
        ) : (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 lg:gap-x-12 gap-y-10">
              {visible.map((p, i) => (
                <div key={p.id || i} className="group flex flex-col gap-5 pb-8 border-b border-outline-variant/40 reveal" style={{ transitionDelay: `${(i % 6) * 0.05}s` }}>
                  <div className="flex gap-5 items-center">
                    <div className="w-14 h-14 md:w-16 md:h-16 rounded-xl overflow-hidden flex-shrink-0 flex items-center justify-center text-lg font-bold text-white text-center leading-tight" style={{ backgroundColor: pickColor(i) }}>
                      {p.image && !imgErrors[p.id || i] ? (
                        <img src={p.image.startsWith('http') ? p.image : `/uploads/${p.image}`} alt={p.title} className="w-full h-full object-cover" onError={() => setImgErrors(prev => ({...prev, [p.id || i]: true}))} />
                      ) : (
                        p.title.split(' ').map(w => w[0]).join('').slice(0, 2).toUpperCase()
                      )}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between mb-1">
                        <h3 className="text-lg md:text-xl font-semibold text-primary truncate pr-2">{p.title}</h3>
                        <span className="text-xs font-medium text-secondary whitespace-nowrap mt-1">{p.year}</span>
                      </div>
                      <div className="flex gap-4 mt-1">
                        {p.repo_url && <a href={p.repo_url} target="_blank" rel="noreferrer" className="text-xs text-secondary hover:text-primary flex items-center gap-1.5 transition-colors"><FiGithub /> Repo</a>}
                        {p.demo_url && <a href={p.demo_url} target="_blank" rel="noreferrer" className="text-xs text-secondary hover:text-primary flex items-center gap-1.5 transition-colors"><FiExternalLink /> Demo</a>}
                      </div>
                    </div>
                  </div>
                  
                  <p className="text-sm text-secondary">{p.description}</p>
                  
                  {/* Case Study Details */}
                  {(p.problem || p.solution || p.impact) && (
                    <div className="flex flex-col gap-3 mt-2">
                      {p.problem && (
                        <div>
                          <h4 className="text-xs font-bold text-primary uppercase tracking-wider mb-1">Problem</h4>
                          <p className="text-sm text-secondary">{p.problem}</p>
                        </div>
                      )}
                      {p.solution && (
                        <div>
                          <h4 className="text-xs font-bold text-brand-600 uppercase tracking-wider mb-1">Solution</h4>
                          <p className="text-sm text-secondary">{p.solution}</p>
                        </div>
                      )}
                      {p.impact && (
                        <div>
                          <h4 className="text-xs font-bold text-emerald-600 uppercase tracking-wider mb-1">Impact</h4>
                          <p className="text-sm text-secondary">{p.impact}</p>
                        </div>
                      )}
                    </div>
                  )}
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {getTagsArray(p.tags).map((tag, ti) => (
                      <span key={ti} className="text-[10px] sm:text-xs text-secondary bg-surface-container-low border border-outline-variant/50 px-2 py-1 rounded-md">{tag}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {visibleCount < filtered.length && (
              <div className="flex justify-center mt-12">
                <button onClick={() => setVisibleCount(p => p + 6)}
                  className="px-6 py-3 text-sm font-medium text-secondary border border-outline-variant rounded-full hover:border-primary hover:text-primary transition-all">
                  Show more ({filtered.length - visibleCount})
                </button>
              </div>
            )}
          </>
        )}
      </div>
    </section>
  );
};

export default Work;
