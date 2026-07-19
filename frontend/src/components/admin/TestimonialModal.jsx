import React, { useState, useEffect } from 'react';
import { FiX } from 'react-icons/fi';

const TestimonialModal = ({ isOpen, onClose, testimonial, onSuccess }) => {
  const [formData, setFormData] = useState({
    quote: '',
    name: '',
    role: '',
    company: ''
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    if (testimonial) {
      setFormData({
        quote: testimonial.quote || '',
        name: testimonial.name || '',
        role: testimonial.role || '',
        company: testimonial.company || ''
      });
    } else {
      setFormData({ quote: '', name: '', role: '', company: '' });
    }
  }, [testimonial, isOpen]);

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
      const url = testimonial 
        ? `/api/admin/testimonials/${testimonial.ID}` 
        : `/api/admin/testimonials`;
      const method = testimonial ? 'PUT' : 'POST';
      
      const res = await fetch(url, {
        method,
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(formData)
      });
      
      if (!res.ok) {
        const errorData = await res.json();
        throw new Error(errorData.error || 'Terjadi kesalahan saat menyimpan testimonial');
      }

      onSuccess();
      onClose();
    } catch (err) {
      setError(err.message || 'Terjadi kesalahan saat menyimpan testimonial');
    } finally {
      setLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
      <div className="bg-surface w-full max-w-2xl rounded-2xl shadow-xl overflow-hidden animate-scale-in">
        <div className="flex justify-between items-center p-6 border-b border-outline-variant">
          <h2 className="text-xl font-headline-md text-primary">
            {testimonial ? 'Edit Testimonial' : 'Tambah Testimonial'}
          </h2>
          <button onClick={onClose} className="p-2 hover:bg-surface-container rounded-full text-secondary transition-colors">
            <FiX className="text-xl" />
          </button>
        </div>
        
        <form onSubmit={handleSubmit} className="p-6">
          {error && (
            <div className="mb-6 p-4 bg-red-500/10 text-red-500 rounded-xl border border-red-500/20">
              {error}
            </div>
          )}
          
          <div className="space-y-5">
            <div>
              <label className="block text-sm font-medium text-primary mb-2">Pesan Testimonial</label>
              <textarea
                name="quote"
                value={formData.quote}
                onChange={handleChange}
                required
                rows={4}
                className="w-full bg-surface-container border border-outline-variant rounded-xl px-4 py-3 text-primary focus:outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500 transition-all"
                placeholder="Tulis testimoni disini..."
              />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div>
                <label className="block text-sm font-medium text-primary mb-2">Nama</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full bg-surface-container border border-outline-variant rounded-xl px-4 py-3 text-primary focus:outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500 transition-all"
                  placeholder="John Doe"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-primary mb-2">Peran/Jabatan</label>
                <input
                  type="text"
                  name="role"
                  value={formData.role}
                  onChange={handleChange}
                  required
                  className="w-full bg-surface-container border border-outline-variant rounded-xl px-4 py-3 text-primary focus:outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500 transition-all"
                  placeholder="CTO / Tech Lead"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-primary mb-2">Perusahaan (Opsional)</label>
              <input
                type="text"
                name="company"
                value={formData.company}
                onChange={handleChange}
                className="w-full bg-surface-container border border-outline-variant rounded-xl px-4 py-3 text-primary focus:outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500 transition-all"
                placeholder="PT Contoh Teknologi"
              />
            </div>
          </div>
          
          <div className="mt-8 flex justify-end gap-3">
            <button
              type="button"
              onClick={onClose}
              className="px-6 py-2.5 rounded-xl text-primary font-medium hover:bg-surface-container transition-colors"
            >
              Batal
            </button>
            <button
              type="submit"
              disabled={loading}
              className="bg-brand-600 hover:bg-brand-700 text-white px-6 py-2.5 rounded-xl font-medium transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? 'Menyimpan...' : 'Simpan'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default TestimonialModal;
