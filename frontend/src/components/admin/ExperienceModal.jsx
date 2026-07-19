import React, { useState, useEffect } from 'react';
import { FiX } from 'react-icons/fi';

const months = ["Januari", "Februari", "Maret", "April", "Mei", "Juni", "Juli", "Agustus", "September", "Oktober", "November", "Desember"];
const currentYear = new Date().getFullYear();
const years = Array.from({ length: 30 }, (_, i) => (currentYear - i).toString());

const employmentTypes = ["Penuh waktu", "Paruh waktu", "Wiraswasta", "Pekerja Lepas", "Kontrak", "Magang", "Musiman"];
const locationTypes = ["Di lokasi", "Hibrida", "Jarak jauh"];

const ExperienceModal = ({ isOpen, onClose, experience, onSave }) => {
  const [formData, setFormData] = useState({
    title: '',
    company: '',
    location: '',
    location_type: '',
    employment_type: '',
    start_month: '',
    start_year: '',
    end_month: '',
    end_year: '',
    is_current_role: false,
    description: '',
    skills: ''
  });
  
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    if (experience) {
      setFormData({
        title: experience.title || '',
        company: experience.company || '',
        location: experience.location || '',
        location_type: experience.location_type || '',
        employment_type: experience.employment_type || '',
        start_month: experience.start_month || '',
        start_year: experience.start_year || '',
        end_month: experience.end_month || '',
        end_year: experience.end_year || '',
        is_current_role: experience.is_current_role || false,
        description: experience.description || '',
        skills: experience.skills || ''
      });
    } else {
      setFormData({
        title: '',
        company: '',
        location: '',
        location_type: '',
        employment_type: '',
        start_month: '',
        start_year: '',
        end_month: '',
        end_year: '',
        is_current_role: false,
        description: '',
        skills: ''
      });
    }
    setError('');
  }, [experience, isOpen]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({ 
      ...prev, 
      [name]: type === 'checkbox' ? checked : value 
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const token = localStorage.getItem('token');
      
      const payload = { ...formData };
      if (payload.is_current_role) {
        payload.end_month = '';
        payload.end_year = '';
      }

      const url = experience ? `/api/admin/experiences/${experience.id}` : '/api/admin/experiences';
      const method = experience ? 'PUT' : 'POST';

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
            {experience ? 'Edit Pengalaman' : 'Tambah Pengalaman'}
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
          
          <form id="experience-form" onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <label className="text-sm font-medium text-secondary">Gelar/Jabatan *</label>
              <input 
                type="text" 
                name="title" 
                value={formData.title} 
                onChange={handleChange} 
                required
                placeholder="Misal: Frontend Developer"
                className="w-full bg-surface-container border border-outline-variant rounded-xl px-4 py-2.5 text-primary focus:outline-none focus:border-blue-500 transition-colors"
              />
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-medium text-secondary">Nama Perusahaan *</label>
                <input 
                  type="text" 
                  name="company" 
                  value={formData.company} 
                  onChange={handleChange} 
                  required
                  placeholder="Misal: PT Teknologi Indonesia"
                  className="w-full bg-surface-container border border-outline-variant rounded-xl px-4 py-2.5 text-primary focus:outline-none focus:border-blue-500 transition-colors"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-secondary">Jenis Pekerjaan</label>
                <select
                  name="employment_type"
                  value={formData.employment_type}
                  onChange={handleChange}
                  className="w-full bg-surface-container border border-outline-variant rounded-xl px-4 py-2.5 text-primary focus:outline-none focus:border-blue-500 transition-colors"
                >
                  <option value="">Pilih jenis...</option>
                  {employmentTypes.map(type => (
                    <option key={type} value={type}>{type}</option>
                  ))}
                </select>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-medium text-secondary">Lokasi</label>
                <input 
                  type="text" 
                  name="location" 
                  value={formData.location} 
                  onChange={handleChange} 
                  placeholder="Misal: Jakarta, Indonesia"
                  className="w-full bg-surface-container border border-outline-variant rounded-xl px-4 py-2.5 text-primary focus:outline-none focus:border-blue-500 transition-colors"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-secondary">Tipe Lokasi</label>
                <select
                  name="location_type"
                  value={formData.location_type}
                  onChange={handleChange}
                  className="w-full bg-surface-container border border-outline-variant rounded-xl px-4 py-2.5 text-primary focus:outline-none focus:border-blue-500 transition-colors"
                >
                  <option value="">Pilih tipe lokasi...</option>
                  {locationTypes.map(type => (
                    <option key={type} value={type}>{type}</option>
                  ))}
                </select>
              </div>
            </div>

            <div className="space-y-4 border p-5 rounded-2xl border-outline-variant bg-surface-container/30">
              <label className="flex items-center gap-3 cursor-pointer group">
                <div className="relative flex items-center">
                  <input
                    type="checkbox"
                    name="is_current_role"
                    checked={formData.is_current_role}
                    onChange={handleChange}
                    className="peer appearance-none w-5 h-5 border-2 border-outline-variant rounded bg-surface-container checked:bg-blue-600 checked:border-blue-600 cursor-pointer transition-colors"
                  />
                  <svg className="absolute w-5 h-5 text-white pointer-events-none opacity-0 peer-checked:opacity-100 p-0.5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-sm font-medium text-primary group-hover:text-blue-500 transition-colors">
                  Saya masih bekerja di peran ini
                </span>
              </label>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-secondary">Tanggal Mulai *</label>
                  <div className="flex gap-2">
                    <select
                      name="start_month"
                      value={formData.start_month}
                      onChange={handleChange}
                      required
                      className="w-full bg-surface border border-outline-variant rounded-xl px-3 py-2.5 text-primary focus:outline-none focus:border-blue-500 transition-colors"
                    >
                      <option value="">Bulan</option>
                      {months.map(m => <option key={m} value={m}>{m}</option>)}
                    </select>
                    <select
                      name="start_year"
                      value={formData.start_year}
                      onChange={handleChange}
                      required
                      className="w-full bg-surface border border-outline-variant rounded-xl px-3 py-2.5 text-primary focus:outline-none focus:border-blue-500 transition-colors"
                    >
                      <option value="">Tahun</option>
                      {years.map(y => <option key={y} value={y}>{y}</option>)}
                    </select>
                  </div>
                </div>

                {!formData.is_current_role && (
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-secondary">Tanggal Berakhir *</label>
                    <div className="flex gap-2">
                      <select
                        name="end_month"
                        value={formData.end_month}
                        onChange={handleChange}
                        required={!formData.is_current_role}
                        className="w-full bg-surface border border-outline-variant rounded-xl px-3 py-2.5 text-primary focus:outline-none focus:border-blue-500 transition-colors"
                      >
                        <option value="">Bulan</option>
                        {months.map(m => <option key={m} value={m}>{m}</option>)}
                      </select>
                      <select
                        name="end_year"
                        value={formData.end_year}
                        onChange={handleChange}
                        required={!formData.is_current_role}
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
              <label className="text-sm font-medium text-secondary">Deskripsi (Mendukung Tag HTML)</label>
              <textarea 
                name="description" 
                value={formData.description} 
                onChange={handleChange} 
                rows={5}
                placeholder="Jelaskan peran Anda, pencapaian, dan tugas yang dilakukan..."
                className="w-full bg-surface-container border border-outline-variant rounded-xl px-4 py-2.5 text-primary focus:outline-none focus:border-blue-500 transition-colors resize-y min-h-[100px]"
              ></textarea>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-secondary">Keahlian (pisahkan dengan koma)</label>
              <input 
                type="text" 
                name="skills" 
                value={formData.skills} 
                onChange={handleChange} 
                placeholder="Misal: React, TypeScript, Manajemen Tim"
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
            form="experience-form"
            disabled={loading}
            className="px-5 py-2.5 rounded-xl font-label-md bg-primary text-on-primary hover:bg-neutral-800 transition-colors disabled:opacity-50 flex items-center gap-2"
          >
            {loading ? (
              <><span className="w-4 h-4 border-2 border-on-primary border-t-transparent rounded-full animate-spin"></span> Menyimpan...</>
            ) : (
              'Simpan Pengalaman'
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ExperienceModal;
