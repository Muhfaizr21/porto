import React, { useState, useEffect } from 'react';
import { FiX } from 'react-icons/fi';

const AwardModal = ({ isOpen, onClose, award, onSave }) => {
  const [formData, setFormData] = useState({
    title: '',
    issuer: '',
    date: '',
    description: '',
    url: ''
  });

  useEffect(() => {
    if (award) {
      setFormData({
        title: award.title || '',
        issuer: award.issuer || '',
        date: award.date || '',
        description: award.description || '',
        url: award.url || ''
      });
    } else {
      setFormData({
        title: '',
        issuer: '',
        date: '',
        description: '',
        url: ''
      });
    }
  }, [award, isOpen]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(formData);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-fade-in">
      <div className="bg-surface w-full max-w-2xl rounded-3xl shadow-xl overflow-hidden flex flex-col max-h-[90vh]">
        <div className="p-6 border-b border-outline-variant flex justify-between items-center shrink-0">
          <h2 className="text-2xl font-headline-md text-primary">
            {award ? 'Edit Penghargaan' : 'Tambah Penghargaan Baru'}
          </h2>
          <button 
            onClick={onClose}
            className="p-2 hover:bg-surface-container rounded-full transition-colors text-secondary hover:text-primary"
          >
            <FiX size={24} />
          </button>
        </div>

        <div className="p-6 overflow-y-auto flex-1">
          <form id="award-form" onSubmit={handleSubmit} className="space-y-6">
            
            <div>
              <label className="block text-sm font-medium text-primary mb-2">
                Judul Penghargaan <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="title"
                required
                value={formData.title}
                onChange={handleChange}
                placeholder="Misal: Juara 1 Web Design"
                className="w-full px-4 py-3 bg-surface border border-outline-variant rounded-xl focus:outline-none focus:border-blue-500 transition-colors text-primary"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-primary mb-2">
                  Pemberi / Institusi <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="issuer"
                  required
                  value={formData.issuer}
                  onChange={handleChange}
                  placeholder="Misal: Universitas X"
                  className="w-full px-4 py-3 bg-surface border border-outline-variant rounded-xl focus:outline-none focus:border-blue-500 transition-colors text-primary"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-primary mb-2">
                  Tahun/Tanggal <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="date"
                  required
                  value={formData.date}
                  onChange={handleChange}
                  placeholder="Misal: 2024"
                  className="w-full px-4 py-3 bg-surface border border-outline-variant rounded-xl focus:outline-none focus:border-blue-500 transition-colors text-primary"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-primary mb-2">
                URL Bukti/Sertifikat (Opsional)
              </label>
              <input
                type="url"
                name="url"
                value={formData.url}
                onChange={handleChange}
                placeholder="https://..."
                className="w-full px-4 py-3 bg-surface border border-outline-variant rounded-xl focus:outline-none focus:border-blue-500 transition-colors text-primary"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-primary mb-2">
                Deskripsi
              </label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleChange}
                rows="4"
                placeholder="Ceritakan sedikit tentang penghargaan ini..."
                className="w-full px-4 py-3 bg-surface border border-outline-variant rounded-xl focus:outline-none focus:border-blue-500 transition-colors text-primary resize-y"
              />
            </div>

          </form>
        </div>

        <div className="p-6 border-t border-outline-variant bg-surface-container shrink-0 flex justify-end gap-4">
          <button
            type="button"
            onClick={onClose}
            className="px-6 py-2.5 rounded-xl font-medium text-secondary hover:bg-surface border border-outline-variant transition-colors"
          >
            Batal
          </button>
          <button
            type="submit"
            form="award-form"
            className="px-6 py-2.5 rounded-xl font-medium bg-blue-600 text-white hover:bg-blue-700 transition-colors"
          >
            Simpan
          </button>
        </div>
      </div>
    </div>
  );
};

export default AwardModal;
