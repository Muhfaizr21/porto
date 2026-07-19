import React, { useState, useEffect } from 'react';
import { FiPlus, FiHome, FiEdit2, FiTrash2 } from 'react-icons/fi';
import ExperienceModal from './../ExperienceModal';

const ExperiencesTab = () => {
  const [experiences, setExperiences] = useState([]);
  const [loadingExperiences, setLoadingExperiences] = useState(true);
  const [errorExperiences, setErrorExperiences] = useState('');
  
  const [isExpModalOpen, setIsExpModalOpen] = useState(false);
  const [editingExp, setEditingExp] = useState(null);

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

  useEffect(() => {
    fetchExperiences();
  }, []);

  const openAddExpModal = () => {
    setEditingExp(null);
    setIsExpModalOpen(true);
  };

  const openEditExpModal = (exp) => {
    setEditingExp(exp);
    setIsExpModalOpen(true);
  };

  const handleDeleteExp = async (id) => {
    if (!window.confirm('Yakin ingin menghapus pengalaman ini?')) return;
    try {
      const res = await fetch(`/api/admin/experiences/${id}`, {
        method: 'DELETE',
        headers: { 'Authorization': `Bearer ${localStorage.getItem('token')}` }
      });
      if (res.ok) {
        setExperiences(prev => prev.filter(e => e.id !== id));
      } else {
        alert('Gagal menghapus pengalaman');
      }
    } catch (err) {
      alert('Gagal menghubungi server');
    }
  };

  return (
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

      <ExperienceModal 
        isOpen={isExpModalOpen} 
        onClose={() => setIsExpModalOpen(false)} 
        experience={editingExp} 
        onSave={() => {
          setIsExpModalOpen(false);
          fetchExperiences();
        }} 
      />
    </div>
  );
};

export default ExperiencesTab;
