import React, { useState, useEffect } from 'react';
import { FiPlus, FiEdit2, FiTrash2 } from 'react-icons/fi';
import AwardModal from './../AwardModal';

const AwardsTab = () => {
  const [awards, setAwards] = useState([]);
  const [loadingAwards, setLoadingAwards] = useState(true);
  const [errorAwards, setErrorAwards] = useState('');
  
  const [isAwardModalOpen, setIsAwardModalOpen] = useState(false);
  const [editingAward, setEditingAward] = useState(null);

  const fetchAwards = async () => {
    try {
      setLoadingAwards(true);
      const res = await fetch('/api/awards');
      const data = await res.json();
      if (res.ok) setAwards(data.data);
      else setErrorAwards(data.error);
    } catch (err) {
      setErrorAwards('Gagal memuat penghargaan.');
    } finally {
      setLoadingAwards(false);
    }
  };

  useEffect(() => {
    fetchAwards();
  }, []);

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
      if (res.ok) {
        setAwards(prev => prev.filter(a => a.id !== id));
      } else {
        alert('Gagal menghapus penghargaan');
      }
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
        fetchAwards();
      } else {
        const data = await res.json();
        alert(`Error: ${data.error}`);
      }
    } catch (err) {
      alert('Gagal menyimpan penghargaan');
    }
  };

  return (
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

      <AwardModal 
        isOpen={isAwardModalOpen} 
        onClose={() => setIsAwardModalOpen(false)} 
        award={editingAward} 
        onSave={handleSaveAward} 
      />
    </div>
  );
};

export default AwardsTab;
