import React, { useState, useEffect } from 'react';
import { FiX } from 'react-icons/fi';

const months = ["Januari", "Februari", "Maret", "April", "Mei", "Juni", "Juli", "Agustus", "September", "Oktober", "November", "Desember"];
const currentYear = new Date().getFullYear();
const years = Array.from({ length: 30 }, (_, i) => (currentYear + 10 - i).toString()); // allow future expiration years

const CertificationModal = ({ isOpen, onClose, certification, onSave }) => {
  const [formData, setFormData] = useState({
    name: '',
    issuing_organization: '',
    issue_month: '',
    issue_year: '',
    expiration_month: '',
    expiration_year: '',
    credential_id: '',
    credential_url: ''
  });
  
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [doesNotExpire, setDoesNotExpire] = useState(false);

  useEffect(() => {
    if (certification) {
      setFormData({
        name: certification.name || '',
        issuing_organization: certification.issuing_organization || '',
        issue_month: certification.issue_month || '',
        issue_year: certification.issue_year || '',
        expiration_month: certification.expiration_month || '',
        expiration_year: certification.expiration_year || '',
        credential_id: certification.credential_id || '',
        credential_url: certification.credential_url || ''
      });
      setDoesNotExpire(!certification.expiration_year);
    } else {
      setFormData({
        name: '',
        issuing_organization: '',
        issue_month: '',
        issue_year: '',
        expiration_month: '',
        expiration_year: '',
        credential_id: '',
        credential_url: ''
      });
      setDoesNotExpire(false);
    }
    setError('');
  }, [certification, isOpen]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (e) => {
    setDoesNotExpire(e.target.checked);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const token = localStorage.getItem('token');
      const payload = { ...formData };
      
      if (doesNotExpire) {
        payload.expiration_month = '';
        payload.expiration_year = '';
      }

      const url = certification ? `/api/admin/certifications/${certification.id}` : '/api/admin/certifications';
      const method = certification ? 'PUT' : 'POST';

      const res = await fetch(url, {
        method,
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
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
            {certification ? 'Edit Sertifikasi' : 'Tambah Sertifikasi'}
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
          
          <form id="certification-form" onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <label className="text-sm font-medium text-secondary">Nama Sertifikasi / Lisensi *</label>
              <input 
                type="text" 
                name="name" 
                value={formData.name} 
                onChange={handleChange} 
                required
                className="w-full bg-surface-container border border-outline-variant rounded-xl px-4 py-2.5 text-primary focus:outline-none focus:border-blue-500 transition-colors"
              />
            </div>
            
            <div className="space-y-2">
              <label className="text-sm font-medium text-secondary">Organisasi Penerbit *</label>
              <input 
                type="text" 
                name="issuing_organization" 
                value={formData.issuing_organization} 
                onChange={handleChange} 
                required
                className="w-full bg-surface-container border border-outline-variant rounded-xl px-4 py-2.5 text-primary focus:outline-none focus:border-blue-500 transition-colors"
              />
            </div>

            <div className="space-y-4 border p-5 rounded-2xl border-outline-variant bg-surface-container/30">
              <label className="flex items-center gap-3 cursor-pointer group mb-2">
                <div className="relative flex items-center">
                  <input
                    type="checkbox"
                    checked={doesNotExpire}
                    onChange={handleCheckboxChange}
                    className="peer appearance-none w-5 h-5 border-2 border-outline-variant rounded bg-surface-container checked:bg-blue-600 checked:border-blue-600 cursor-pointer transition-colors"
                  />
                  <svg className="absolute w-5 h-5 text-white pointer-events-none opacity-0 peer-checked:opacity-100 p-0.5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-sm font-medium text-primary group-hover:text-blue-500 transition-colors">
                  Kredensial ini tidak memiliki tanggal kedaluwarsa
                </span>
              </label>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-secondary">Tanggal Terbit</label>
                  <div className="flex gap-2">
                    <select
                      name="issue_month"
                      value={formData.issue_month}
                      onChange={handleChange}
                      className="w-full bg-surface border border-outline-variant rounded-xl px-3 py-2.5 text-primary focus:outline-none focus:border-blue-500 transition-colors"
                    >
                      <option value="">Bulan</option>
                      {months.map(m => <option key={m} value={m}>{m}</option>)}
                    </select>
                    <select
                      name="issue_year"
                      value={formData.issue_year}
                      onChange={handleChange}
                      className="w-full bg-surface border border-outline-variant rounded-xl px-3 py-2.5 text-primary focus:outline-none focus:border-blue-500 transition-colors"
                    >
                      <option value="">Tahun</option>
                      {years.map(y => <option key={y} value={y}>{y}</option>)}
                    </select>
                  </div>
                </div>

                {!doesNotExpire && (
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-secondary">Tanggal Kedaluwarsa</label>
                    <div className="flex gap-2">
                      <select
                        name="expiration_month"
                        value={formData.expiration_month}
                        onChange={handleChange}
                        className="w-full bg-surface border border-outline-variant rounded-xl px-3 py-2.5 text-primary focus:outline-none focus:border-blue-500 transition-colors"
                      >
                        <option value="">Bulan</option>
                        {months.map(m => <option key={m} value={m}>{m}</option>)}
                      </select>
                      <select
                        name="expiration_year"
                        value={formData.expiration_year}
                        onChange={handleChange}
                        className="w-full bg-surface border border-outline-variant rounded-xl px-3 py-2.5 text-primary focus:outline-none focus:border-blue-500 transition-colors"
                      >
                        <option value="">Tahun</option>
                        {years.map(y => <option key={y} value={y}>{y}</option>)}
                      </select>
                    </div>
                  </div>
                )}
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-secondary">ID Kredensial</label>
              <input 
                type="text" 
                name="credential_id" 
                value={formData.credential_id} 
                onChange={handleChange} 
                className="w-full bg-surface-container border border-outline-variant rounded-xl px-4 py-2.5 text-primary focus:outline-none focus:border-blue-500 transition-colors"
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-secondary">URL Kredensial</label>
              <input 
                type="url" 
                name="credential_url" 
                value={formData.credential_url} 
                onChange={handleChange} 
                className="w-full bg-surface-container border border-outline-variant rounded-xl px-4 py-2.5 text-primary focus:outline-none focus:border-blue-500 transition-colors"
              />
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
            form="certification-form"
            disabled={loading}
            className="px-5 py-2.5 rounded-xl font-label-md bg-primary text-on-primary hover:bg-neutral-800 transition-colors disabled:opacity-50 flex items-center gap-2"
          >
            {loading ? (
              <><span className="w-4 h-4 border-2 border-on-primary border-t-transparent rounded-full animate-spin"></span> Menyimpan...</>
            ) : (
              'Simpan Sertifikasi'
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default CertificationModal;
