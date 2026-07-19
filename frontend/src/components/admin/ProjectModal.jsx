import React, { useState, useEffect } from 'react';
import { FiX, FiUploadCloud } from 'react-icons/fi';

const ProjectModal = ({ isOpen, onClose, project, onSave }) => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    year: new Date().getFullYear().toString(),
    url: '',
    repo_url: '',
    demo_url: '',
    tags: '',
    color: '#3B82F6'
  });
  
  const [imageFile, setImageFile] = useState(null);
  const [imagePreview, setImagePreview] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    if (project) {
      setFormData({
        title: project.title || '',
        description: project.description || '',
        year: project.year || new Date().getFullYear().toString(),
        url: project.url || '',
        repo_url: project.repo_url || '',
        demo_url: project.demo_url || '',
        problem: project.problem || '',
        solution: project.solution || '',
        impact: project.impact || '',
        tags: (() => {
          if (!project.tags) return '';
          try {
            const parsed = JSON.parse(project.tags);
            return Array.isArray(parsed) ? parsed.join(', ') : String(parsed);
          } catch (e) {
            if (Array.isArray(project.tags)) return project.tags.join(', ');
            return typeof project.tags === 'string' ? project.tags.replace(/^\[|\]$/g, '').replace(/"/g, '').trim() : '';
          }
        })(),
        color: project.color || '#3B82F6'
      });
      if (project.image) {
        setImagePreview(project.image.startsWith('http') ? project.image : `/api/uploads/${project.image}`);
      } else {
        setImagePreview('');
      }
    } else {
      setFormData({
        title: '',
        description: '',
        year: new Date().getFullYear().toString(),
        url: '',
        repo_url: '',
        demo_url: '',
        problem: '',
        solution: '',
        impact: '',
        tags: '',
        color: '#3B82F6'
      });
      setImagePreview('');
    }
    setImageFile(null);
    setError('');
  }, [project, isOpen]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImageFile(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const token = localStorage.getItem('token');
      const formDataToSend = new FormData();
      
      formDataToSend.append('title', formData.title);
      formDataToSend.append('description', formData.description);
      formDataToSend.append('year', formData.year);
      formDataToSend.append('url', formData.url);
      formDataToSend.append('repo_url', formData.repo_url);
      formDataToSend.append('demo_url', formData.demo_url);
      formDataToSend.append('problem', formData.problem);
      formDataToSend.append('solution', formData.solution);
      formDataToSend.append('impact', formData.impact);
      
      const tagsArray = formData.tags.split(',').map(tag => tag.trim()).filter(tag => tag);
      formDataToSend.append('tags', JSON.stringify(tagsArray));
      formDataToSend.append('color', formData.color);
      
      if (imageFile) {
        formDataToSend.append('image', imageFile);
      }

      const url = project ? `/api/admin/projects/${project.id}` : '/api/admin/projects';
      const method = project ? 'PUT' : 'POST';

      const res = await fetch(url, {
        method,
        headers: {
          'Authorization': `Bearer ${token}`
        },
        body: formDataToSend
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
            {project ? 'Edit Proyek' : 'Tambah Proyek'}
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
          
          <form id="project-form" onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-medium text-secondary">Judul Proyek</label>
                <input 
                  type="text" 
                  name="title" 
                  value={formData.title} 
                  onChange={handleChange} 
                  required
                  className="w-full bg-surface-container border border-outline-variant rounded-xl px-4 py-2.5 text-primary focus:outline-none focus:border-blue-500 transition-colors"
                />
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium text-secondary">Tahun</label>
                <input 
                  type="text" 
                  name="year" 
                  value={formData.year} 
                  onChange={handleChange} 
                  required
                  className="w-full bg-surface-container border border-outline-variant rounded-xl px-4 py-2.5 text-primary focus:outline-none focus:border-blue-500 transition-colors"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-secondary">Deskripsi Singkat</label>
              <textarea 
                name="description" 
                value={formData.description} 
                onChange={handleChange} 
                required
                rows={3}
                className="w-full bg-surface-container border border-outline-variant rounded-xl px-4 py-2.5 text-primary focus:outline-none focus:border-blue-500 transition-colors resize-none"
              ></textarea>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-secondary">Problem (Studi Kasus)</label>
              <textarea 
                name="problem" 
                value={formData.problem} 
                onChange={handleChange} 
                rows={3}
                className="w-full bg-surface-container border border-outline-variant rounded-xl px-4 py-2.5 text-primary focus:outline-none focus:border-blue-500 transition-colors resize-none"
              ></textarea>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-secondary">Solution (Studi Kasus)</label>
              <textarea 
                name="solution" 
                value={formData.solution} 
                onChange={handleChange} 
                rows={3}
                className="w-full bg-surface-container border border-outline-variant rounded-xl px-4 py-2.5 text-primary focus:outline-none focus:border-blue-500 transition-colors resize-none"
              ></textarea>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-secondary">Impact (Studi Kasus)</label>
              <textarea 
                name="impact" 
                value={formData.impact} 
                onChange={handleChange} 
                rows={3}
                className="w-full bg-surface-container border border-outline-variant rounded-xl px-4 py-2.5 text-primary focus:outline-none focus:border-blue-500 transition-colors resize-none"
              ></textarea>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-secondary">Tags (pisahkan dengan koma)</label>
              <input 
                type="text" 
                name="tags" 
                value={formData.tags} 
                onChange={handleChange} 
                placeholder="React, Golang, Tailwind"
                className="w-full bg-surface-container border border-outline-variant rounded-xl px-4 py-2.5 text-primary focus:outline-none focus:border-blue-500 transition-colors"
              />
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-medium text-secondary">URL Proyek (Opsional)</label>
                <input 
                  type="url" 
                  name="url" 
                  value={formData.url} 
                  onChange={handleChange} 
                  className="w-full bg-surface-container border border-outline-variant rounded-xl px-4 py-2.5 text-primary focus:outline-none focus:border-blue-500 transition-colors"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-secondary">Warna Tema (Hex)</label>
                <div className="flex gap-2">
                  <input 
                    type="color" 
                    name="color" 
                    value={formData.color} 
                    onChange={handleChange} 
                    className="h-11 w-11 rounded border border-outline-variant cursor-pointer"
                  />
                  <input 
                    type="text" 
                    name="color" 
                    value={formData.color} 
                    onChange={handleChange} 
                    className="flex-1 bg-surface-container border border-outline-variant rounded-xl px-4 py-2.5 text-primary focus:outline-none focus:border-blue-500 transition-colors uppercase"
                  />
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-medium text-secondary">URL Repositori (Opsional)</label>
                <input 
                  type="url" 
                  name="repo_url" 
                  value={formData.repo_url} 
                  onChange={handleChange} 
                  className="w-full bg-surface-container border border-outline-variant rounded-xl px-4 py-2.5 text-primary focus:outline-none focus:border-blue-500 transition-colors"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-secondary">URL Demo (Opsional)</label>
                <input 
                  type="url" 
                  name="demo_url" 
                  value={formData.demo_url} 
                  onChange={handleChange} 
                  className="w-full bg-surface-container border border-outline-variant rounded-xl px-4 py-2.5 text-primary focus:outline-none focus:border-blue-500 transition-colors"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-secondary">Gambar Proyek</label>
              
              <div className="flex flex-col sm:flex-row gap-4 items-start">
                {imagePreview ? (
                  <div className="relative w-40 h-24 rounded-xl overflow-hidden border border-outline-variant shrink-0">
                    <img src={imagePreview} alt="Preview" className="w-full h-full object-cover" />
                  </div>
                ) : (
                  <div className="w-40 h-24 rounded-xl border border-outline-variant border-dashed flex items-center justify-center text-secondary bg-surface-container shrink-0">
                    Tidak ada gambar
                  </div>
                )}
                
                <div className="flex-1 w-full relative">
                  <input 
                    type="file" 
                    accept="image/*" 
                    onChange={handleImageChange}
                    className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                  />
                  <div className="w-full bg-surface-container border border-outline-variant border-dashed rounded-xl px-4 py-4 text-center hover:bg-surface-container-high transition-colors">
                    <FiUploadCloud className="mx-auto text-2xl text-secondary mb-2" />
                    <p className="text-sm font-medium text-primary">Klik atau seret gambar ke sini</p>
                    <p className="text-xs text-secondary mt-1">Maks 2MB (JPG, PNG, WebP)</p>
                  </div>
                </div>
              </div>
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
            form="project-form"
            disabled={loading}
            className="px-5 py-2.5 rounded-xl font-label-md bg-primary text-on-primary hover:bg-neutral-800 transition-colors disabled:opacity-50 flex items-center gap-2"
          >
            {loading ? (
              <><span className="w-4 h-4 border-2 border-on-primary border-t-transparent rounded-full animate-spin"></span> Menyimpan...</>
            ) : (
              'Simpan Proyek'
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;
