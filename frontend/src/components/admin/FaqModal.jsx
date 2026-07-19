import React, { useState, useEffect } from 'react';
import { FiX } from 'react-icons/fi';

const FaqModal = ({ isOpen, onClose, faq, onSave }) => {
  const [formData, setFormData] = useState({
    question: '',
    answer: ''
  });
  
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    if (faq) {
      setFormData({
        question: faq.question || '',
        answer: faq.answer || ''
      });
    } else {
      setFormData({
        question: '',
        answer: ''
      });
    }
    setError('');
  }, [faq, isOpen]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const token = localStorage.getItem('token');
      
      const url = faq ? `/api/admin/faqs/${faq.id}` : '/api/admin/faqs';
      const method = faq ? 'PUT' : 'POST';

      const res = await fetch(url, {
        method,
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      const data = await res.json();
      if (res.ok) {
        onSave();
        onClose();
      } else {
        setError(data.error || 'Terjadi kesalahan saat menyimpan');
      }
    } catch (err) {
      setError('Gagal menghubungi server');
    } finally {
      setLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
      <div className="bg-surface w-full max-w-2xl rounded-3xl shadow-xl flex flex-col max-h-[90vh]">
        <div className="flex items-center justify-between p-6 border-b border-outline-variant">
          <h2 className="text-2xl font-headline-md text-primary">
            {faq ? 'Edit FAQ' : 'Tambah FAQ'}
          </h2>
          <button onClick={onClose} className="p-2 text-secondary hover:text-primary transition-colors">
            <FiX size={24} />
          </button>
        </div>
        
        <div className="p-6 overflow-y-auto flex-1">
          {error && (
            <div className="mb-6 p-4 bg-red-500/10 text-red-500 rounded-xl border border-red-500/20">
              {error}
            </div>
          )}
          
          <form id="faq-form" onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <label className="text-sm font-medium text-secondary">Pertanyaan (Question)</label>
              <input 
                type="text" 
                name="question" 
                value={formData.question} 
                onChange={handleChange} 
                required
                className="w-full bg-surface-container border border-outline-variant rounded-xl px-4 py-2.5 text-primary focus:outline-none focus:border-blue-500 transition-colors"
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-secondary">Jawaban (Answer)</label>
              <textarea 
                name="answer" 
                value={formData.answer} 
                onChange={handleChange} 
                required
                rows={5}
                className="w-full bg-surface-container border border-outline-variant rounded-xl px-4 py-2.5 text-primary focus:outline-none focus:border-blue-500 transition-colors resize-y"
              ></textarea>
            </div>
          </form>
        </div>
        
        <div className="p-6 border-t border-outline-variant flex justify-end gap-3">
          <button 
            type="button" 
            onClick={onClose}
            className="px-5 py-2.5 rounded-xl font-label-md text-secondary hover:bg-surface-container transition-colors"
          >
            Batal
          </button>
          <button 
            type="submit" 
            form="faq-form"
            disabled={loading}
            className="px-5 py-2.5 rounded-xl font-label-md bg-primary text-on-primary hover:bg-neutral-800 transition-colors disabled:opacity-50 flex items-center gap-2"
          >
            {loading ? (
              <><span className="w-4 h-4 border-2 border-on-primary border-t-transparent rounded-full animate-spin"></span> Menyimpan...</>
            ) : (
              'Simpan FAQ'
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default FaqModal;
