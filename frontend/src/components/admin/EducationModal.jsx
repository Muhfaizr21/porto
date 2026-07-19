import React, { useState, useEffect } from 'react';
import { FiX } from 'react-icons/fi';

const months = ["Januari", "Februari", "Maret", "April", "Mei", "Juni", "Juli", "Agustus", "September", "Oktober", "November", "Desember"];
const currentYear = new Date().getFullYear();
const years = Array.from({ length: 30 }, (_, i) => (currentYear + 5 - i).toString()); // allow future years for expected graduation

const EducationModal = ({ isOpen, onClose, education, onSave }) => {
  const [formData, setFormData] = useState({
    school: '',
    degree: '',
    field_of_study: '',
    start_month: '',
    start_year: '',
    end_month: '',
    end_year: '',
    grade: '',
    activities_and_societies: '',
    description: ''
  });
  
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    if (education) {
      setFormData({
        school: education.school || '',
        degree: education.degree || '',
        field_of_study: education.field_of_study || '',
        start_month: education.start_month || '',
        start_year: education.start_year || '',
        end_month: education.end_month || '',
        end_year: education.end_year || '',
        grade: education.grade || '',
        activities_and_societies: education.activities_and_societies || '',
        description: education.description || ''
      });
    } else {
      setFormData({
        school: '',
        degree: '',
        field_of_study: '',
        start_month: '',
        start_year: '',
        end_month: '',
        end_year: '',
        grade: '',
        activities_and_societies: '',
        description: ''
      });
    }
    setError('');
  }, [education, isOpen]);

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
      const payload = { ...formData };
      
      const url = education ? `/api/admin/educations/${education.id}` : '/api/admin/educations';
      const method = education ? 'PUT' : 'POST';

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
            {education ? 'Edit Pendidikan' : 'Tambah Pendidikan'}
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
          
          <form id="education-form" onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <label className="text-sm font-medium text-secondary">Sekolah / Universitas *</label>
              <input 
                type="text" 
                name="school" 
                value={formData.school} 
                onChange={handleChange} 
                required
                placeholder="Misal: Universitas Indonesia"
                className="w-full bg-surface-container border border-outline-variant rounded-xl px-4 py-2.5 text-primary focus:outline-none focus:border-blue-500 transition-colors"
              />
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-medium text-secondary">Gelar</label>
                <input 
                  type="text" 
                  name="degree" 
                  value={formData.degree} 
                  onChange={handleChange} 
                  placeholder="Misal: Sarjana Komputer"
                  className="w-full bg-surface-container border border-outline-variant rounded-xl px-4 py-2.5 text-primary focus:outline-none focus:border-blue-500 transition-colors"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-secondary">Bidang Studi</label>
                <input 
                  type="text" 
                  name="field_of_study" 
                  value={formData.field_of_study} 
                  onChange={handleChange} 
                  placeholder="Misal: Teknik Informatika"
                  className="w-full bg-surface-container border border-outline-variant rounded-xl px-4 py-2.5 text-primary focus:outline-none focus:border-blue-500 transition-colors"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-medium text-secondary">Tanggal Mulai (Opsional)</label>
                <div className="flex gap-2">
                  <select
                    name="start_month"
                    value={formData.start_month}
                    onChange={handleChange}
                    className="w-full bg-surface-container border border-outline-variant rounded-xl px-3 py-2.5 text-primary focus:outline-none focus:border-blue-500 transition-colors"
                  >
                    <option value="">Bulan</option>
                    {months.map(m => <option key={m} value={m}>{m}</option>)}
                  </select>
                  <select
                    name="start_year"
                    value={formData.start_year}
                    onChange={handleChange}
                    className="w-full bg-surface-container border border-outline-variant rounded-xl px-3 py-2.5 text-primary focus:outline-none focus:border-blue-500 transition-colors"
                  >
                    <option value="">Tahun</option>
                    {years.map(y => <option key={y} value={y}>{y}</option>)}
                  </select>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-secondary">Tanggal Berakhir (Atau Perkiraan)</label>
                <div className="flex gap-2">
                  <select
                    name="end_month"
                    value={formData.end_month}
                    onChange={handleChange}
                    className="w-full bg-surface-container border border-outline-variant rounded-xl px-3 py-2.5 text-primary focus:outline-none focus:border-blue-500 transition-colors"
                  >
                    <option value="">Bulan</option>
                    {months.map(m => <option key={m} value={m}>{m}</option>)}
                  </select>
                  <select
                    name="end_year"
                    value={formData.end_year}
                    onChange={handleChange}
                    className="w-full bg-surface-container border border-outline-variant rounded-xl px-3 py-2.5 text-primary focus:outline-none focus:border-blue-500 transition-colors"
                  >
                    <option value="">Tahun</option>
                    {years.map(y => <option key={y} value={y}>{y}</option>)}
                  </select>
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-secondary">Nilai / IPK</label>
              <input 
                type="text" 
                name="grade" 
                value={formData.grade} 
                onChange={handleChange} 
                placeholder="Misal: 3.8 / 4.0"
                className="w-full bg-surface-container border border-outline-variant rounded-xl px-4 py-2.5 text-primary focus:outline-none focus:border-blue-500 transition-colors"
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-secondary">Aktivitas dan Organisasi</label>
              <textarea 
                name="activities_and_societies" 
                value={formData.activities_and_societies} 
                onChange={handleChange} 
                rows={3}
                placeholder="Misal: Himpunan Mahasiswa, Tim Robotik..."
                className="w-full bg-surface-container border border-outline-variant rounded-xl px-4 py-2.5 text-primary focus:outline-none focus:border-blue-500 transition-colors resize-y"
              ></textarea>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-secondary">Deskripsi Singkat (Mendukung Tag HTML)</label>
              <textarea 
                name="description" 
                value={formData.description} 
                onChange={handleChange} 
                rows={4}
                className="w-full bg-surface-container border border-outline-variant rounded-xl px-4 py-2.5 text-primary focus:outline-none focus:border-blue-500 transition-colors resize-y min-h-[100px]"
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
            form="education-form"
            disabled={loading}
            className="px-5 py-2.5 rounded-xl font-label-md bg-primary text-on-primary hover:bg-neutral-800 transition-colors disabled:opacity-50 flex items-center gap-2"
          >
            {loading ? (
              <><span className="w-4 h-4 border-2 border-on-primary border-t-transparent rounded-full animate-spin"></span> Menyimpan...</>
            ) : (
              'Simpan Pendidikan'
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default EducationModal;
