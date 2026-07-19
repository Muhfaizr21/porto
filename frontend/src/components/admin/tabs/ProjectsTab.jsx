import React, { useState, useEffect } from 'react';
import { FiPlus, FiFolder, FiHome, FiEdit2, FiTrash2, FiSearch, FiGrid, FiList, FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import ProjectModal from './../ProjectModal';

const ProjectsTab = () => {
  const [projects, setProjects] = useState([]);
  const [loadingProjects, setLoadingProjects] = useState(true);
  const [errorProjects, setErrorProjects] = useState('');
  const [projectSearchTerm, setProjectSearchTerm] = useState('');
  const [projectCurrentPage, setProjectCurrentPage] = useState(1);
  const [projectViewMode, setProjectViewMode] = useState('grid');
  const projectsPerPage = 9;

  const [isProjectModalOpen, setIsProjectModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const fetchProjects = async () => {
    try {
      setLoadingProjects(true);
      const res = await fetch('/api/projects');
      const data = await res.json();
      if (res.ok) setProjects(data.data);
      else setErrorProjects(data.error);
    } catch (err) {
      setErrorProjects('Gagal memuat proyek.');
    } finally {
      setLoadingProjects(false);
    }
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  const openAddProjectModal = () => {
    setSelectedProject(null);
    setIsProjectModalOpen(true);
  };

  const openEditProjectModal = (project) => {
    setSelectedProject(project);
    setIsProjectModalOpen(true);
  };

  const handleDeleteProject = async (id) => {
    if (!window.confirm('Yakin ingin menghapus proyek ini?')) return;
    try {
      const res = await fetch(`/api/admin/projects/${id}`, {
        method: 'DELETE',
        headers: { 'Authorization': `Bearer ${localStorage.getItem('token')}` }
      });
      if (res.ok) {
        setProjects(prev => prev.filter(p => p.id !== id));
      } else {
        alert('Gagal menghapus proyek');
      }
    } catch (err) {
      alert('Gagal menghubungi server');
    }
  };

  const filteredProjects = projects.filter(p => p.title.toLowerCase().includes(projectSearchTerm.toLowerCase()));
  const totalProjectPages = Math.ceil(filteredProjects.length / projectsPerPage) || 1;
  const paginatedProjects = filteredProjects.slice((projectCurrentPage - 1) * projectsPerPage, projectCurrentPage * projectsPerPage);

  return (
    <div className="animate-fade-in">
      <header className="mb-8 flex flex-col lg:flex-row justify-between lg:items-end gap-6">
        <div>
          <h2 className="text-3xl font-headline-md text-primary">Pekerjaan Terpilih</h2>
          <p className="text-secondary mt-2">Kelola proyek portofolio Anda.</p>
        </div>
        <button 
          onClick={openAddProjectModal}
          className="w-full sm:w-auto flex items-center justify-center gap-2 bg-primary text-on-primary px-5 py-2.5 rounded-xl font-label-md hover:bg-neutral-800 transition-colors shrink-0"
        >
          <FiPlus /> Tambah Proyek
        </button>
      </header>

      {loadingProjects ? (
        <div className="text-center py-20 text-secondary"><div className="inline-block w-8 h-8 border-2 border-primary border-t-transparent rounded-full animate-spin mb-4"></div><p>Memuat proyek...</p></div>
      ) : errorProjects ? (
        <div className="p-6 bg-red-500/10 text-red-500 rounded-2xl border border-red-500/20">{errorProjects}</div>
      ) : (
        <div className="space-y-6">
          <div className="flex flex-col sm:flex-row gap-4 justify-between">
            <div className="relative w-full max-w-md">
              <FiSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-secondary" />
              <input
                type="text"
                placeholder="Cari proyek berdasarkan judul..."
                value={projectSearchTerm}
                onChange={(e) => {
                  setProjectSearchTerm(e.target.value);
                  setProjectCurrentPage(1);
                }}
                className="w-full pl-11 pr-4 py-3 bg-surface border border-outline-variant rounded-2xl focus:outline-none focus:border-blue-500 transition-colors text-primary"
              />
            </div>
            <div className="flex bg-surface-container rounded-xl p-1 border border-outline-variant shrink-0 self-start sm:self-auto">
              <button
                onClick={() => setProjectViewMode('grid')}
                className={`p-2 rounded-lg transition-colors flex items-center justify-center ${projectViewMode === 'grid' ? 'bg-primary text-on-primary shadow-sm' : 'text-secondary hover:text-primary'}`}
              >
                <FiGrid />
              </button>
              <button
                onClick={() => setProjectViewMode('table')}
                className={`p-2 rounded-lg transition-colors flex items-center justify-center ${projectViewMode === 'table' ? 'bg-primary text-on-primary shadow-sm' : 'text-secondary hover:text-primary'}`}
              >
                <FiList />
              </button>
            </div>
          </div>

          {projectViewMode === 'grid' ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {paginatedProjects.map(project => (
                <div key={project.id} className="bg-surface rounded-3xl border border-outline-variant shadow-sm overflow-hidden flex flex-col group">
                  <div className="aspect-video bg-surface-container relative overflow-hidden">
                    {project.image ? (
                      <img src={project.image.startsWith('http') ? project.image : `/api/uploads/${project.image}`} alt={project.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center text-secondary/50">
                        <FiFolder className="text-4xl" />
                      </div>
                    )}
                  </div>
                  <div className="p-6 flex-1 flex flex-col">
                    <div className="flex justify-between items-start gap-4 mb-2">
                      <h3 className="text-xl font-headline-sm text-primary line-clamp-2">{project.title}</h3>
                      <span className="text-xs bg-surface-container text-secondary px-3 py-1 rounded-full shrink-0">{project.year}</span>
                    </div>
                    <p className="text-sm text-secondary mb-4 line-clamp-3">{project.description}</p>
                    
                    <div className="mt-auto pt-4 flex items-center justify-between border-t border-outline-variant">
                      <div className="flex gap-2">
                        {project.url && <a href={project.url} target="_blank" rel="noreferrer" className="p-2 text-secondary hover:text-primary transition-colors"><FiHome /></a>}
                      </div>
                      <div className="flex gap-2">
                        <button onClick={() => openEditProjectModal(project)} className="p-2 text-blue-500 hover:bg-blue-500/10 rounded-xl transition-colors"><FiEdit2 /></button>
                        <button onClick={() => handleDeleteProject(project.id)} className="p-2 text-red-500 hover:bg-red-500/10 rounded-xl transition-colors"><FiTrash2 /></button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="bg-surface border border-outline-variant rounded-2xl overflow-hidden overflow-x-auto">
              <table className="w-full text-left border-collapse min-w-[600px]">
                <thead className="bg-surface-container text-secondary text-sm">
                  <tr>
                    <th className="py-4 px-6 font-medium">Gambar</th>
                    <th className="py-4 px-6 font-medium">Judul</th>
                    <th className="py-4 px-6 font-medium hidden md:table-cell">Tahun</th>
                    <th className="py-4 px-6 font-medium">Link</th>
                    <th className="py-4 px-6 font-medium text-right">Aksi</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-outline-variant text-sm text-primary">
                  {paginatedProjects.map(project => (
                    <tr key={project.id} className="hover:bg-surface-container/50 transition-colors">
                      <td className="py-3 px-6">
                        <div className="w-16 h-12 bg-surface-container rounded-lg overflow-hidden relative">
                          {project.image ? (
                            <img src={project.image.startsWith('http') ? project.image : `/api/uploads/${project.image}`} alt={project.title} className="w-full h-full object-cover" />
                          ) : (
                            <div className="w-full h-full flex items-center justify-center text-secondary/50">
                              <FiFolder />
                            </div>
                          )}
                        </div>
                      </td>
                      <td className="py-3 px-6 font-medium">{project.title}</td>
                      <td className="py-3 px-6 hidden md:table-cell text-secondary">{project.year}</td>
                      <td className="py-3 px-6 text-secondary">
                        {project.url ? <a href={project.url} target="_blank" rel="noreferrer" className="text-blue-500 hover:underline line-clamp-1">{project.url}</a> : '-'}
                      </td>
                      <td className="py-3 px-6 text-right">
                        <div className="flex justify-end gap-2">
                          <button onClick={() => openEditProjectModal(project)} className="p-2 text-blue-500 hover:bg-blue-500/10 rounded-xl transition-colors"><FiEdit2 /></button>
                          <button onClick={() => handleDeleteProject(project.id)} className="p-2 text-red-500 hover:bg-red-500/10 rounded-xl transition-colors"><FiTrash2 /></button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
          
          {totalProjectPages > 1 && (
            <div className="flex items-center justify-center gap-4 mt-8 border-t border-outline-variant pt-6">
              <button 
                onClick={() => setProjectCurrentPage(prev => Math.max(prev - 1, 1))}
                disabled={projectCurrentPage === 1}
                className="p-2 rounded-xl border border-outline-variant text-secondary hover:bg-surface-container hover:text-primary transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <FiChevronLeft />
              </button>
              <span className="text-sm font-medium text-secondary">
                Halaman {projectCurrentPage} dari {totalProjectPages}
              </span>
              <button 
                onClick={() => setProjectCurrentPage(prev => Math.min(prev + 1, totalProjectPages))}
                disabled={projectCurrentPage === totalProjectPages}
                className="p-2 rounded-xl border border-outline-variant text-secondary hover:bg-surface-container hover:text-primary transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <FiChevronRight />
              </button>
            </div>
          )}
        </div>
      )}

      <ProjectModal 
        isOpen={isProjectModalOpen} 
        onClose={() => setIsProjectModalOpen(false)} 
        project={selectedProject} 
        onSave={() => {
          setIsProjectModalOpen(false);
          fetchProjects();
        }} 
      />
    </div>
  );
};

export default ProjectsTab;
