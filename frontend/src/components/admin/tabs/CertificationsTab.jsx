import React, { useState, useEffect } from 'react';
import { FiPlus, FiEdit2, FiTrash2 } from 'react-icons/fi';
import CertificationModal from './../CertificationModal';

const CertificationsTab = () => {
  const [certifications, setCertifications] = useState([]);
  const [loadingCertifications, setLoadingCertifications] = useState(true);
  const [errorCertifications, setErrorCertifications] = useState('');
  
  const [isCertificationModalOpen, setIsCertificationModalOpen] = useState(false);
  const [editingCertification, setEditingCertification] = useState(null);

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

  useEffect(() => {
    fetchCertifications();
  }, []);

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
      if (res.ok) {
        setCertifications(prev => prev.filter(c => c.id !== id));
      } else {
        alert('Gagal menghapus sertifikasi');
      }
    } catch (err) {
      alert('Gagal menghubungi server');
    }
  };

  return (
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

      <CertificationModal 
        isOpen={isCertificationModalOpen} 
        onClose={() => setIsCertificationModalOpen(false)} 
        certification={editingCertification} 
        onSave={() => {
          setIsCertificationModalOpen(false);
          fetchCertifications();
        }} 
      />
    </div>
  );
};

export default CertificationsTab;
