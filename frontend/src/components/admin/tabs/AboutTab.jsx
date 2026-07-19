import React, { useState, useEffect } from 'react';
import { FiSave, FiUploadCloud } from 'react-icons/fi';

const AboutTab = () => {
  const [formData, setFormData] = useState({
    title: '',
    description_1: '',
    description_2: '',
    stat_1_label: '',
    stat_1_value: '',
    stat_2_label: '',
    stat_2_value: '',
    stat_3_label: '',
    stat_3_value: '',
  });

  const [imageFile, setImageFile] = useState(null);
  const [cvFile, setCvFile] = useState(null);
  
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState({ type: '', text: '' });

  useEffect(() => {
    fetchAbout();
  }, []);

  const fetchAbout = async () => {
    try {
      setLoading(true);
      const res = await fetch('/api/about');
      const json = await res.json();
      if (res.ok && json.data) {
        setFormData({
          title: json.data.title || '',
          description_1: json.data.description_1 || '',
          description_2: json.data.description_2 || '',
          stat_1_label: json.data.stat_1_label || '',
          stat_1_value: json.data.stat_1_value || '',
          stat_2_label: json.data.stat_2_label || '',
          stat_2_value: json.data.stat_2_value || '',
          stat_3_label: json.data.stat_3_label || '',
          stat_3_value: json.data.stat_3_value || '',
        });
      }
    } catch (err) {
      setMessage({ type: 'error', text: 'Gagal memuat data.' });
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSaving(true);
    setMessage({ type: '', text: '' });

    try {
      const token = localStorage.getItem('token');
      const submitData = new FormData();
      
      // Append text fields
      Object.keys(formData).forEach(key => {
        submitData.append(key, formData[key]);
      });

      // Append files
      if (imageFile) submitData.append('image', imageFile);
      if (cvFile) submitData.append('cv', cvFile);

      const res = await fetch('/api/admin/about', {
        method: 'PUT',
        headers: {
          'Authorization': `Bearer ${token}`
        },
        body: submitData
      });

      if (res.ok) {
        setMessage({ type: 'success', text: 'Data berhasil disimpan.' });
        setImageFile(null);
        setCvFile(null);
        fetchAbout(); // refresh state
      } else {
        const err = await res.json();
        setMessage({ type: 'error', text: err.error || 'Gagal menyimpan data.' });
      }
    } catch (err) {
      setMessage({ type: 'error', text: 'Gagal menghubungi server.' });
    } finally {
      setSaving(false);
    }
  };

  if (loading) {
    return <div className="text-center py-20 text-secondary"><div className="inline-block w-8 h-8 border-2 border-primary border-t-transparent rounded-full animate-spin mb-4"></div><p>Memuat profil...</p></div>;
  }

  return (
    <div className="animate-fade-in max-w-4xl mx-auto">
      <header className="mb-8">
        <h2 className="text-3xl font-headline-md text-primary">Tentang Saya</h2>
        <p className="text-secondary mt-2">Atur profil, CV, dan teks pada bagian Tentang Saya di halaman utama.</p>
      </header>

      {message.text && (
        <div className={`mb-6 p-4 rounded-xl border ${message.type === 'error' ? 'bg-red-500/10 text-red-500 border-red-500/20' : 'bg-green-500/10 text-green-500 border-green-500/20'}`}>
          {message.text}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-8 bg-surface p-6 md:p-8 rounded-3xl border border-outline-variant shadow-sm">
        
        {/* Texts */}
        <div className="space-y-4">
          <h3 className="text-lg font-headline-sm text-primary border-b border-outline-variant pb-2">Konten Teks</h3>
          
          <div>
            <label className="block text-sm font-medium text-secondary mb-1">Judul Profil</label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              className="w-full px-4 py-2 bg-background border border-outline-variant rounded-xl focus:outline-none focus:border-blue-500 text-primary"
              placeholder="Contoh: Arsitek Sistem yang Berorientasi pada Efisiensi."
              required
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-secondary mb-1">Deskripsi Paragraf 1</label>
            <textarea
              name="description_1"
              value={formData.description_1}
              onChange={handleChange}
              rows="4"
              className="w-full px-4 py-2 bg-background border border-outline-variant rounded-xl focus:outline-none focus:border-blue-500 text-primary resize-y"
              placeholder="Saya adalah seorang Full-Stack..."
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-secondary mb-1">Deskripsi Paragraf 2</label>
            <textarea
              name="description_2"
              value={formData.description_2}
              onChange={handleChange}
              rows="4"
              className="w-full px-4 py-2 bg-background border border-outline-variant rounded-xl focus:outline-none focus:border-blue-500 text-primary resize-y"
              placeholder="Keahlian utama saya terletak..."
              required
            />
          </div>
        </div>

        {/* Stats */}
        <div className="space-y-4">
          <h3 className="text-lg font-headline-sm text-primary border-b border-outline-variant pb-2">Sorotan / Stats</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-medium text-secondary mb-1">Sorotan 1 (Label & Nilai)</label>
              <div className="flex gap-2">
                <input
                  type="text"
                  name="stat_1_label"
                  value={formData.stat_1_label}
                  onChange={handleChange}
                  className="w-1/2 px-4 py-2 bg-background border border-outline-variant rounded-xl focus:outline-none focus:border-blue-500 text-primary"
                  placeholder="Teknik"
                />
                <input
                  type="text"
                  name="stat_1_value"
                  value={formData.stat_1_value}
                  onChange={handleChange}
                  className="w-1/2 px-4 py-2 bg-background border border-outline-variant rounded-xl focus:outline-none focus:border-blue-500 text-primary"
                  placeholder="INFORMATIKA"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-medium text-secondary mb-1">Sorotan 2 (Label & Nilai)</label>
              <div className="flex gap-2">
                <input
                  type="text"
                  name="stat_2_label"
                  value={formData.stat_2_label}
                  onChange={handleChange}
                  className="w-1/2 px-4 py-2 bg-background border border-outline-variant rounded-xl focus:outline-none focus:border-blue-500 text-primary"
                  placeholder="Full-Stack"
                />
                <input
                  type="text"
                  name="stat_2_value"
                  value={formData.stat_2_value}
                  onChange={handleChange}
                  className="w-1/2 px-4 py-2 bg-background border border-outline-variant rounded-xl focus:outline-none focus:border-blue-500 text-primary"
                  placeholder="SOFTWARE ENG"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-medium text-secondary mb-1">Sorotan 3 (Label & Nilai)</label>
              <div className="flex gap-2">
                <input
                  type="text"
                  name="stat_3_label"
                  value={formData.stat_3_label}
                  onChange={handleChange}
                  className="w-1/2 px-4 py-2 bg-background border border-outline-variant rounded-xl focus:outline-none focus:border-blue-500 text-primary"
                  placeholder="Automated"
                />
                <input
                  type="text"
                  name="stat_3_value"
                  value={formData.stat_3_value}
                  onChange={handleChange}
                  className="w-1/2 px-4 py-2 bg-background border border-outline-variant rounded-xl focus:outline-none focus:border-blue-500 text-primary"
                  placeholder="MONITORING"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Media */}
        <div className="space-y-4">
          <h3 className="text-lg font-headline-sm text-primary border-b border-outline-variant pb-2">Media & File</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-secondary mb-1">Foto Profil</label>
              <div className="border-2 border-dashed border-outline-variant rounded-2xl p-6 text-center hover:bg-surface-container transition-colors relative">
                <input 
                  type="file" 
                  accept="image/*"
                  onChange={e => setImageFile(e.target.files[0])}
                  className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                />
                <div className="text-secondary flex flex-col items-center">
                  <FiUploadCloud size={24} className="mb-2" />
                  <span className="text-sm font-medium">
                    {imageFile ? imageFile.name : 'Pilih Gambar...'}
                  </span>
                  {!imageFile && <span className="text-xs mt-1">Kosongkan jika tidak diubah</span>}
                </div>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-secondary mb-1">File CV (PDF)</label>
              <div className="border-2 border-dashed border-outline-variant rounded-2xl p-6 text-center hover:bg-surface-container transition-colors relative">
                <input 
                  type="file" 
                  accept="application/pdf"
                  onChange={e => setCvFile(e.target.files[0])}
                  className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                />
                <div className="text-secondary flex flex-col items-center">
                  <FiUploadCloud size={24} className="mb-2" />
                  <span className="text-sm font-medium">
                    {cvFile ? cvFile.name : 'Pilih File PDF...'}
                  </span>
                  {!cvFile && <span className="text-xs mt-1">Kosongkan jika tidak diubah</span>}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-6 flex justify-end">
          <button
            type="submit"
            disabled={saving}
            className="flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-xl font-label-md hover:bg-blue-700 transition-colors disabled:opacity-50"
          >
            {saving ? (
              <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
            ) : (
              <FiSave />
            )}
            {saving ? 'Menyimpan...' : 'Simpan Perubahan'}
          </button>
        </div>
      </form>
    </div>
  );
};

export default AboutTab;
