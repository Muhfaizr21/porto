import React, { useState, useEffect } from 'react';
import { FiPlus, FiEdit2, FiTrash2 } from 'react-icons/fi';
import EducationModal from './../EducationModal';

const EducationsTab = () => {
  const [educations, setEducations] = useState([]);
  const [loadingEducations, setLoadingEducations] = useState(true);
  const [errorEducations, setErrorEducations] = useState('');
  
  const [isEduModalOpen, setIsEduModalOpen] = useState(false);
  const [editingEdu, setEditingEdu] = useState(null);

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

  useEffect(() => {
    fetchEducations();
  }, []);

  const openAddEduModal = () => {
    setEditingEdu(null);
    setIsEduModalOpen(true);
  };

  const openEditEduModal = (edu) => {
    setEditingEdu(edu);
    setIsEduModalOpen(true);
  };

  const handleDeleteEdu = async (id) => {
    if (!window.confirm('Yakin ingin menghapus riwayat pendidikan ini?')) return;
    try {
      const res = await fetch(`/api/admin/educations/${id}`, {
        method: 'DELETE',
        headers: { 'Authorization': `Bearer ${localStorage.getItem('token')}` }
      });
      if (res.ok) {
        setEducations(prev => prev.filter(e => e.id !== id));
      } else {
        alert('Gagal menghapus pendidikan');
      }
    } catch (err) {
      alert('Gagal menghubungi server');
    }
  };

  return (
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

      <EducationModal 
        isOpen={isEduModalOpen} 
        onClose={() => setIsEduModalOpen(false)} 
        education={editingEdu} 
        onSave={() => {
          setIsEduModalOpen(false);
          fetchEducations();
        }} 
      />
    </div>
  );
};

export default EducationsTab;
