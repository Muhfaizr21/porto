import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FiLogOut, FiMessageSquare, FiUser, FiHome, FiClock, FiFolder, FiBriefcase, FiBook, FiAward, FiPlus, FiEdit2, FiTrash2, FiSearch, FiChevronLeft, FiChevronRight, FiGrid, FiList } from 'react-icons/fi';
import ProjectModal from '../components/admin/ProjectModal';
import ExperienceModal from '../components/admin/ExperienceModal';
import EducationModal from '../components/admin/EducationModal';
import CertificationModal from '../components/admin/CertificationModal';
import AwardModal from '../components/admin/AwardModal';
import TestimonialModal from '../components/admin/TestimonialModal';
import AboutTab from '../components/admin/tabs/AboutTab';

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState('about');
  
  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const [projects, setProjects] = useState([]);
  const [loadingProjects, setLoadingProjects] = useState(false);
  const [errorProjects, setErrorProjects] = useState('');
  const [projectSearchTerm, setProjectSearchTerm] = useState('');
  const [projectCurrentPage, setProjectCurrentPage] = useState(1);
  const [projectViewMode, setProjectViewMode] = useState('grid');
  const projectsPerPage = 9;

  const [experiences, setExperiences] = useState([]);
  const [loadingExperiences, setLoadingExperiences] = useState(false);
  const [errorExperiences, setErrorExperiences] = useState('');

  const [educations, setEducations] = useState([]);
  const [loadingEducations, setLoadingEducations] = useState(false);
  const [errorEducations, setErrorEducations] = useState('');

  const [certifications, setCertifications] = useState([]);
  const [loadingCertifications, setLoadingCertifications] = useState(false);
  const [errorCertifications, setErrorCertifications] = useState('');

  const [awards, setAwards] = useState([]);
  const [loadingAwards, setLoadingAwards] = useState(false);
  const [errorAwards, setErrorAwards] = useState('');

  const [testimonials, setTestimonials] = useState([]);
  const [loadingTestimonials, setLoadingTestimonials] = useState(false);
  const [errorTestimonials, setErrorTestimonials] = useState('');

  // Modal States
  const [isProjectModalOpen, setIsProjectModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const [isExpModalOpen, setIsExpModalOpen] = useState(false);
  const [selectedExp, setSelectedExp] = useState(null);

  const [isEducationModalOpen, setIsEducationModalOpen] = useState(false);
  const [editingEducation, setEditingEducation] = useState(null);

  const [isCertificationModalOpen, setIsCertificationModalOpen] = useState(false);
  const [editingCertification, setEditingCertification] = useState(null);

  const [isAwardModalOpen, setIsAwardModalOpen] = useState(false);
  const [editingAward, setEditingAward] = useState(null);

  const [isTestimonialModalOpen, setIsTestimonialModalOpen] = useState(false);
  const [editingTestimonial, setEditingTestimonial] = useState(null);

  const navigate = useNavigate();
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      navigate('/admin/login');
      return;
    }

    const fetchContacts = async () => {
      try {
        setLoading((true));
        const res = await fetch('/api/admin/contacts', {
          headers: { 'Authorization': `Bearer ${token}` }
        });
        if (res.status === 401) {
          localStorage.removeItem('token');
          navigate('/admin/login');
          return;
        }
        const data = await res.json();
        if (res.ok) setContacts(data.data);
        else setError(data.error);
      } catch (err) {
        setError('Gagal menghubungi server.');
      } finally {
        setLoading(false);
      }
    };

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

    const fetchExperiences = async () => {
      try {
        setLoadingExperiences(true);
        const res = await fetch('/api/experiences');
        const data = await res.json();
        if (res.ok) setExperiences(data.data);
        else setErrorExperiences(data.error);
      } catch (err) {
        setErrorExperiences('Gagal memuat pengalaman.');
      } finally {
        setLoadingExperiences(false);
      }
    };

    const fetchEducations = async () => {
      try {
        setLoadingEducations(true);
        const res = await fetch('/api/educations');
        const data = await res.json();
        if (res.ok) setEducations(data.data);
        else setErrorEducations(data.error);
      } catch (err) {
        setErrorEducations('Gagal memuat pendidikan.');
      } finally {
        setLoadingEducations(false);
      }
    };

    const fetchCertifications = async () => {
      try {
        setLoadingCertifications(true);
        const res = await fetch('/api/certifications');
        const data = await res.json();
        if (res.ok) setCertifications(data.data);
        else setErrorCertifications(data.error);
      } catch (err) {
        setErrorCertifications('Gagal memuat sertifikasi.');
      } finally {
        setLoadingCertifications(false);
      }
    };
    
    const fetchAwards = async () => {
      try {
        setLoadingAwards(true);
        const res = await fetch('/api/awards');
        const data = await res.json();
        if (res.ok) setAwards(data);
        else setErrorAwards(data.error || 'Gagal memuat penghargaan');
      } catch (err) {
        setErrorAwards('Gagal menghubungi server');
      } finally {
        setLoadingAwards(false);
      }
    };

    const fetchTestimonials = async () => {
      try {
        setLoadingTestimonials(true);
        const res = await fetch('/api/testimonials');
        const data = await res.json();
        if (res.ok) setTestimonials(data);
        else setErrorTestimonials(data.error || 'Gagal memuat testimonial');
      } catch (err) {
        setErrorTestimonials('Gagal menghubungi server');
      } finally {
        setLoadingTestimonials(false);
      }
    };

    if (activeTab === 'contacts') fetchContacts();
    if (activeTab === 'projects') fetchProjects();
    if (activeTab === 'experiences') fetchExperiences();
    if (activeTab === 'educations') fetchEducations();
    if (activeTab === 'certifications') fetchCertifications();
    if (activeTab === 'awards') fetchAwards();
    if (activeTab === 'testimonials') fetchTestimonials();
  }, [activeTab, navigate]);

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/admin/login');
  };

  const openAddProjectModal = () => { setSelectedProject(null); setIsProjectModalOpen(true); };
  const openEditProjectModal = (project) => { setSelectedProject(project); setIsProjectModalOpen(true); };
  const handleDeleteProject = async (id) => {
    if (!window.confirm('Yakin ingin menghapus proyek ini? Aksi ini tidak dapat dibatalkan.')) return;
    try {
      const res = await fetch(`/api/admin/projects/${id}`, {
        method: 'DELETE',
        headers: { 'Authorization': `Bearer ${localStorage.getItem('token')}` }
      });
      if (res.ok) setProjects(prev => prev.filter(p => p.id !== id));
      else alert('Gagal menghapus proyek');
    } catch (err) {
      alert('Gagal menghubungi server');
    }
  };

  const openAddExpModal = () => { setSelectedExp(null); setIsExpModalOpen(true); };
  const openEditExpModal = (exp) => { setSelectedExp(exp); setIsExpModalOpen(true); };
  const handleDeleteExp = async (id) => {
    if (!window.confirm('Yakin ingin menghapus pengalaman ini?')) return;
    try {
      const res = await fetch(`/api/admin/experiences/${id}`, {
        method: 'DELETE',
        headers: { 'Authorization': `Bearer ${localStorage.getItem('token')}` }
      });
      if (res.ok) setExperiences(prev => prev.filter(p => p.id !== id));
      else alert('Gagal menghapus pengalaman');
    } catch (err) {
      alert('Gagal menghubungi server');
    }
  };
  
  const openAddEduModal = () => { setEditingEducation(null); setIsEducationModalOpen(true); };
  const openEditEduModal = (edu) => { setEditingEducation(edu); setIsEducationModalOpen(true); };
  const handleDeleteEdu = async (id) => {
    if (!window.confirm('Yakin ingin menghapus pendidikan ini?')) return;
    try {
      const res = await fetch(`/api/admin/educations/${id}`, {
        method: 'DELETE',
        headers: { 'Authorization': `Bearer ${localStorage.getItem('token')}` }
      });
      if (res.ok) setEducations(prev => prev.filter(p => p.id !== id));
      else alert('Gagal menghapus pendidikan');
    } catch (err) {
      alert('Gagal menghubungi server');
    }
  };
  
  const openAddCertificationModal = () => {
    setEditingCertification(null);
    setIsCertificationModalOpen(true);
  };
  const openEditCertificationModal = (cert) => {
    setEditingCertification(cert);
    setIsCertificationModalOpen(true);
  };
  
  const handleDeleteCert = async (id) => {
    if (!window.confirm('Yakin ingin menghapus sertifikasi ini?')) return;
    try {
      const res = await fetch(`/api/admin/certifications/${id}`, {
        method: 'DELETE',
        headers: { 'Authorization': `Bearer ${localStorage.getItem('token')}` }
      });
      if (res.ok) setCertifications(prev => prev.filter(p => p.id !== id));
      else alert('Gagal menghapus sertifikasi');
    } catch (err) {
      alert('Gagal menghubungi server');
    }
  };

  const openAddAwardModal = () => {
    setEditingAward(null);
    setIsAwardModalOpen(true);
  };
  const openEditAwardModal = (award) => {
    setEditingAward(award);
    setIsAwardModalOpen(true);
  };
  const handleDeleteAward = async (id) => {
    if (!window.confirm('Yakin ingin menghapus penghargaan ini?')) return;
    try {
      const res = await fetch(`/api/admin/awards/${id}`, {
        method: 'DELETE',
        headers: { 'Authorization': `Bearer ${localStorage.getItem('token')}` }
      });
      if (res.ok) setAwards(prev => prev.filter(p => p.id !== id));
      else alert('Gagal menghapus penghargaan');
    } catch (err) {
      alert('Gagal menghubungi server');
    }
  };

  const openAddTestimonialModal = () => { setEditingTestimonial(null); setIsTestimonialModalOpen(true); };
  const openEditTestimonialModal = (item) => { setEditingTestimonial(item); setIsTestimonialModalOpen(true); };
  const handleDeleteTestimonial = async (id) => {
    if (!window.confirm('Yakin ingin menghapus testimonial ini?')) return;
    try {
      const res = await fetch(`/api/admin/testimonials/${id}`, {
        method: 'DELETE',
        headers: { 'Authorization': `Bearer ${localStorage.getItem('token')}` }
      });
      if (res.ok) setTestimonials(prev => prev.filter(p => p.ID !== id));
      else alert('Gagal menghapus testimonial');
    } catch (err) {
      alert('Gagal menghubungi server');
    }
  };
  const handleSaveAward = async (formData) => {
    try {
      const url = editingAward ? `/api/admin/awards/${editingAward.id}` : '/api/admin/awards';
      const method = editingAward ? 'PUT' : 'POST';
      const res = await fetch(url, {
        method,
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        },
        body: JSON.stringify(formData)
      });

      if (res.ok) {
        setIsAwardModalOpen(false);
        const fetchAwards = async () => {
          const res = await fetch('/api/awards');
          if (res.ok) setAwards((await res.json()));
        };
        fetchAwards();
      } else {
        alert('Gagal menyimpan penghargaan');
      }
    } catch (err) {
      alert('Gagal menghubungi server');
    }
  };

  const filteredProjects = projects.filter(p => p.title.toLowerCase().includes(projectSearchTerm.toLowerCase()));
  const totalProjectPages = Math.ceil(filteredProjects.length / projectsPerPage) || 1;
  const paginatedProjects = filteredProjects.slice((projectCurrentPage - 1) * projectsPerPage, projectCurrentPage * projectsPerPage);

  return (
    <div className="min-h-screen bg-surface-container flex flex-col md:flex-row">
      {/* Sidebar */}
      <aside className="w-full md:w-64 bg-surface border-r border-outline-variant flex flex-col">
        <div className="p-6 border-b border-outline-variant">
          <h1 className="text-xl font-headline-sm text-primary">Superadmin</h1>
          <p className="text-xs text-secondary mt-1">Muhfaizr21 Dashboard</p>
        </div>
        
        <nav className="flex-1 p-4 space-y-2">
          <button onClick={() => setActiveTab('about')} className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl font-medium transition-colors ${activeTab === 'about' ? 'bg-surface-container-highest text-primary' : 'text-secondary hover:bg-surface-container-highest hover:text-primary'}`}>
            <FiUser size={20} />
            <span>Tentang Saya</span>
          </button>
          <button onClick={() => setActiveTab('contacts')} className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl font-medium transition-colors ${activeTab === 'contacts' ? 'bg-surface-container-highest text-primary' : 'text-secondary hover:bg-surface-container-highest hover:text-primary'}`}>
            <FiMessageSquare />
            Pesan Masuk
          </button>
          <button onClick={() => setActiveTab('projects')} className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl font-medium transition-colors ${activeTab === 'projects' ? 'bg-surface-container-highest text-primary' : 'text-secondary hover:bg-surface-container-highest hover:text-primary'}`}>
            <FiFolder />
            Proyek
          </button>
          <button onClick={() => setActiveTab('experiences')} className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl font-medium transition-colors ${activeTab === 'experiences' ? 'bg-surface-container-highest text-primary' : 'text-secondary hover:bg-surface-container-highest hover:text-primary'}`}>
            <FiBriefcase />
            Pengalaman
          </button>
          <button onClick={() => setActiveTab('educations')} className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl font-medium transition-colors ${activeTab === 'educations' ? 'bg-surface-container-highest text-primary' : 'text-secondary hover:bg-surface-container-highest hover:text-primary'}`}>
            <FiBook />
            Pendidikan
          </button>
          <button onClick={() => setActiveTab('certifications')} className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl font-medium transition-colors ${activeTab === 'certifications' ? 'bg-surface-container-highest text-primary' : 'text-secondary hover:bg-surface-container-highest hover:text-primary'}`}>
            <FiAward className="text-xl" />
            <span>Sertifikasi</span>
          </button>
          <button 
            onClick={() => setActiveTab('awards')} 
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${activeTab === 'awards' ? 'bg-surface-container-highest font-medium text-primary shadow-sm' : 'text-secondary hover:bg-surface-container-highest hover:text-primary'}`}
          >
            <FiAward className="text-xl" />
            <span>Penghargaan</span>
          </button>
          <button 
            onClick={() => setActiveTab('testimonials')} 
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${activeTab === 'testimonials' ? 'bg-surface-container-highest font-medium text-primary shadow-sm' : 'text-secondary hover:bg-surface-container-highest hover:text-primary'}`}
          >
            <FiMessageSquare className="text-xl" />
            <span>Testimonial</span>
          </button>
          <a href="/" target="_blank" className="flex items-center gap-3 text-secondary hover:bg-surface-container-highest hover:text-primary px-4 py-3 rounded-xl font-medium transition-colors mt-4">
            <FiHome />
            Lihat Web
          </a>
        </nav>

        <div className="p-4 border-t border-outline-variant">
          <button 
            onClick={handleLogout}
            className="flex items-center gap-3 text-red-500 hover:bg-red-500/10 w-full px-4 py-3 rounded-xl font-medium transition-colors"
          >
            <FiLogOut />
            Keluar
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6 md:p-10 bg-surface-container-lowest overflow-y-auto">
        {activeTab === 'about' && <AboutTab />}
        
        {activeTab === 'contacts' && (
          <div className="animate-fade-in">
            <header className="mb-10">
              <h2 className="text-3xl font-headline-md text-primary">Pesan Pengunjung</h2>
              <p className="text-secondary mt-2">Daftar pesan yang masuk dari formulir kontak portofolio.</p>
            </header>

        {loading ? (
          <div className="text-center py-20 text-secondary">
            <div className="inline-block w-8 h-8 border-2 border-primary border-t-transparent rounded-full animate-spin mb-4"></div>
            <p>Memuat data...</p>
          </div>
        ) : error ? (
          <div className="p-6 bg-red-500/10 text-red-500 rounded-2xl border border-red-500/20">
            {error}
          </div>
        ) : contacts.length === 0 ? (
          <div className="text-center py-20 bg-surface border border-outline-variant border-dashed rounded-3xl">
            <FiMessageSquare className="mx-auto text-4xl text-secondary/50 mb-4" />
            <p className="text-secondary">Belum ada pesan yang masuk.</p>
          </div>
        ) : (
          <div className="grid gap-6">
            {contacts.map((contact) => (
              <div key={contact.id} className="bg-surface p-6 md:p-8 rounded-3xl border border-outline-variant shadow-sm hover:shadow-md transition-shadow">
                <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-6">
                  <div>
                    <h3 className="text-xl font-headline-sm text-primary">{contact.name}</h3>
                    <a href={`mailto:${contact.email}`} className="text-sm text-secondary hover:text-primary transition-colors">
                      {contact.email}
                    </a>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-secondary bg-surface-container px-3 py-1.5 rounded-full whitespace-nowrap">
                    <FiClock />
                    {new Date(contact.created_at).toLocaleString('id-ID', { dateStyle: 'medium', timeStyle: 'short' })}
                  </div>
                </div>
                <div className="bg-surface-container-lowest p-6 rounded-2xl border border-outline-variant/50 text-secondary leading-relaxed whitespace-pre-wrap">
                  {contact.message}
                </div>
              </div>
            ))}
          </div>
        )}
        </div>
        )}

        {activeTab === 'projects' && (
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

                {/* Pagination */}
                {totalProjectPages > 1 && (
                  <div className="flex items-center justify-center gap-2 mt-8">
                    <button
                      onClick={() => setProjectCurrentPage(prev => Math.max(1, prev - 1))}
                      disabled={projectCurrentPage === 1}
                      className="p-2 rounded-xl border border-outline-variant bg-surface text-secondary hover:bg-surface-container disabled:opacity-50 transition-colors"
                    >
                      <FiChevronLeft size={20} />
                    </button>
                    <span className="text-sm text-secondary font-medium px-4">
                      Halaman {projectCurrentPage} dari {totalProjectPages}
                    </span>
                    <button
                      onClick={() => setProjectCurrentPage(prev => Math.min(totalProjectPages, prev + 1))}
                      disabled={projectCurrentPage === totalProjectPages}
                      className="p-2 rounded-xl border border-outline-variant bg-surface text-secondary hover:bg-surface-container disabled:opacity-50 transition-colors"
                    >
                      <FiChevronRight size={20} />
                    </button>
                  </div>
                )}
              </div>
            )}
          </div>
        )}

        {activeTab === 'experiences' && (
          <div className="animate-fade-in">
            <header className="mb-8 flex flex-col lg:flex-row justify-between lg:items-end gap-6">
              <div>
                <h2 className="text-3xl font-headline-md text-primary">Perjalanan Karier</h2>
                <p className="text-secondary mt-2">Kelola riwayat pengalaman profesional yang tampil di portofolio.</p>
              </div>
              <button 
                onClick={openAddExpModal}
                className="w-full sm:w-auto flex items-center justify-center gap-2 bg-primary text-on-primary px-5 py-2.5 rounded-xl font-label-md hover:bg-neutral-800 transition-colors shrink-0"
              >
                <FiPlus /> Tambah Pengalaman
              </button>
            </header>

            {loadingExperiences ? (
              <div className="text-center py-20 text-secondary"><div className="inline-block w-8 h-8 border-2 border-primary border-t-transparent rounded-full animate-spin mb-4"></div><p>Memuat pengalaman...</p></div>
            ) : errorExperiences ? (
              <div className="p-6 bg-red-500/10 text-red-500 rounded-2xl border border-red-500/20">{errorExperiences}</div>
            ) : (
              <div className="flex flex-col gap-4">
                {experiences.map(exp => (
                  <div key={exp.id} className="bg-surface p-6 rounded-3xl border border-outline-variant shadow-sm flex flex-col md:flex-row gap-6">
                    <div className="flex-1">
                      <div className="flex flex-wrap items-center gap-3 mb-2">
                        <h3 className="text-xl font-headline-sm text-primary">{exp.title}</h3>
                        <span className="text-xs bg-surface-container text-secondary px-3 py-1 rounded-full">
                          {exp.start_month} {exp.start_year} — {exp.is_current_role ? 'Saat ini' : `${exp.end_month} ${exp.end_year}`}
                        </span>
                      </div>
                      <p className="text-primary font-medium mb-1">
                        {exp.company} {exp.employment_type && <span className="text-secondary font-normal">· {exp.employment_type}</span>}
                      </p>
                      <p className="text-sm text-secondary mb-4 flex items-center gap-2">
                        <FiHome size={14}/> {exp.location} {exp.location_type && `(${exp.location_type})`}
                      </p>
                      
                      <div className="text-sm text-secondary [&>p]:mb-3 [&>ul]:list-disc [&>ul]:ml-5 [&>ul>li]:mb-2 [&>ul>li::marker]:text-blue-600 [&>a]:text-blue-600" dangerouslySetInnerHTML={{ __html: exp.description }} />
                      
                      {exp.skills && (
                        <div className="mt-4 pt-4 border-t border-outline-variant flex flex-wrap gap-2">
                          <span className="text-xs font-medium text-secondary py-1">Keahlian:</span>
                          {exp.skills.split(',').map((skill, index) => (
                            <span key={index} className="text-xs bg-blue-500/10 text-blue-600 px-3 py-1 rounded-full border border-blue-500/20">{skill.trim()}</span>
                          ))}
                        </div>
                      )}
                    </div>
                    <div className="flex md:flex-col gap-2 shrink-0">
                      <button onClick={() => openEditExpModal(exp)} className="p-3 text-blue-500 bg-blue-500/10 hover:bg-blue-500/20 rounded-xl transition-colors"><FiEdit2 /></button>
                      <button onClick={() => handleDeleteExp(exp.id)} className="p-3 text-red-500 bg-red-500/10 hover:bg-red-500/20 rounded-xl transition-colors"><FiTrash2 /></button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {activeTab === 'educations' && (
          <div className="animate-fade-in">
            <header className="mb-8 flex flex-col lg:flex-row justify-between lg:items-end gap-6">
              <div>
                <h2 className="text-3xl font-headline-md text-primary">Latar Belakang Akademik</h2>
                <p className="text-secondary mt-2">Kelola riwayat pendidikan formal dan non-formal.</p>
              </div>
              <button 
                onClick={openAddEduModal}
                className="w-full sm:w-auto flex items-center justify-center gap-2 bg-primary text-on-primary px-5 py-2.5 rounded-xl font-label-md hover:bg-neutral-800 transition-colors shrink-0"
              >
                <FiPlus /> Tambah Pendidikan
              </button>
            </header>

            {loadingEducations ? (
              <div className="text-center py-20 text-secondary"><div className="inline-block w-8 h-8 border-2 border-primary border-t-transparent rounded-full animate-spin mb-4"></div><p>Memuat pendidikan...</p></div>
            ) : errorEducations ? (
              <div className="p-6 bg-red-500/10 text-red-500 rounded-2xl border border-red-500/20">{errorEducations}</div>
            ) : (
              <div className="flex flex-col gap-4">
                {educations.map(edu => (
                  <div key={edu.id} className="bg-surface p-6 rounded-3xl border border-outline-variant shadow-sm flex flex-col md:flex-row gap-6">
                    <div className="flex-1">
                      <div className="flex flex-wrap items-center gap-3 mb-2">
                        <h3 className="text-xl font-headline-sm text-primary">{edu.school}</h3>
                        <span className="text-xs bg-surface-container text-secondary px-3 py-1 rounded-full">
                          {edu.start_month} {edu.start_year} — {edu.end_year ? `${edu.end_month} ${edu.end_year}` : 'Saat ini'}
                        </span>
                      </div>
                      <p className="text-primary font-medium mb-1">
                        {edu.degree} {edu.field_of_study && <span className="text-secondary font-normal">· {edu.field_of_study}</span>}
                      </p>
                      {edu.grade && (
                        <p className="text-sm text-secondary mb-4 flex items-center gap-2">
                           Nilai: {edu.grade}
                        </p>
                      )}
                      
                      {edu.description && (
                        <div className="text-sm text-secondary [&>p]:mb-3 [&>ul]:list-disc [&>ul]:ml-5 [&>ul>li]:mb-2 [&>ul>li::marker]:text-blue-600" dangerouslySetInnerHTML={{ __html: edu.description }} />
                      )}
                    </div>
                    <div className="flex md:flex-col gap-2 shrink-0">
                      <button onClick={() => openEditEduModal(edu)} className="p-3 text-blue-500 bg-blue-500/10 hover:bg-blue-500/20 rounded-xl transition-colors"><FiEdit2 /></button>
                      <button onClick={() => handleDeleteEdu(edu.id)} className="p-3 text-red-500 bg-red-500/10 hover:bg-red-500/20 rounded-xl transition-colors"><FiTrash2 /></button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {activeTab === 'certifications' && (
          <div className="animate-fade-in">
            <header className="mb-8 flex flex-col lg:flex-row justify-between lg:items-end gap-6">
              <div>
                <h2 className="text-3xl font-headline-md text-primary">Lisensi & Sertifikasi</h2>
                <p className="text-secondary mt-2">Kelola lisensi dan sertifikasi yang pernah Anda dapatkan.</p>
              </div>
              <button 
                onClick={openAddCertificationModal}
                className="w-full sm:w-auto flex items-center justify-center gap-2 bg-primary text-on-primary px-5 py-2.5 rounded-xl font-label-md hover:bg-neutral-800 transition-colors shrink-0"
              >
                <FiPlus /> Tambah Sertifikasi
              </button>
            </header>

            {loadingCertifications ? (
              <div className="text-center py-20 text-secondary"><div className="inline-block w-8 h-8 border-2 border-primary border-t-transparent rounded-full animate-spin mb-4"></div><p>Memuat sertifikasi...</p></div>
            ) : errorCertifications ? (
              <div className="p-6 bg-red-500/10 text-red-500 rounded-2xl border border-red-500/20">{errorCertifications}</div>
            ) : (
              <div className="flex flex-col gap-4">
                {certifications.map(cert => (
                  <div key={cert.id} className="bg-surface p-6 rounded-3xl border border-outline-variant shadow-sm flex flex-col md:flex-row gap-6">
                    <div className="flex-1">
                      <div className="flex flex-wrap items-center gap-3 mb-2">
                        <h3 className="text-xl font-headline-sm text-primary">{cert.name}</h3>
                      </div>
                      <p className="text-primary font-medium mb-1">
                        {cert.issuing_organization}
                      </p>
                      <p className="text-sm text-secondary mb-4">
                        Diterbitkan: {cert.issue_month} {cert.issue_year} {cert.expiration_year ? `· Berlaku s/d: ${cert.expiration_month} ${cert.expiration_year}` : ''}
                      </p>
                      {cert.credential_id && (
                        <p className="text-sm text-secondary mb-2">ID Kredensial: {cert.credential_id}</p>
                      )}
                    </div>
                    <div className="flex md:flex-col gap-2 shrink-0">
                      <button onClick={() => openEditCertificationModal(cert)} className="p-3 text-blue-500 bg-blue-500/10 hover:bg-blue-500/20 rounded-xl transition-colors"><FiEdit2 /></button>
                      <button onClick={() => handleDeleteCert(cert.id)} className="p-3 text-red-500 bg-red-500/10 hover:bg-red-500/20 rounded-xl transition-colors"><FiTrash2 /></button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {activeTab === 'awards' && (
          <div className="animate-fade-in">
            <header className="mb-8 flex flex-col lg:flex-row justify-between lg:items-end gap-6">
              <div>
                <h2 className="text-3xl font-headline-md text-primary">Penghargaan & Gelar</h2>
                <p className="text-secondary mt-2">Kelola penghargaan dan gelar kehormatan Anda.</p>
              </div>
              <button 
                onClick={openAddAwardModal}
                className="w-full sm:w-auto flex items-center justify-center gap-2 bg-primary text-on-primary px-5 py-2.5 rounded-xl font-label-md hover:bg-neutral-800 transition-colors shrink-0"
              >
                <FiPlus /> Tambah Penghargaan
              </button>
            </header>

            {loadingAwards ? (
              <div className="text-center py-20 text-secondary"><div className="inline-block w-8 h-8 border-2 border-primary border-t-transparent rounded-full animate-spin mb-4"></div><p>Memuat penghargaan...</p></div>
            ) : errorAwards ? (
              <div className="p-6 bg-red-500/10 text-red-500 rounded-2xl border border-red-500/20">{errorAwards}</div>
            ) : (
              <div className="bg-surface border border-outline-variant rounded-2xl overflow-hidden overflow-x-auto">
                <table className="w-full text-left border-collapse min-w-[600px]">
                  <thead className="bg-surface-container text-secondary text-sm">
                    <tr>
                      <th className="py-4 px-6 font-medium">Penghargaan</th>
                      <th className="py-4 px-6 font-medium">Pemberi</th>
                      <th className="py-4 px-6 font-medium hidden md:table-cell">Tanggal</th>
                      <th className="py-4 px-6 font-medium text-right">Aksi</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-outline-variant text-sm text-primary">
                    {awards.map(award => (
                      <tr key={award.id} className="hover:bg-surface-container/50 transition-colors">
                        <td className="py-3 px-6 font-medium">{award.title}</td>
                        <td className="py-3 px-6">{award.issuer}</td>
                        <td className="py-3 px-6 hidden md:table-cell text-secondary">{award.date}</td>
                        <td className="py-3 px-6 text-right">
                          <div className="flex justify-end gap-2">
                            <button onClick={() => openEditAwardModal(award)} className="p-2 text-blue-500 hover:bg-blue-500/10 rounded-xl transition-colors"><FiEdit2 /></button>
                            <button onClick={() => handleDeleteAward(award.id)} className="p-2 text-red-500 hover:bg-red-500/10 rounded-xl transition-colors"><FiTrash2 /></button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        )}

        {activeTab === 'testimonials' && (
          <div className="animate-fade-in">
            <header className="mb-8 flex flex-col lg:flex-row justify-between lg:items-end gap-6">
              <div>
                <h2 className="text-3xl font-headline-md text-primary">Testimonial</h2>
                <p className="text-secondary mt-2">Kelola testimonial dari klien atau rekan kerja Anda.</p>
              </div>
              <button 
                onClick={openAddTestimonialModal}
                className="w-full sm:w-auto flex items-center justify-center gap-2 bg-primary text-on-primary px-5 py-2.5 rounded-xl font-label-md hover:bg-neutral-800 transition-colors shrink-0"
              >
                <FiPlus /> Tambah Testimonial
              </button>
            </header>

            {loadingTestimonials ? (
              <div className="text-center py-20 text-secondary"><div className="inline-block w-8 h-8 border-2 border-primary border-t-transparent rounded-full animate-spin mb-4"></div><p>Memuat testimonial...</p></div>
            ) : errorTestimonials ? (
              <div className="p-6 bg-red-500/10 text-red-500 rounded-2xl border border-red-500/20">{errorTestimonials}</div>
            ) : (
              <div className="bg-surface border border-outline-variant rounded-2xl overflow-hidden overflow-x-auto">
                <table className="w-full text-left border-collapse min-w-[600px]">
                  <thead className="bg-surface-container text-secondary text-sm">
                    <tr>
                      <th className="py-4 px-6 font-medium">Klien / Rekan</th>
                      <th className="py-4 px-6 font-medium">Perusahaan</th>
                      <th className="py-4 px-6 font-medium hidden md:table-cell">Pesan</th>
                      <th className="py-4 px-6 font-medium text-right">Aksi</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-outline-variant text-sm text-primary">
                    {testimonials.map(item => (
                      <tr key={item.ID} className="hover:bg-surface-container/50 transition-colors">
                        <td className="py-3 px-6 font-medium">{item.client_name}</td>
                        <td className="py-3 px-6">{item.company}</td>
                        <td className="py-3 px-6 hidden md:table-cell text-secondary truncate max-w-xs">{item.message}</td>
                        <td className="py-3 px-6 text-right">
                          <div className="flex justify-end gap-2">
                            <button onClick={() => openEditTestimonialModal(item)} className="p-2 text-blue-500 hover:bg-blue-500/10 rounded-xl transition-colors"><FiEdit2 /></button>
                            <button onClick={() => handleDeleteTestimonial(item.ID)} className="p-2 text-red-500 hover:bg-red-500/10 rounded-xl transition-colors"><FiTrash2 /></button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        )}

      </main>

      <ProjectModal 
        isOpen={isProjectModalOpen} 
        onClose={() => setIsProjectModalOpen(false)} 
        project={selectedProject} 
        onSave={() => {
          setIsProjectModalOpen(false);
          const fetchProjects = async () => {
            const res = await fetch('/api/projects');
            if (res.ok) setProjects((await res.json()).data);
          };
          fetchProjects();
        }} 
      />

      <ExperienceModal 
        isOpen={isExpModalOpen} 
        onClose={() => setIsExpModalOpen(false)} 
        experience={selectedExp} 
        onSave={() => {
          setIsExpModalOpen(false);
          const fetchExperiences = async () => {
            const res = await fetch('/api/experiences');
            if (res.ok) setExperiences((await res.json()).data);
          };
          fetchExperiences();
        }} 
      />

      <EducationModal 
        isOpen={isEducationModalOpen} 
        onClose={() => setIsEducationModalOpen(false)} 
        education={editingEducation} 
        onSave={() => {
          setIsEducationModalOpen(false);
          const fetchEducations = async () => {
            const res = await fetch('/api/educations');
            if (res.ok) setEducations((await res.json()).data);
          };
          fetchEducations();
        }} 
      />

      <CertificationModal 
        isOpen={isCertificationModalOpen} 
        onClose={() => setIsCertificationModalOpen(false)} 
        certification={editingCertification} 
        onSave={() => {
          setIsCertificationModalOpen(false);
          const fetchCertifications = async () => {
            const res = await fetch('/api/certifications');
            if (res.ok) setCertifications((await res.json()).data);
          };
          fetchCertifications();
        }} 
      />

      <AwardModal 
        isOpen={isAwardModalOpen} 
        onClose={() => setIsAwardModalOpen(false)} 
        award={editingAward} 
        onSave={handleSaveAward} 
      />

      <TestimonialModal 
        isOpen={isTestimonialModalOpen} 
        onClose={() => setIsTestimonialModalOpen(false)} 
        testimonial={editingTestimonial} 
        onSuccess={() => {
          setIsTestimonialModalOpen(false);
          const fetchTestimonials = async () => {
            const res = await fetch('/api/testimonials');
            if (res.ok) setTestimonials(await res.json());
          };
          fetchTestimonials();
        }}
      />

    </div>
  );
};

export default Dashboard;
