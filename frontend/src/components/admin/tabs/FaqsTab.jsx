import React, { useState, useEffect } from 'react';
import { FiPlus, FiEdit2, FiTrash2, FiSearch, FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import FaqModal from './../FaqModal';

const FaqsTab = () => {
  const [faqs, setFaqs] = useState([]);
  const [loadingFaqs, setLoadingFaqs] = useState(true);
  const [errorFaqs, setErrorFaqs] = useState('');
  const [faqSearchTerm, setFaqSearchTerm] = useState('');
  const [faqCurrentPage, setFaqCurrentPage] = useState(1);
  const faqsPerPage = 10;

  const [isFaqModalOpen, setIsFaqModalOpen] = useState(false);
  const [selectedFaq, setSelectedFaq] = useState(null);

  const fetchFaqs = async () => {
    try {
      setLoadingFaqs(true);
      const res = await fetch('/api/faqs');
      const data = await res.json();
      if (res.ok) setFaqs(data.data);
      else setErrorFaqs(data.error);
    } catch (err) {
      setErrorFaqs('Gagal memuat FAQ.');
    } finally {
      setLoadingFaqs(false);
    }
  };

  useEffect(() => {
    fetchFaqs();
  }, []);

  const openAddFaqModal = () => {
    setSelectedFaq(null);
    setIsFaqModalOpen(true);
  };

  const openEditFaqModal = (faq) => {
    setSelectedFaq(faq);
    setIsFaqModalOpen(true);
  };

  const handleDeleteFaq = async (id) => {
    if (!window.confirm('Yakin ingin menghapus FAQ ini?')) return;
    try {
      const res = await fetch(`/api/admin/faqs/${id}`, {
        method: 'DELETE',
        headers: { 'Authorization': `Bearer ${localStorage.getItem('token')}` }
      });
      if (res.ok) {
        setFaqs(prev => prev.filter(p => p.id !== id));
      } else {
        alert('Gagal menghapus FAQ');
      }
    } catch (err) {
      alert('Gagal menghubungi server');
    }
  };

  const filteredFaqs = faqs.filter(p => p.question.toLowerCase().includes(faqSearchTerm.toLowerCase()));
  const totalFaqPages = Math.ceil(filteredFaqs.length / faqsPerPage) || 1;
  const paginatedFaqs = filteredFaqs.slice((faqCurrentPage - 1) * faqsPerPage, faqCurrentPage * faqsPerPage);

  return (
    <div className="animate-fade-in">
      <header className="mb-8 flex flex-col lg:flex-row justify-between lg:items-end gap-6">
        <div>
          <h2 className="text-3xl font-headline-md text-primary">FAQ</h2>
          <p className="text-secondary mt-2">Kelola pertanyaan yang sering diajukan.</p>
        </div>
        <button 
          onClick={openAddFaqModal}
          className="w-full sm:w-auto flex items-center justify-center gap-2 bg-primary text-on-primary px-5 py-2.5 rounded-xl font-label-md hover:bg-neutral-800 transition-colors shrink-0"
        >
          <FiPlus /> Tambah FAQ
        </button>
      </header>

      {loadingFaqs ? (
        <div className="text-center py-20 text-secondary"><div className="inline-block w-8 h-8 border-2 border-primary border-t-transparent rounded-full animate-spin mb-4"></div><p>Memuat FAQ...</p></div>
      ) : errorFaqs ? (
        <div className="p-6 bg-red-500/10 text-red-500 rounded-2xl border border-red-500/20">{errorFaqs}</div>
      ) : (
        <div className="space-y-6">
          <div className="flex flex-col sm:flex-row gap-4 justify-between">
            <div className="relative w-full max-w-md">
              <FiSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-secondary" />
              <input
                type="text"
                placeholder="Cari berdasarkan pertanyaan..."
                value={faqSearchTerm}
                onChange={(e) => {
                  setFaqSearchTerm(e.target.value);
                  setFaqCurrentPage(1);
                }}
                className="w-full pl-11 pr-4 py-3 bg-surface border border-outline-variant rounded-2xl focus:outline-none focus:border-blue-500 transition-colors text-primary"
              />
            </div>
          </div>

          <div className="bg-surface border border-outline-variant rounded-2xl overflow-hidden overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[600px]">
              <thead className="bg-surface-container text-secondary text-sm">
                <tr>
                  <th className="py-4 px-6 font-medium">Pertanyaan</th>
                  <th className="py-4 px-6 font-medium">Jawaban</th>
                  <th className="py-4 px-6 font-medium text-right">Aksi</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-outline-variant text-sm text-primary">
                {paginatedFaqs.map(faq => (
                  <tr key={faq.id} className="hover:bg-surface-container/50 transition-colors">
                    <td className="py-3 px-6 font-medium">{faq.question}</td>
                    <td className="py-3 px-6 text-secondary line-clamp-2 max-w-[300px]">{faq.answer}</td>
                    <td className="py-3 px-6 text-right">
                      <div className="flex justify-end gap-2">
                        <button onClick={() => openEditFaqModal(faq)} className="p-2 text-blue-500 hover:bg-blue-500/10 rounded-xl transition-colors"><FiEdit2 /></button>
                        <button onClick={() => handleDeleteFaq(faq.id)} className="p-2 text-red-500 hover:bg-red-500/10 rounded-xl transition-colors"><FiTrash2 /></button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            {paginatedFaqs.length === 0 && (
              <div className="p-8 text-center text-secondary">Belum ada FAQ.</div>
            )}
          </div>
          
          {totalFaqPages > 1 && (
            <div className="flex items-center justify-center gap-4 mt-8 border-t border-outline-variant pt-6">
              <button 
                onClick={() => setFaqCurrentPage(prev => Math.max(prev - 1, 1))}
                disabled={faqCurrentPage === 1}
                className="p-2 rounded-xl border border-outline-variant text-secondary hover:bg-surface-container hover:text-primary transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <FiChevronLeft />
              </button>
              <span className="text-sm font-medium text-secondary">
                Halaman {faqCurrentPage} dari {totalFaqPages}
              </span>
              <button 
                onClick={() => setFaqCurrentPage(prev => Math.min(prev + 1, totalFaqPages))}
                disabled={faqCurrentPage === totalFaqPages}
                className="p-2 rounded-xl border border-outline-variant text-secondary hover:bg-surface-container hover:text-primary transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <FiChevronRight />
              </button>
            </div>
          )}
        </div>
      )}

      <FaqModal 
        isOpen={isFaqModalOpen} 
        onClose={() => setIsFaqModalOpen(false)} 
        faq={selectedFaq} 
        onSave={() => {
          setIsFaqModalOpen(false);
          fetchFaqs();
        }} 
      />
    </div>
  );
};

export default FaqsTab;
