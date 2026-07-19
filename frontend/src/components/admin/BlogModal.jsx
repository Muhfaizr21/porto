import React, { useState, useEffect } from 'react';
import { FiX, FiUploadCloud } from 'react-icons/fi';

const BlogModal = ({ isOpen, onClose, blog, onSave }) => {
  const [formData, setFormData] = useState({
    title: '',
    slug: '',
    content: ''
  });
  
  const [imageFile, setImageFile] = useState(null);
  const [imagePreview, setImagePreview] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    if (blog) {
      setFormData({
        title: blog.title || '',
        slug: blog.slug || '',
        content: blog.content || ''
      });
      if (blog.image) {
        setImagePreview(blog.image.startsWith('http') ? blog.image : `/api/uploads/${blog.image}`);
      } else {
        setImagePreview('');
      }
    } else {
      setFormData({
        title: '',
        slug: '',
        content: ''
      });
      setImagePreview('');
    }
    setImageFile(null);
    setError('');
  }, [blog, isOpen]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'title') {
      // Auto generate slug
      const slug = value.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, '');
      setFormData(prev => ({ ...prev, [name]: value, slug }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
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
      formDataToSend.append('slug', formData.slug);
      formDataToSend.append('content', formData.content);
      
      if (imageFile) {
        formDataToSend.append('image', imageFile);
      }

      const url = blog ? `/api/admin/blogs/${blog.id}` : '/api/admin/blogs';
      const method = blog ? 'PUT' : 'POST';

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
            {blog ? 'Edit Blog' : 'Tambah Blog'}
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
          
          <form id="blog-form" onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-medium text-secondary">Judul Artikel</label>
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
                <label className="text-sm font-medium text-secondary">Slug</label>
                <input 
                  type="text" 
                  name="slug" 
                  value={formData.slug} 
                  onChange={handleChange} 
                  required
                  className="w-full bg-surface-container border border-outline-variant rounded-xl px-4 py-2.5 text-primary focus:outline-none focus:border-blue-500 transition-colors"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-secondary">Konten Artikel (Markdown / Plain Text)</label>
              <textarea 
                name="content" 
                value={formData.content} 
                onChange={handleChange} 
                required
                rows={10}
                className="w-full bg-surface-container border border-outline-variant rounded-xl px-4 py-2.5 text-primary focus:outline-none focus:border-blue-500 transition-colors resize-y font-mono text-sm"
              ></textarea>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-secondary">Gambar Artikel (Cover)</label>
              
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
            form="blog-form"
            disabled={loading}
            className="px-5 py-2.5 rounded-xl font-label-md bg-primary text-on-primary hover:bg-neutral-800 transition-colors disabled:opacity-50 flex items-center gap-2"
          >
            {loading ? (
              <><span className="w-4 h-4 border-2 border-on-primary border-t-transparent rounded-full animate-spin"></span> Menyimpan...</>
            ) : (
              'Simpan Blog'
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default BlogModal;
